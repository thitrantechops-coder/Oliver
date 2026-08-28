import {
  company,
  finance,
  keyStaff,
  leaders,
  legal,
  lines,
  milestones,
  org,
  strategy,
} from "@/lib/content";
import { ChapterHero } from "@/components/chapter-hero";
import { DataTable } from "@/components/data-table";

const facts = [
  { k: "Tên doanh nghiệp", v: company.name },
  { k: "Tên tiếng Anh", v: company.nameEn },
  { k: "Tên viết tắt", v: company.short },
  { k: "Mã số thuế", v: company.mst },
  { k: "Vốn điều lệ", v: company.capital },
  { k: "Đăng ký lần đầu", v: company.founded },
  { k: "Người đại diện", v: `${company.legalRep} — ${company.title}` },
  { k: "Trụ sở", v: company.address },
  { k: "Điện thoại", v: `${company.phone} · ${company.phoneAlt}` },
  { k: "Email", v: company.email },
  { k: "Website", v: `https://${company.web}` },
];

export function Chapter2() {
  return (
    <>
      <ChapterHero
        id="chuong-2"
        n="02"
        title="Năng lực doanh nghiệp"
        image="/images/ch2-street.jpg"
        items={[
          { label: "Pháp lý & tư cách QLVH" },
          { label: "Sơ đồ tổ chức & nhân sự chủ chốt" },
          { label: "Năng lực tài chính & kiểm soát" },
          { label: "Chiến lược dài hạn" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">Tổng quan</p>
        <h3 className="mt-3 max-w-3xl font-display text-4xl font-medium md:text-5xl">
          Oliver — quản lý tòa nhà thông minh, nâng tầm cuộc sống
        </h3>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">
          Công ty TNHH Oliver Vietnam là đơn vị quản lý vận hành bất động sản trên nền tảng PropTech,
          phát triển bởi AirCity. Chúng tôi cung cấp dịch vụ QLVH trọn gói theo Hợp đồng, đồng thời
          số hóa quỹ, ticket và an ninh — để Chủ đầu tư và Ban quản trị kiểm chứng được từng cam kết.
        </p>

        <div className="mt-14 overflow-hidden rounded-lg border border-line">
          {facts.map((f) => (
            <div
              key={f.k}
              className="grid gap-1 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-12 sm:items-baseline"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-muted sm:col-span-4">{f.k}</p>
              <p className="text-sm font-medium text-ink sm:col-span-8">{f.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {lines.map((l) => (
            <article key={l.n} className="rounded-lg bg-paper-2 p-7">
              <p className="font-display text-3xl text-bronze">{l.n}</p>
              <h4 className="mt-4 font-display text-2xl font-medium leading-snug">{l.t}</h4>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{l.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.28em] text-bronze">Tư cách pháp lý</p>
          <h3 className="mt-3 font-display text-4xl font-medium">Đủ điều kiện QLVH nhà chung cư</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-line bg-paper p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-bronze">Đăng ký doanh nghiệp</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{legal.dkdn}</p>
            </article>
            <article className="rounded-lg border border-line bg-paper p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-bronze">Sở Xây dựng TP.HCM</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{legal.sxd}</p>
            </article>
            <article className="rounded-lg border border-line bg-paper p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-bronze">PCCC · NĐ 105/2025</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{legal.pccc}</p>
            </article>
            <article className="rounded-lg border border-line bg-paper p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-bronze">Thông tư 05/2024/TT-BXD</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{legal.quyche}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">Lịch sử</p>
        <h3 className="mt-3 font-display text-4xl font-medium md:text-5xl">Các dấu mốc phát triển</h3>
        <div className="mt-14 space-y-12">
          {milestones.map((m) => (
            <article key={m.year} className="grid gap-6 border-t border-line pt-8 md:grid-cols-12">
              <h4 className="font-display text-3xl font-medium text-bronze md:col-span-3">
                {m.year}
              </h4>
              <ul className="space-y-3 text-base leading-relaxed text-ink-soft md:col-span-9">
                {m.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-bronze" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-night text-night-fg">
        <img
          src="/images/glass-tower.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-night/70" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-bronze">Sơ đồ tổ chức</p>
          <h3 className="mt-3 max-w-2xl font-display text-4xl font-medium">
            Sáu khối. Dữ liệu là nền. Con người tử tế.
          </h3>
          <p className="mt-6 max-w-2xl text-night-muted">
            Mô hình Oliver kết hợp cấu trúc doanh nghiệp chặt chẽ với sự linh hoạt của công ty công
            nghệ. Dữ liệu trên Newton là nền tảng cho mọi quyết định điều hành.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {org.map((o) => (
              <article key={o.n} className="border-t border-night-fg/20 pt-5">
                <p className="font-display text-2xl text-bronze">{o.n}</p>
                <h4 className="mt-2 font-display text-xl font-medium">{o.t}</h4>
                <p className="mt-3 text-sm leading-relaxed text-night-muted">{o.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">Ban Giám đốc</p>
        <h3 className="mt-3 max-w-2xl font-display text-4xl font-medium">
          AirCity · Oliver · K-City
        </h3>
        <p className="mt-5 max-w-2xl text-ink-soft">
          Ban điều hành hội tụ chuyên gia vận hành bất động sản và đội ngũ công nghệ. Hồ sơ bằng cấp
          chi tiết cung cấp tại Phụ lục khi nộp hồ sơ dự thầu.
        </p>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((l) => (
            <article key={l.name} className="bg-paper p-7">
              <div className="flex size-12 items-center justify-center rounded-full bg-paper-2 font-display text-lg text-bronze">
                {l.name
                  .split(" ")
                  .slice(-2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h4 className="mt-5 font-display text-2xl font-medium">{l.name}</h4>
              <p className="mt-1 text-sm text-bronze">{l.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{l.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-bronze">Nhân sự chủ chốt tại dự án</p>
          <h3 className="mt-3 max-w-3xl font-display text-4xl font-medium">
            Trưởng BQL, Kỹ sư trưởng, PCCC — đúng vai, đúng trách nhiệm
          </h3>
          <p className="mt-5 max-w-3xl text-ink-soft">
            Đây là sơ đồ nhân sự bắt buộc trong hồ sơ đấu thầu QLVH. Người được bổ nhiệm tại từng
            dự án đáp ứng bồi dưỡng nghiệp vụ theo Thông tư 05/2024/TT-BXD. Hợp đồng lao động, chứng
            chỉ và lý lịch nghề nghiệp đính kèm Phụ lục dự thầu — không khai khống tên trên hồ sơ
            năng lực chung.
          </p>
          <div className="mt-12">
            <DataTable
              headers={["Vị trí", "Bổ nhiệm", "Trách nhiệm chính"]}
              rows={keyStaff.map((s) => [s.role, s.name, s.duty])}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">Năng lực tài chính</p>
        <h3 className="mt-3 max-w-3xl font-display text-4xl font-medium">
          Tài chính & kiểm toán tóm tắt
        </h3>
        <p className="mt-5 max-w-3xl text-ink-soft">{finance.intro}</p>
        <div className="mt-10">
          <DataTable headers={["Chỉ tiêu", "Nội dung"]} rows={finance.rows} />
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-bronze">Định hướng</p>
          <h3 className="mt-3 font-display text-4xl font-medium">Chiến lược phát triển dài hạn</h3>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {strategy.map((s) => (
              <article key={s.n}>
                <p className="font-display text-4xl text-bronze">{s.n}</p>
                <h4 className="mt-4 font-display text-2xl font-medium leading-snug">{s.t}</h4>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
