import { Play } from "lucide-react";
import { company } from "@/lib/content";

export function Cover() {
  return (
    <section
      id="bia"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-night text-night-fg"
    >
      <video
        className="absolute inset-0 size-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/cover-city.jpg"
        aria-hidden
      >
        <source src="/videos/cover-loop.mp4" type="video/mp4" />
      </video>
      <img
        src="/images/cover-city.jpg"
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover object-[center_28%]"
      />
      <div className="absolute inset-0 bg-linear-to-b from-night/55 via-night/25 to-night/88" />
      <div className="absolute inset-0 bg-linear-to-r from-night/50 via-transparent to-night/35" />

      <div className="relative mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-between px-5 pb-10 pt-24 md:px-10 md:pb-14 md:pt-28">
        <div className="flex justify-end">
          <div className="flex flex-col items-end">
            <img
              src="/brand/oliver-wordmark.svg"
              alt="Oliver"
              className="h-16 w-auto drop-shadow-lg brightness-0 invert md:h-24 lg:h-28"
            />

            <ul className="mt-8 hidden flex-col items-end gap-5 md:mt-10 md:flex">
              {company.pillars.map((item) => (
                <li key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.38em] text-oliver-soft">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-4xl font-semibold tracking-tight text-night-fg lg:text-5xl">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 md:hidden">
          {company.pillars.map((item) => (
            <li key={item.label}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-oliver-soft">
                {item.label}
              </p>
              <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-night-fg">
                {item.value}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 md:mt-auto md:max-w-3xl">
          <h1 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hồ sơ
            <br />
            Năng lực
          </h1>
          <div className="mt-4 flex h-1.5 w-28 items-stretch overflow-hidden rounded-full md:mt-5 md:w-40">
            <span className="w-2.5 bg-night-fg" />
            <span className="flex-1 bg-oliver" />
          </div>
          <a
            href="#phim"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-oliver px-5 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-oliver/90 md:px-6 md:text-base"
          >
            <Play className="size-4 fill-current" />
            Phát phim giới thiệu · 50 giây
          </a>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-night-muted md:text-base">
            PropTech quản lý vận hành tòa nhà. Công nghệ thầm lặng phía sau. Con người được phục vụ
            phía trước.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.22em] text-night-muted md:text-xs">
            <span>MST {company.mst}</span>
            <span>TP. Hồ Chí Minh</span>
            <span>{company.year}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
