import { fieldActivities, partners, pipeline, projectCatalog, projects } from "@/lib/content";
import { ChapterHero } from "@/components/chapter-hero";
import { DataTable } from "@/components/data-table";

export function Chapter4() {
  return (
    <>
      <ChapterHero
        id="chuong-4"
        n="04"
        title="Kinh nghiệm dự án và hoạt động thực địa"
        image="/images/ch4-mall.jpg"
        items={[
          { label: "Bảng danh mục dự án tiêu biểu" },
          { label: "Hồ sơ từng dự án" },
          { label: "Hoạt động cộng đồng — fanpage & VTV" },
          { label: "Hệ sinh thái đối tác" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">Danh mục dự án</p>
        <h3 className="mt-3 font-display text-4xl font-medium md:text-5xl">
          Bảng tóm tắt dự án tiêu biểu
        </h3>
        <p className="mt-5 max-w-2xl text-ink-soft">
          Kinh nghiệm cùng loại: chung cư cao cấp, NOXH, khu đô thị, tiện ích nghỉ dưỡng và KTX —
          cùng một chuẩn SOP, cùng một siêu ứng dụng.
        </p>
        <div className="mt-10">
          <DataTable headers={projectCatalog.headers} rows={projectCatalog.rows} />
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-bronze">Hồ sơ dự án</p>
          <h3 className="mt-3 font-display text-4xl font-medium md:text-5xl">Chi tiết thực địa</h3>
          <div className="mt-16 space-y-20">
            {projects.map((p, i) => (
              <article key={p.name} className="grid items-center gap-10 md:grid-cols-12">
                <div className={i % 2 === 1 ? "md:order-2 md:col-span-6" : "md:col-span-6"}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="aspect-video w-full rounded-xl object-cover"
                  />
                </div>
                <div className="md:col-span-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-bronze">{p.tag}</p>
                  <h4 className="mt-3 font-display text-3xl font-medium md:text-4xl">{p.name}</h4>
                  <p className="mt-4 text-sm text-muted">{p.loc}</p>
                  <p className="mt-1 text-sm font-medium text-ink">{p.scale}</p>
                  <p className="mt-2 text-sm text-bronze">{p.model}</p>
                  <p className="mt-5 text-base leading-relaxed text-ink-soft">{p.detail}</p>
                  <p className="mt-5 font-display text-xl text-bronze">{p.quote}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <h4 className="font-display text-2xl font-medium">Quỹ dự án đang mở rộng</h4>
            <div className="mt-6 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
              {pipeline.map((p) => (
                <article key={p.name} className="bg-paper p-6">
                  <h5 className="font-display text-xl font-medium">{p.name}</h5>
                  <p className="mt-2 text-sm text-muted">{p.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">Thực địa đã công bố</p>
        <h3 className="mt-3 max-w-3xl font-display text-4xl font-medium md:text-5xl">
          Hoạt động từ fanpage Oliver và sóng truyền hình
        </h3>
        <p className="mt-5 max-w-3xl text-ink-soft">
          Những việc dưới đây đã diễn ra tại dự án và được công bố trên fanpage Oliver Property
          Management, phóng sự VTV và sự kiện HCMO — không phải mô tả năng lực trên giấy.
        </p>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {fieldActivities.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-xl border border-line">
              <img src={a.image} alt={a.title} className="aspect-video w-full object-cover" />
              <div className="p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-bronze">{a.source}</p>
                <h4 className="mt-2 font-display text-2xl font-medium">{a.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-bronze">Kết nối cộng đồng</p>
          <h3 className="mt-3 max-w-2xl font-display text-4xl font-medium">Hệ sinh thái đối tác</h3>
          <p className="mt-5 max-w-2xl text-ink-soft">
            Ban quản lý chuyên nghiệp không chỉ vận hành kỹ thuật. Oliver kết nối cư dân với thương
            hiệu uy tín — sự kiện nội khu không đội phí quản lý.
          </p>
          <ul className="mt-12 flex flex-wrap gap-3">
            {partners.map((p) => (
              <li
                key={p}
                className="rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-medium"
              >
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article>
              <h4 className="font-display text-2xl font-medium">Trải nghiệm khác biệt</h4>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Làm việc trực tiếp với nhãn hàng. Hội thảo, lễ hội, workshop cho cư dân — Trung Thu
                2025 tại PetroVietnam Landmark là một ví dụ đã triển khai.
              </p>
            </article>
            <article>
              <h4 className="font-display text-2xl font-medium">Đàm phán tài trợ</h4>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Đội ngũ chuyên trách đàm phán tài trợ sự kiện nội khu, giảm gánh nặng chi phí cho cư
                dân mà vẫn giữ chất lượng dịch vụ.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
