import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { brands, company } from "@/lib/content";
import { Logo } from "@/components/logo";

export function BackCover() {
  return (
    <section id="lien-he" className="bg-night text-night-fg">
      <div className="relative isolate overflow-hidden">
        <img
          src="/images/back-garden.jpg"
          alt="Khu vườn yên tĩnh trong cộng đồng do Oliver quản lý"
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-night via-night/70 to-night/40" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
          <div className="md:col-span-6">
            <Logo invert className="h-14" />
            <p className="mt-8 max-w-md font-display text-3xl italic leading-snug md:text-4xl">
              {company.slogan}
            </p>
            <p className="mt-6 max-w-md text-night-muted">
              Công nghệ phục vụ con người. Một tòa nhà chỉ đáng giá khi những gia đình bên trong
              được lắng nghe mỗi ngày.
            </p>
          </div>
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.28em] text-bronze">Liên hệ</p>
            <h2 className="mt-3 font-display text-3xl font-medium">{company.name}</h2>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-bronze" strokeWidth={1.75} />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-bronze" strokeWidth={1.75} />
                <span>
                  {company.phone}
                  <span className="text-night-muted"> · </span>
                  {company.phoneAlt}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-bronze" strokeWidth={1.75} />
                <a href={`mailto:${company.email}`} className="hover:text-bronze">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Globe className="mt-0.5 size-4 shrink-0 text-bronze" strokeWidth={1.75} />
                <a href={`https://${company.web}`} className="hover:text-bronze">
                  {company.web}
                </a>
              </li>
            </ul>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-night-muted">
              MST {company.mst} · Đại diện {company.legalRep}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-night-muted">
              {brands.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-night-fg/10 px-5 py-6 text-center text-xs text-night-muted">
        © {company.year} {company.name}. Hồ sơ năng lực phục vụ chủ đầu tư, ban quản trị và đối tác.
      </div>
    </section>
  );
}
