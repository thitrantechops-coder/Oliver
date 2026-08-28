import {
  awards,
  culture,
  message,
  mission,
  stats,
  values,
  vision,
} from "@/lib/content";
import { ChapterHero } from "@/components/chapter-hero";

export function Chapter1() {
  return (
    <>
      <ChapterHero
        id="chuong-1"
        n="01"
        title="Ấn tượng Oliver và thông điệp từ Ban Lãnh đạo"
        image="/images/ch1-bridge.jpg"
        items={[
          { label: "Tầm nhìn, sứ mệnh và giá trị cốt lõi" },
          { label: "Năng lực bằng số" },
          { label: "Danh hiệu, giải thưởng & truyền thông" },
          { label: "Thông điệp Ban Giám đốc" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">Chương 01</p>
        <h3 className="mt-3 font-display text-4xl font-medium md:text-5xl">
          Tầm nhìn, sứ mệnh và giá trị cốt lõi
        </h3>

        <div className="mt-12 overflow-hidden rounded-xl">
          <img
            src="/images/township-dusk.jpg"
            alt="Khu đô thị vận hành bởi Oliver lúc chạng vạng"
            className="aspect-video w-full object-cover"
          />
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <article>
            <h4 className="text-xs uppercase tracking-[0.22em] text-bronze">Tầm nhìn</h4>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{vision}</p>
          </article>
          <article>
            <h4 className="text-xs uppercase tracking-[0.22em] text-bronze">Sứ mệnh</h4>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{mission}</p>
          </article>
        </div>

        <div className="mt-20 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <article key={v.key} className="bg-paper p-7 md:p-8">
              <p className="font-display text-2xl font-medium text-ink">{v.key}</p>
              <p className="mt-2 text-sm font-medium text-bronze">{v.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{v.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h4 className="font-display text-3xl font-medium">Văn hóa dịch vụ</h4>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Oliver cam kết quản lý vận hành chuyên nghiệp — an toàn — tận tâm. Sự hài lòng của cư
            dân được đo bằng CSAT và NPS, không bằng cảm tính.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {culture.map((c) => (
              <article key={c.k}>
                <p className="text-[11px] uppercase tracking-[0.2em] text-bronze">{c.k}</p>
                <h5 className="mt-2 font-display text-xl font-medium">{c.t}</h5>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night text-night-fg">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-bronze">Ấn tượng Oliver</p>
          <h3 className="mt-3 max-w-xl font-display text-4xl font-medium md:text-5xl">
            Những con số được đo, không được tô.
          </h3>
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {stats.map((s) => (
              <article key={s.label} className="border-t border-night-fg/15 pt-5">
                <p className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-bronze">{s.unit}</p>
                <p className="mt-3 text-sm leading-relaxed text-night-muted">{s.label}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-sm leading-relaxed text-night-muted">
            Căn hộ gồm chung cư, biệt thự, nhà phố thương mại và nhà ở xã hội trong các dự án Oliver
            đang vận hành, gồm liên doanh K-City với Kim Oanh Group. NPS đo mức độ cư dân sẵn sàng
            tiếp tục sử dụng và giới thiệu dịch vụ.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">Uy tín được kiểm chứng</p>
        <h3 className="mt-3 font-display text-4xl font-medium md:text-5xl">
          Danh hiệu, giải thưởng và truyền thông
        </h3>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {awards.map((a) => (
            <article key={a.title} className="grid gap-3 py-7 md:grid-cols-12 md:items-baseline">
              <p className="text-sm tracking-wide text-bronze md:col-span-2">{a.year}</p>
              <h4 className="font-display text-2xl font-medium md:col-span-5">{a.title}</h4>
              <p className="text-sm leading-relaxed text-ink-soft md:col-span-5">{a.note}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Giải pháp Oliver và AirCity được giới thiệu trên VTV1, VTV4, HTV9 dịp Tết và phóng sự VTV9
          phục vụ Hiệp hội HCMO. Fanpage ghi nhận Lễ tân AI đã vận hành tại An Phú Đông và Block B
          PetroVietnam Landmark — không phải mô hình trưng bày.
        </p>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.28em] text-bronze">{message.title}</p>
            <h3 className="mt-4 font-display text-3xl font-medium leading-snug md:text-4xl">
              Quản trị bằng trí tuệ
              <br />
              Phụng sự từ tâm
            </h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm font-medium text-ink">{message.kicker}</p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
              {message.paras.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
            <p className="mt-10 font-display text-xl">{message.sign}</p>
          </div>
        </div>
      </section>
    </>
  );
}
