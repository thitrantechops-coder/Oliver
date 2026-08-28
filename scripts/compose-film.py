#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import subprocess

FILM = Path("/workspace/tmp/film")
FONT_M = "/workspace/tmp/fonts/BeVietnamPro-Medium.ttf"
FONT_R = "/workspace/tmp/fonts/BeVietnamPro-Regular.ttf"
W, H = 1280, 720
OUT = Path("/workspace/public/videos/oliver-intro.mp4")
POSTER = Path("/workspace/public/videos/oliver-intro-poster.jpg")
OUT.parent.mkdir(parents=True, exist_ok=True)


def load_font(path, size):
    return ImageFont.truetype(path, size)


def card(lines, sizes, y_start=500):
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    # bottom wash
    wash = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    px = wash.load()
    for y in range(H):
        if y < 420:
            continue
        a = int(150 * (y - 420) / (H - 420))
        for x in range(W):
            px[x, y] = (8, 8, 8, a)
    img = Image.alpha_composite(img, wash)
    draw = ImageDraw.Draw(img)
    y = y_start
    for line, size in zip(lines, sizes):
        font = load_font(FONT_M if size >= 30 else FONT_R, size)
        bbox = draw.textbbox((0, 0), line, font=font)
        tw = bbox[2] - bbox[0]
        x = (W - tw) // 2
        # soft shadow
        for dx, dy in ((0, 2), (0, 3)):
            draw.text((x + dx, y + dy), line, font=font, fill=(0, 0, 0, 140))
        draw.text((x, y), line, font=font, fill=(255, 255, 255, 235))
        y += size + 14
    return img


def top_tag(text):
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    font = load_font(FONT_R, 18)
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    x = (W - tw) // 2
    draw.text((x, 56), text, font=font, fill=(255, 255, 255, 190))
    return img


overlays = {
    "tag": top_tag("HỒ SƠ NĂNG LỰC  ·  2026"),
    "t1": card(["Có những tòa nhà bạn chỉ nhận ra", "khi sự cố xảy ra."], [32, 32], 508),
    "t2": card(["Oliver muốn bạn", "không phải nhận ra chúng tôi."], [34, 34], 508),
    "t3": card(["4.036 căn hộ", "46 tòa nhà  ·  Airy  ·  Lễ tân AI"], [48, 22], 500),
    "t4": card(["Công nghệ đứng phía sau", "Con người được phục vụ phía trước"], [34, 22], 508),
    "t5": card(["Quản trị bằng trí tuệ", "Phụng sự từ tâm", "OLIVER"], [34, 34, 26], 478),
}

ovdir = FILM / "ov"
ovdir.mkdir(exist_ok=True)
for k, im in overlays.items():
    im.save(ovdir / f"{k}.png")

# timings: overlay enable windows (seconds)
windows = [
    ("tag", 0.6, 9.0),
    ("t1", 2.8, 9.5),
    ("t2", 11.0, 19.3),
    ("t3", 21.0, 29.2),
    ("t4", 31.0, 39.3),
    ("t5", 41.0, 49.7),
]

inputs = ["-i", str(FILM / "concat.mp4"), "-i", str(FILM / "vo.mp3"),
          "-f", "lavfi", "-t", "50", "-i", "anoisesrc=color=brown:amplitude=0.012:sample_rate=48000"]
for name, _, _ in windows:
    inputs += ["-i", str(ovdir / f"{name}.png")]

# video graph: [0:v][3]overlay=enable...[v1]; [v1][4]overlay...
n_base = 3  # concat, vo, noise
parts = []
last = "0:v"
for i, (name, t0, t1) in enumerate(windows):
    src = n_base + i
    dest = f"v{i}"
    parts.append(
        f"[{last}][{src}:v]overlay=0:0:enable='between(t,{t0},{t1})'[{dest}]"
    )
    last = dest

audio = (
    f"[1:a]atempo=0.90,adelay=2000|2000,aresample=48000,aformat=channel_layouts=stereo,volume=2.2[vo];"
    f"[2:a]aformat=channel_layouts=stereo,volume=0.5,afade=t=in:d=1.5,afade=t=out:st=47:d=3[bed];"
    f"[bed][vo]amix=inputs=2:duration=first:dropout_transition=3[a]"
)
graph = ";".join(parts) + ";" + audio

cmd = [
    "ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
    *inputs,
    "-filter_complex", graph,
    "-map", f"[{last}]", "-map", "[a]", "-t", "50",
    "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart",
    str(OUT),
]
print("ffmpeg compose...")
subprocess.check_call(cmd)
subprocess.check_call([
    "ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
    "-ss", "3.5", "-i", str(OUT), "-frames:v", "1", "-q:v", "3", str(POSTER),
])
print("wrote", OUT, OUT.stat().st_size)
