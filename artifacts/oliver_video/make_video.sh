#!/bin/bash
set -e
cd /home/workdir/artifacts/oliver_video

FONT="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT2="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
OUT_TMP="/home/workdir/artifacts/Oliver_Intro_Video.tmp.mp4"
OUT="/home/workdir/artifacts/Oliver_Intro_Video.mp4"
VO="/home/workdir/artifacts/oliver_intro_vo.mp3"

# Prepare 1920x1080 clips with slow zoom and text
# clip durations totaling ~131s
# 1: 16s city
# 2: 18s community
# 3: 20s app
# 4: 20s AI lobby
# 5: 18s operations
# 6: 20s township
# 7: 19s end

make_clip() {
  local img="$1"
  local dur="$2"
  local out="$3"
  local title="$4"
  local sub="$5"
  ffmpeg -y -loop 1 -i "$img" -t "$dur" \
    -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,zoompan=z='min(1.12,1+0.0012*on)':d=1:s=1920x1080:fps=25,eq=contrast=1.04:saturation=1.05,drawbox=x=0:y=880:w=1920:h=200:color=black@0.45:t=fill,drawtext=fontfile=${FONT}:text='${title}':fontcolor=white:fontsize=48:x=80:y=910,drawtext=fontfile=${FONT2}:text='${sub}':fontcolor=white@0.9:fontsize=28:x=80:y=980" \
    -c:v libx264 -pix_fmt yuv420p -preset veryfast -crf 20 "$out"
}

make_clip p3GTT.jpg 16 c1.mp4 "OLIVER" "Đổi mới · Sáng tạo · Uy tín · Minh bạch"
make_clip ChWSt.jpg 18 c2.mp4 "4.036 căn hộ  |  46 tòa nhà  |  5 thành phố" "Nâng tầm giá trị sống bằng công nghệ"
make_clip 8BKQr.jpg 20 c3.mp4 "Siêu ứng dụng Airy" "Không giấy tờ · Không tiền mặt · Một chạm"
make_clip Lq7R3.jpg 20 c4.mp4 "Lễ tân AI 24/7  ·  FaceID  ·  Neon AI" "Công nghệ vô hình – Tiện nghi hữu hình"
make_clip snUEM.jpg 18 c5.mp4 "70% quy trình tự động hóa" "SOP số hóa · Ticket · CSAT thời gian thực"
make_clip zIn8v.jpg 20 c6.mp4 "K-City  ·  40.000 căn NOXH" "Đối tác chiến lược Kim Oanh Group"
make_clip fjJiL.jpg 19.3 c7.mp4 "oliver.com.vn  |  0909.743.007" "Công nghệ phục vụ con người"

printf "file 'c1.mp4'\nfile 'c2.mp4'\nfile 'c3.mp4'\nfile 'c4.mp4'\nfile 'c5.mp4'\nfile 'c6.mp4'\nfile 'c7.mp4'\n" > list.txt

ffmpeg -y -f concat -safe 0 -i list.txt -i "$VO" -c:v libx264 -preset medium -crf 20 -c:a aac -b:a 192k -shortest -movflags +faststart "$OUT_TMP"
ffprobe -v error "$OUT_TMP"
mv "$OUT_TMP" "$OUT"
echo "DONE $OUT"
ls -lh "$OUT"
ffprobe -hide_banner -show_entries format=duration,size -of default=noprint_wrappers=1 "$OUT"
