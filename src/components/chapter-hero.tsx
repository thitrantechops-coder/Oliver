type ChapterHeroProps = {
  id: string;
  n: string;
  title: string;
  image: string;
  items?: { page?: string; label: string }[];
};

export function ChapterHero({ id, n, title, image, items }: ChapterHeroProps) {
  return (
    <section
      id={id}
      className="relative isolate flex min-h-[72vh] flex-col justify-end overflow-hidden bg-night text-night-fg"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-night via-night/55 to-night/15" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-8">
          <p className="font-display text-7xl font-medium leading-none tracking-tight text-night-fg/90 md:text-8xl">
            {n}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-medium leading-tight md:text-5xl">
            {title}
          </h2>
        </div>
        {items ? (
          <ul className="flex flex-col justify-end gap-3 text-sm text-night-muted md:col-span-4">
            {items.map((item) => (
              <li key={item.label} className="border-t border-night-fg/15 pt-3">
                {item.label}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
