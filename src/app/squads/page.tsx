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

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 md:px-10 py-12 font-sans">
      {/* ── Header ── */}
      <section className="animate-fade-in-up max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-text-heading tracking-tight">
          Squads
        </h1>
        <p className="text-text-body text-base mt-2">
          {stats.squads} squads especializados com {stats.agents} agentes,{" "}
          {stats.tasks} tasks e {stats.workflows} workflows prontos para uso.
        </p>
      </section>

      {/* ── Grid ── */}
      <section className="animate-fade-in-up delay-100 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {squads.map((squad) => {
          const IconComponent = iconMap[squad.icon] || Brain;

          return (
            <Link
              key={squad.slug}
              href={`/squads/${squad.slug}`}
              className="group bg-white border border-border-default rounded-xl shadow-card p-6 hover:shadow-card-hover hover:-translate-y-[1px] hover:border-blue-200 transition-all duration-300 flex flex-col"
            >
              {/* Icon + Name + Version */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <IconComponent
                    size={20}
                    className="text-blue-600 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-text-heading group-hover:text-blue-600 transition-colors leading-snug">
                    {squad.name}
                  </h3>
                  <span className="text-xs bg-slate-100 text-slate-500 rounded px-2 py-0.5 inline-block mt-1">
                    {squad.version}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-text-body leading-relaxed mb-5 line-clamp-3 flex-1">
                {squad.description}
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Users size={13} className="text-slate-400" />
                  <span>{squad.agents.length} agentes</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <ListChecks size={13} className="text-slate-400" />
                  <span>{squad.tasks.length} tasks</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <GitBranch size={13} className="text-slate-400" />
                  <span>{squad.workflows.length} workflows</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {squad.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-blue-50 text-blue-700 rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
                {squad.tags.length > 4 && (
                  <span className="text-xs text-text-muted px-1">
                    +{squad.tags.length - 4}
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
