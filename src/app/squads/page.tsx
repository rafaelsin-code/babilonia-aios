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
  Workflow,
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
    <div className="min-h-screen px-10 py-12">
      {/* ── Header ── */}
      <section className="animate-fade-in-up mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Layers size={16} className="text-gold-300" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-400">
            Catalogo de Squads
          </span>
        </div>

        <h1 className="font-display text-4xl font-bold text-gold-50 leading-tight">
          Squads
        </h1>
        <p className="text-secondary text-[15px] mt-2">
          {stats.squads} squads especializados com {stats.agents} agentes,{" "}
          {stats.tasks} tasks e {stats.workflows} workflows prontos para uso.
        </p>
      </section>

      {/* ── Grid ── */}
      <section className="animate-fade-in-up delay-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {squads.map((squad) => {
          const IconComponent = iconMap[squad.icon] || Brain;

          return (
            <Link
              key={squad.slug}
              href={`/squads/${squad.slug}`}
              className="group bg-card border border-subtle rounded-xl p-6 hover:border-gold-dim hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
            >
              {/* Icon + Name */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border transition-colors duration-300"
                  style={{
                    backgroundColor: `${squad.accent}10`,
                    borderColor: `${squad.accent}30`,
                  }}
                >
                  <IconComponent
                    size={20}
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ color: squad.accent }}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-gold-50 group-hover:text-gold-200 transition-colors leading-snug">
                    {squad.name}
                  </h3>
                  <span className="text-[10px] font-mono text-muted tracking-wider">
                    {squad.version}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                {squad.description}
              </p>

              {/* Badges */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted">
                  <Users size={13} className="text-gold-400/60" />
                  <span>{squad.agents.length} agentes</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted">
                  <ListChecks size={13} className="text-gold-400/60" />
                  <span>{squad.tasks.length} tasks</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted">
                  <Workflow size={13} className="text-gold-400/60" />
                  <span>{squad.workflows.length} workflows</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {squad.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-300/5 border border-gold-300/10 text-gold-400/70 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
                {squad.tags.length > 4 && (
                  <span className="text-[10px] font-mono px-2 py-0.5 text-muted">
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
