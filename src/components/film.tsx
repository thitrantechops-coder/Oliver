import { FilmPlayer } from "@/components/film-player";

export function Film() {
  return (
    <section id="phim" className="bg-night text-night-fg">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">Phim giới thiệu</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-medium md:text-5xl">
          Dịch vụ hay nhất là dịch vụ không bị nhận ra.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-night-muted md:text-base">
          Nhịp kể chuyện theo chuẩn Longfor Smart Living: mở bằng đời sống cư dân, để công nghệ xuất
          hiện thầm, khép bằng cam kết. 50 giây — đúng việc Oliver đang làm tại Việt Nam.
        </p>

        <div className="mt-10">
          <FilmPlayer />
        </div>

        <p className="mt-4 text-sm text-night-muted">
          Không thấy hình?{" "}
          <a className="underline decoration-bronze/60 underline-offset-4" href="/videos/oliver-intro.mp4">
            Mở file video trực tiếp
          </a>
          .
        </p>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { n: "01", t: "Thành phố", d: "Tòa nhà chỉ hiện khi sự cố — Oliver muốn ngược lại." },
            { n: "02", t: "Sảnh", d: "Con người đứng phía trước. Lễ tân không cần lớn tiếng." },
            { n: "03", t: "Công nghệ", d: "Airy, FaceID, Lễ tân AI — hạ tầng, không slogan." },
            { n: "04", t: "Cộng đồng", d: "Trung thu, sân chơi, đời sống nội khu." },
            { n: "05", t: "Cam kết", d: "Quản trị bằng trí tuệ. Phụng sự từ tâm." },
          ].map((s) => (
            <li key={s.n} className="border-t border-night-fg/15 pt-4">
              <p className="font-display text-xl text-bronze">{s.n}</p>
              <h3 className="mt-1 font-display text-lg font-medium">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-night-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
