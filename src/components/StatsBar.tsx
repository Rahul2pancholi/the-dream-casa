import { Building2, Smile, Award, Users, MapPin } from "lucide-react";

const stats = [
  { icon: Building2, value: "150+", label: "Projects Completed" },
  { icon: Smile, value: "100+", label: "Happy Clients" },
  { icon: Award, value: "6+", label: "Years of Experience" },
  { icon: Users, value: "15+", label: "Team Members" },
  { icon: MapPin, value: "5", label: "Cities Served" },
];

export default function StatsBar() {
  return (
    <section className="bg-ink px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-5">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon strokeWidth={1.5} className="h-7 w-7 shrink-0 text-gold" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-white">{value}</span>
              <span className="text-xs text-white/50">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
