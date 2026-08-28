import { toc } from "@/lib/content";

export function Toc() {
  return (
    <section id="muc-luc" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p className="text-xs uppercase tracking-[0.28em] text-bronze">Hồ sơ năng lực 2026 · Chuẩn đấu thầu QLVH</p>
      <h2 className="mt-3 font-display text-5xl font-medium md:text-6xl">Mục lục</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        Bố cục theo hồ sơ năng lực đấu thầu quản lý vận hành nhà chung cư: pháp lý — nhân sự — tài
        chính — phương án kỹ thuật/SLA — kinh nghiệm thực địa.
      </p>
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {toc.map((c) => (
          <a
            key={c.n}
            href={c.href}
            className="group block border-t border-line pt-6 transition-colors hover:border-bronze"
          >
            <p className="font-display text-5xl text-line transition-colors group-hover:text-bronze">
              {c.n}
            </p>
            <h3 className="mt-3 font-display text-2xl font-medium md:text-3xl">{c.t}</h3>
            <ul className="mt-4 space-y-1 text-sm text-muted">
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
