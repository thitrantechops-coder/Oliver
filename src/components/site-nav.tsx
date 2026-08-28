import { useEffect, useState } from "react";
import { Menu, Printer, X } from "lucide-react";
import { company, nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled && !open;

  return (
    <header
      className={cn(
        "no-print fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300",
        onDark
          ? "border-transparent bg-transparent"
          : "border-line/80 bg-paper/94 backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 md:px-8",
          onDark ? "justify-end" : "justify-between",
        )}
      >
        {onDark ? null : (
          <a href="#bia" className="shrink-0" aria-label="Về đầu trang">
            <Logo className="h-9 md:h-10" />
          </a>
        )}

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Mục lục">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                onDark ? "text-night-fg/80 hover:text-night-fg" : "text-ink-soft hover:text-ink",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className={cn(
              "inline-flex h-11 items-center gap-2 rounded-full border px-3.5 text-sm font-medium transition-colors",
              onDark
                ? "border-night-fg/30 bg-night/30 text-night-fg hover:border-night-fg"
                : "border-line bg-paper text-ink hover:border-ink",
            )}
          >
            <Printer className="size-4" strokeWidth={1.75} />
            <span className="hidden sm:inline">In / PDF</span>
          </button>
          <button
            type="button"
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full border lg:hidden",
              onDark
                ? "border-night-fg/30 bg-night/30 text-night-fg"
                : "border-line bg-paper text-ink",
            )}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mục lục di động">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-paper-2"
              >
                {item.label}
              </a>
            ))}
            <p className="px-3 pt-3 text-xs tracking-wide text-muted">{company.slogan}</p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
