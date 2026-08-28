import {
  airyFeatures,
  airyNewton,
  glossary,
  neonTable,
  receptionist,
  serviceScope,
  sla,
  sopSteps,
  traditionalVsOliver,
} from "@/lib/content";
import { ChapterHero } from "@/components/chapter-hero";
import { DataTable } from "@/components/data-table";

export function Chapter3() {
  return (
    <>
      <ChapterHero
        id="chuong-3"
        n="03"
        title="Dịch vụ QLVH, SLA và hệ sinh thái công nghệ"
        image="/images/ch3-boats.jpg"
        items={[
          { label: "Phạm vi dịch vụ QLVH" },
          { label: "SLA & kiểm soát chất lượng" },
          { label: "SOP · Airy · Newton · Lễ tân AI · NEON" },
          { label: "Thuật ngữ chuyên ngành" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">Phạm vi dịch vụ</p>
        <h3 className="mt-3 max-w-3xl font-display text-4xl font-medium md:text-5xl">
          QLVH trọn gói — đúng việc Ban quản trị cần khi chấm thầu
        </h3>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
          Triết lý: công nghệ vô hình — tiện nghi hữu hình. Dưới đây là phạm vi dịch vụ theo nhóm,
          khớp Hợp đồng quản lý vận hành nhà chung cư, không phải catalogue phần mềm.
        </p>
        <div className="mt-12">
          <DataTable headers={serviceScope.headers} rows={serviceScope.rows} />
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-bronze">So sánh mô hình</p>
          <h3 className="mt-3 font-display text-4xl font-medium">Truyền thống và Oliver</h3>
          <div className="mt-10">
            <DataTable headers={traditionalVsOliver.headers} rows={traditionalVsOliver.rows} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">SLA & chất lượng</p>
        <h3 className="mt-3 max-w-3xl font-display text-4xl font-medium md:text-5xl">
          Quy trình kiểm soát chất lượng và tiêu chuẩn SLA
        </h3>
        <p className="mt-5 max-w-3xl text-ink-soft">{sla.intro}</p>
        <div className="mt-10">
          <DataTable headers={sla.headers} rows={sla.rows} />
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {sla.quality.map((q) => (
            <article key={q.t} className="border-t border-line pt-5">
              <h4 className="font-display text-xl font-medium">{q.t}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{q.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-night text-night-fg">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-bronze">Nền tảng quản trị</p>
          <h3 className="mt-3 max-w-3xl font-display text-4xl font-medium md:text-5xl">
            Airy cho cư dân. Newton cho Ban quản lý.
          </h3>
          <p className="mt-6 max-w-2xl text-night-muted">
            Hai mặt của một hệ thống. Cư dân không cần biết Newton. Ban quản trị không phải vào app
            cư dân để xem quỹ. White-label theo bộ nhận diện từng dự án.
          </p>
          <div className="mt-12">
            <DataTable invert headers={airyNewton.headers} rows={airyNewton.rows} />
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {airyFeatures.map((f) => (
              <article key={f.t} className="border-t border-night-fg/15 pt-5">
                <h4 className="font-display text-xl font-medium">{f.t}</h4>
                <p className="mt-2 text-sm leading-relaxed text-night-muted">{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.28em] text-bronze">SOP số hóa</p>
            <h3 className="mt-3 font-display text-4xl font-medium">
              Vệ sinh và bảo trì — ba bước, không sổ tay
            </h3>
            <p className="mt-5 text-ink-soft">
              Trưởng khối tạo tác vụ bằng QR. Nhân viên thực thi trên app. Nghiệm thu bằng ảnh. Cư
              dân chấm sao. Mọi phản ánh thành ticket có SLA.
            </p>
          </div>
          <ol className="grid gap-6 md:col-span-7">
            {sopSteps.map((s) => (
              <li key={s.n} className="flex gap-5 rounded-lg bg-paper-2 p-6">
                <span className="font-display text-3xl text-bronze">{s.n}</span>
                <div>
                  <h4 className="font-display text-xl font-medium">{s.t}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <img
              src="/images/lobby-ai.jpg"
              alt="Sảnh tòa nhà với lễ tân AI"
              className="aspect-video w-full rounded-xl object-cover"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-bronze">Hạ tầng thông minh</p>
              <h3 className="mt-3 font-display text-4xl font-medium">
                Lễ tân AI — 24/7, đã vận hành trên sảnh thật
              </h3>
              <p className="mt-5 text-ink-soft">
                Đang chạy tại sảnh tầng 1 Chung cư An Phú Đông và phiên bản 3D tại Block B
                PetroVietnam Landmark (fanpage Oliver). Sáu bước dưới đây là quy trình tiếp nhận, không
                phải tính năng demo.
              </p>
            </div>
          </div>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {receptionist.map((r) => (
              <li key={r.n}>
                <p className="font-display text-2xl text-bronze">{r.n}</p>
                <h4 className="mt-2 font-display text-xl font-medium">{r.t}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-bronze">NEON · Qualcomm · Edge AI</p>
        <h3 className="mt-3 max-w-2xl font-display text-4xl font-medium">
          Bốn lớp an ninh — biến camera thường thành camera AI
        </h3>
        <p className="mt-5 max-w-2xl text-ink-soft">
          AI Box chip Qualcomm đưa trí tuệ nhân tạo ra thực địa. Cảnh báo cháy sớm bằng thị giác máy
          tính bổ sung cảm biến truyền thống — không thay nghĩa vụ Đội PCCC cơ sở.
        </p>
        <div className="mt-10">
          <DataTable headers={neonTable.headers} rows={neonTable.rows} />
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { t: "1. Đặt chỗ", d: "Đặt sân pickleball, gym, BBQ trên Airy." },
            { t: "2. Xác thực", d: "FaceID hoặc NFC/RFID — một chạm." },
            { t: "3. Sử dụng", d: "Công nghệ thầm lặng. Thời gian thuộc về cư dân." },
          ].map((s) => (
            <article key={s.t} className="rounded-lg bg-paper-2 p-7">
              <h4 className="font-display text-2xl font-medium">{s.t}</h4>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-bronze">Thuật ngữ</p>
          <h3 className="mt-3 font-display text-4xl font-medium">
            Từ chuyên ngành dùng trong hồ sơ này
          </h3>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Giải thích để Ban quản trị và cư dân đọc cùng một ngôn ngữ với đội kỹ thuật.
          </p>
          <dl className="mt-12 divide-y divide-line border-y border-line">
            {glossary.map((g) => (
              <div key={g.k} className="grid gap-2 py-5 md:grid-cols-12 md:gap-8">
                <dt className="font-display text-xl font-medium md:col-span-3">{g.k}</dt>
                <dd className="text-sm leading-relaxed text-ink-soft md:col-span-9">{g.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
