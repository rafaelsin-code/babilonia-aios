import Link from "next/link";
import { squads, getTotalStats } from "@/data/squads";
import {
  Crown,
  Code,
  Paintbrush,
  Megaphone,
  TrendingUp,
  Shield,
  Cog,
  Users,
  ListChecks,
  GitBranch,
  Layers,
  Brain,
  Rocket,
  Target,
  FileText,
  Search,
  BarChart3,
  Lightbulb,
  Globe,
  Headphones,
  BookOpen,
  Wrench,
  ArrowRight,
  Star,
} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  Crown,
  Code,
  Paintbrush,
  Megaphone,
  TrendingUp,
  Shield,
  Cog,
  Users,
  Layers,
  Brain,
  Rocket,
  Target,
  FileText,
  Search,
  BarChart3,
  Lightbulb,
  Globe,
  Headphones,
  BookOpen,
  Wrench,
};

export default function SquadsPage() {
  const stats = getTotalStats();
  const [featured, ...remaining] = squads;
  const FeaturedIcon = iconMap[featured.icon] || Brain;

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 md:px-10 py-12 font-sans">
      {/* ── Header ── */}
      <section className="animate-fade-in-up max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-text-heading tracking-tight">
          Squads
        </h1>
        <p className="text-text-body text-base mt-2">
          {stats.squads} squads com{" "}
          <span className="font-semibold text-text-heading">
            {stats.agents} agentes
          </span>{" "}
          prontos para operar.
        </p>
      </section>

      {/* ── Featured Squad (full-width hero card) ── */}
      <section className="animate-fade-in-up delay-75 max-w-5xl mx-auto mb-8">
        <Link
          href={`/squads/${featured.slug}`}
          className="group relative block bg-gradient-to-r from-blue-50 via-white to-white border border-blue-100 rounded-2xl shadow-card p-8 hover:shadow-card-hover hover:border-blue-300 transition-all duration-300 overflow-hidden"
        >
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-blue-300 rounded-l-2xl" />

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
              <FeaturedIcon
                size={28}
                className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 mb-1">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">
                  Destaque
                </span>
              </div>

              <h2 className="text-2xl font-bold text-text-heading group-hover:text-blue-600 transition-colors">
                {featured.name}
              </h2>
              <span className="text-xs bg-slate-100 text-slate-500 rounded px-2 py-0.5 inline-block mt-1.5 mb-3">
                {featured.version}
              </span>

              <p className="text-sm text-text-body leading-relaxed max-w-2xl mb-4">
                {featured.description}
              </p>

              {/* Agent avatars row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  {featured.agents.slice(0, 4).map((agent) => (
                    <div
                      key={agent.id}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                      style={{ backgroundColor: agent.color }}
                      title={agent.name}
                    >
                      {agent.initials}
                    </div>
                  ))}
                </div>
                {featured.agents.length > 4 && (
                  <span className="text-xs text-text-muted">
                    +{featured.agents.length - 4} agentes
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {featured.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-blue-50 text-blue-700 rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
                {featured.tags.length > 5 && (
                  <span className="text-xs text-text-muted px-1">
                    +{featured.tags.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="shrink-0 self-center">
              <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg group-hover:bg-blue-700 transition-colors shadow-sm">
                Explorar squad
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Remaining Squads (2-column editorial grid) ── */}
      <section className="animate-fade-in-up delay-150 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {remaining.map((squad) => {
          const IconComponent = iconMap[squad.icon] || Brain;

          return (
            <Link
              key={squad.slug}
              href={`/squads/${squad.slug}`}
              className="group bg-white border border-border-default rounded-xl shadow-card px-5 py-5 hover:shadow-card-hover hover:-translate-y-[1px] hover:border-blue-200 transition-all duration-300 flex flex-col"
            >
              {/* Top row: icon + meta */}
              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <IconComponent
                    size={18}
                    className="text-blue-600 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-text-heading group-hover:text-blue-600 transition-colors leading-snug truncate">
                      {squad.name}
                    </h3>
                    <span className="text-[11px] bg-slate-100 text-slate-400 rounded px-1.5 py-0.5 shrink-0">
                      {squad.version}
                    </span>
                  </div>
                  <p className="text-sm text-text-body leading-relaxed mt-1 line-clamp-2">
                    {squad.description}
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-4 mb-3 pl-[3.375rem]">
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Users size={12} className="text-slate-400" />
                  <span>{squad.agents.length}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <ListChecks size={12} className="text-slate-400" />
                  <span>{squad.tasks.length}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <GitBranch size={12} className="text-slate-400" />
                  <span>{squad.workflows.length}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pl-[3.375rem]">
                {squad.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-50 text-slate-600 rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
                {squad.tags.length > 3 && (
                  <span className="text-xs text-text-muted px-1">
                    +{squad.tags.length - 3}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </section>

      {/* ── Bottom spacer ── */}
      <div className="h-20" />
    </div>
  );
}
