import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Short meta items shown as a thin "/"-divided line under the description, e.g. breadcrumb or key facts. */
  meta?: string[];
  image?: string;
  imageAlt?: string;
}

export default function PageHero({ eyebrow, title, description, meta, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream-light px-6 py-10 sm:py-14 lg:py-16 sm:px-10 lg:px-16 border-b border-ink/10">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt || ""}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.08]"
          />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl">
        <div className="flex max-w-3xl flex-col gap-6">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            <span className="h-px w-8 bg-gold/60" />
            {eyebrow}
          </div>

          <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="max-w-xl text-base leading-relaxed text-muted">
              {description}
            </p>
          )}

          {meta && meta.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-ink/10 pt-6 text-xs font-medium tracking-wide text-muted">
              {meta.map((item, idx) => (
                <span key={item} className="flex items-center gap-3">
                  {item}
                  {idx < meta.length - 1 && <span className="text-gold/50">/</span>}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
