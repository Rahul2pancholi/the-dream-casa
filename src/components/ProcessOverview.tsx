import Link from "next/link";
import { ArrowRight } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Discover",
    desc: "We listen — your lifestyle, your site, your budget — before a single line is drawn.",
  },
  {
    number: "02",
    title: "Define",
    desc: "Layouts, material direction and a transparent, itemized BOQ are agreed before design begins.",
  },
  {
    number: "03",
    title: "Visualise",
    desc: "Photorealistic 3D renders let you see your home in full detail before work starts on site.",
  },
  {
    number: "04",
    title: "Execute",
    desc: "One accountable team manages civil work, carpentry, electrical and finishing, with regular updates.",
  },
  {
    number: "05",
    title: "Reveal",
    desc: "A structured handover — deep cleaned, inspected and ready to live in.",
  },
];

export default function ProcessOverview() {
  return (
    <section className="bg-cream-light px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex max-w-2xl flex-col items-start gap-3 text-left">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Our Process
          </div>
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            From Vision to Reality
          </h2>
        </div>

        <div className="mt-14 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
          {phases.map(({ number, title, desc }) => (
            <div key={number} className="grid gap-4 py-8 sm:grid-cols-12 sm:items-start sm:gap-8">
              <span className="font-serif text-2xl text-gold sm:col-span-1">{number}</span>
              <h3 className="font-serif text-xl text-ink sm:col-span-3">{title}</h3>
              <p className="text-sm leading-relaxed text-muted sm:col-span-8">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-start">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase transition-transform hover:translate-x-1"
          >
            See the Full Process <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
