import Image from "next/image";
import { Home, Building2, ClipboardCheck, BedDouble } from "lucide-react";

const services = [
  {
    title: "Residential Interiors",
    description: "Stylish and functional homes designed around you.",
    image: "/images/projects/living-kitchen-02.jpg",
    Icon: Home,
  },
  {
    title: "Commercial Interiors",
    description: "Efficient and inspiring workspaces that enhance productivity.",
    image: "/images/projects/living-kitchen-04.jpg",
    Icon: Building2,
  },
  {
    title: "Turnkey Projects",
    description: "End-to-end execution with complete peace of mind.",
    image: "/images/projects/living-kitchen-11.jpg",
    Icon: ClipboardCheck,
  },
  {
    title: "Hospitality Interiors",
    description: "Memorable spaces that leave lasting impressions.",
    image: "/images/projects/master-bedroom-01.jpg",
    Icon: BedDouble,
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
          {services.map(({ title, description, image, Icon }) => (
            <div key={title} className="flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute -bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                  <Icon strokeWidth={1.5} className="h-5 w-5 text-gold" />
                </div>
              </div>
              <div className="px-1 pt-8">
                <h3 className="text-sm font-semibold tracking-[0.05em] text-ink uppercase">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
