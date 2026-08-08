import Image from "next/image";

const services = [
  {
    title: "Residential Interiors",
    description: "Stylish and functional homes designed around you.",
    image: "/images/projects/living-kitchen-02.jpg",
    icon: (
      <path d="M4 11.5 12 4l8 7.5M6 10v10h12V10M10 20v-6h4v6" />
    ),
  },
  {
    title: "Commercial Interiors",
    description: "Efficient and inspiring workspaces that enhance productivity.",
    image: "/images/projects/living-kitchen-04.jpg",
    icon: (
      <path d="M4 21V8l8-4 8 4v13M4 21h16M9 21v-6h6v6M9 12h.01M15 12h.01M9 8h.01M15 8h.01" />
    ),
  },
  {
    title: "Turnkey Projects",
    description: "End-to-end execution with complete peace of mind.",
    image: "/images/projects/living-kitchen-11.jpg",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Hospitality Interiors",
    description: "Memorable spaces that leave lasting impressions.",
    image: "/images/projects/master-bedroom-01.jpg",
    icon: (
      <path d="M3 19V7l6-3 6 3v12M3 19h18M9 19v-4h6v4M15 4l6 3v12" />
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Our Services
            <span className="h-px w-8 bg-gold" />
          </div>
          <p className="text-sm text-muted">
            Comprehensive interior solutions tailored to your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute -bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gold"
                  >
                    {service.icon}
                  </svg>
                </div>
              </div>
              <div className="px-1 pt-8">
                <h3 className="text-sm font-semibold tracking-[0.05em] text-ink uppercase">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
