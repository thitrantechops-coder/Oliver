#!/bin/bash
set -euo pipefail
ROOT=/workspace
FILM=$ROOT/tmp/film
FONT=$ROOT/tmp/fonts/BeVietnamPro-Medium.ttf
OUT=$ROOT/public/videos/oliver-intro.mp4
POSTER=$ROOT/public/videos/oliver-intro-poster.jpg
mkdir -p "$ROOT/public/videos" "$FILM/norm"

# Normalize 10s clips: 1280x720 24fps, soft fade, no source audio
i=1
for f in 01-city 02-lobby 03-tech 04-community 05-towers; do
  ffmpeg -y -hide_banner -loglevel error -i "$FILM/${f}.mp4" -t 10 \
    -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,fade=t=in:st=0:d=0.5,fade=t=out:st=9.5:d=0.5" \
    -an -c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p "$FILM/norm/${i}.mp4"
  i=$((i+1))
done

printf "file '%s'\n" "$FILM/norm/1.mp4" "$FILM/norm/2.mp4" "$FILM/norm/3.mp4" "$FILM/norm/4.mp4" "$FILM/norm/5.mp4" > "$FILM/list.txt"
ffmpeg -y -hide_banner -loglevel error -f concat -safe 0 -i "$FILM/list.txt" -c copy "$FILM/concat.mp4"

# Overlay copy — Longfor style: sparse, lower-third, Vietnamese
# t: 0-10 city | 10-20 lobby | 20-30 tech | 30-40 community | 40-50 close
draw() {
  local enable="$1" size="$2" y="$3" file="$4"
  echo "drawtext=fontfile=${FONT}:textfile=${file}:fontsize=${size}:fontcolor=white:line_spacing=12:x=(w-text_w)/2:y=${y}:shadowcolor=black@0.65:shadowx=0:shadowy=2:enable='${enable}'"
}

cat > "$FILM/t1.txt" <<'EOF'
Có những tòa nhà bạn chỉ nhận ra
khi sự cố xảy ra.
EOF
cat > "$FILM/t2.txt" <<'EOF'
Oliver muốn bạn
không phải nhận ra chúng tôi.
EOF
cat > "$FILM/t3a.txt" <<'EOF'
4.036 căn hộ
EOF
cat > "$FILM/t3b.txt" <<'EOF'
46 tòa nhà  ·  Airy  ·  Lễ tân AI
EOF
cat > "$FILM/t4a.txt" <<'EOF'
Công nghệ đứng phía sau
EOF
cat > "$FILM/t4b.txt" <<'EOF'
Con người được phục vụ phía trước
EOF
cat > "$FILM/t5a.txt" <<'EOF'
Quản trị bằng trí tuệ
Phụng sự từ tâm
EOF
cat > "$FILM/t5b.txt" <<'EOF'
OLIVER
EOF
cat > "$FILM/t0.txt" <<'EOF'
Hồ sơ năng lực  ·  2026
EOF

VF="drawbox=x=0:y=ih-240:w=iw:h=240:color=black@0.38:t=fill:enable='between(t,2.4,49)',\
$(draw "between(t,0.8,8.8)" 18 64 "$FILM/t0.txt"),\
$(draw "between(t,3.2,9.4)" 34 560 "$FILM/t1.txt"),\
$(draw "between(t,11.2,19.2)" 36 560 "$FILM/t2.txt"),\
$(draw "between(t,21.2,29.0)" 48 540 "$FILM/t3a.txt"),\
$(draw "between(t,21.8,29.0)" 22 610 "$FILM/t3b.txt"),\
$(draw "between(t,31.2,39.2)" 36 545 "$FILM/t4a.txt"),\
$(draw "between(t,32.0,39.2)" 22 610 "$FILM/t4b.txt"),\
$(draw "between(t,41.2,49.4)" 36 530 "$FILM/t5a.txt"),\
$(draw "between(t,42.4,49.6)" 28 640 "$FILM/t5b.txt")"

# Voice: slightly slower, enter at 2s. Ambient brown noise under picture.
ffmpeg -y -hide_banner -loglevel error \
  -i "$FILM/concat.mp4" \
  -i "$FILM/vo.mp3" \
  -f lavfi -t 50 -i "anoisesrc=color=brown:amplitude=0.012:sample_rate=48000" \
  -filter_complex "[0:v]${VF}[v];\
[1:a]atempo=0.90,adelay=2000|2000,aresample=48000,aformat=channel_layouts=stereo,volume=2.1[vo];\
[2:a]aformat=channel_layouts=stereo,volume=0.55,afade=t=in:d=1.5,afade=t=out:st=47:d=3[bed];\
[bed][vo]amix=inputs=2:duration=first:dropout_transition=3[a]" \
  -map "[v]" -map "[a]" -t 50 \
  -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p \
  -c:a aac -b:a 192k -movflags +faststart \
  "$OUT"

ffmpeg -y -hide_banner -loglevel error -ss 3.2 -i "$OUT" -frames:v 1 -q:v 3 "$POSTER"
ls -la "$OUT" "$POSTER"
ffmpeg -hide_banner -i "$OUT" 2>&1 | head -18
