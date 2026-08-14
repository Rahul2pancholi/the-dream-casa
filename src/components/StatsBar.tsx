const stats = [
  { value: "Est. 2025", label: "Founder-Led" },
  { value: "Selective", label: "Project Load" },
  { value: "Indore &", label: "Ahmedabad" },
];

export default function StatsBar() {
  return (
    <section className="bg-ink px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-6">
        {stats.map((stat, idx) => (
          <div key={stat.label} className="flex items-center gap-8">
            <div className="flex items-baseline gap-2.5">
              <span className="font-serif text-2xl text-white sm:text-3xl">{stat.value}</span>
              <span className="text-xs tracking-wide text-white/50">{stat.label}</span>
            </div>
            {idx < stats.length - 1 && (
              <span className="hidden text-gold/40 sm:inline">/</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
