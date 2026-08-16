import Image from "next/image";

// Close-in crops from existing project photography, captioned with material
// words already used in each project's own description — no new photography.
const materials = [
  {
    image: "/images/eklavya/image-18-1.jpg",
    caption: "Fluted Wood & Cane",
  },
  {
    image: "/images/eklavya/image-15-1.jpg",
    caption: "Imported Marble",
  },
  {
    image: "/images/kids-room/kids-room-02.jpg",
    caption: "Painted Cabinetry",
  },
  {
    image: "/images/projects/master-bedroom-02.jpg",
    caption: "Glass & Mirror",
  },
  {
    image: "/images/projects/present-room-01.jpg",
    caption: "Warm Timber",
  },
];

export default function MaterialityStrip() {
  return (
    <section className="bg-cream-light px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex max-w-2xl flex-col items-start gap-3 text-left">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Materiality
          </div>
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            Materials with Intention
          </h2>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Marble, brass, timber and glass, chosen for how they age and how they feel — not just how they photograph.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {materials.map(({ image, caption }) => (
            <div key={image + caption} className="flex flex-col gap-3">
              <div className="relative aspect-square w-full overflow-hidden border border-ink/10">
                <Image
                  src={image}
                  alt={caption}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-semibold tracking-wide text-ink uppercase">
                {caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
