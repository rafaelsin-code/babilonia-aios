"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { getAllAgents } from "@/data/squads";

const allAgents = getAllAgents();
const squadNames = Array.from(new Set(allAgents.map((a) => a.squadName))).sort();

export default function AgentsPage() {
  const [search, setSearch] = useState("");
  const [selectedSquad, setSelectedSquad] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return allAgents.filter((agent) => {
      const matchesSearch =
        !search ||
        agent.name.toLowerCase().includes(search.toLowerCase()) ||
        agent.role.toLowerCase().includes(search.toLowerCase()) ||
        agent.description.toLowerCase().includes(search.toLowerCase());
      const matchesSquad = !selectedSquad || agent.squadName === selectedSquad;
      return matchesSearch && matchesSquad;
    });
  }, [search, selectedSquad]);

  return (
    <div className="min-h-screen p-8 md:p-12">
      {/* Header */}
      <div className="mb-10 animate-fade-in-up">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-gold-50 tracking-wide">
          Agentes
        </h1>
        <p className="text-secondary mt-2 text-lg">
          <span className="text-gold-300 font-mono text-sm font-medium">
            {filtered.length}
          </span>{" "}
          <span className="text-muted">de</span>{" "}
          <span className="text-gold-300 font-mono text-sm font-medium">
            {allAgents.length}
          </span>{" "}
          agentes
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mb-8 space-y-4 animate-fade-in-up delay-100">
        {/* Search bar */}
        <div className="relative max-w-xl">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            placeholder="Buscar agente por nome, role ou descricao..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface border border-subtle rounded-lg pl-11 pr-4 py-3 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-gold-300/40 transition-colors"
          />
        </div>

        {/* Squad filter pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedSquad(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
              selectedSquad === null
                ? "bg-gold-300/15 text-gold-200 border-gold-300/30"
                : "bg-surface text-secondary border-subtle hover:text-primary hover:border-gold-300/20"
            }`}
          >
            Todos
          </button>
          {squadNames.map((name) => (
            <button
              key={name}
              onClick={() =>
                setSelectedSquad(selectedSquad === name ? null : name)
              }
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                selectedSquad === name
                  ? "bg-gold-300/15 text-gold-200 border-gold-300/30"
                  : "bg-surface text-secondary border-subtle hover:text-primary hover:border-gold-300/20"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 animate-fade-in-up delay-200">
        {filtered.map((agent) => (
          <Link
            key={`${agent.squadSlug}-${agent.id}`}
            href={`/squads/${agent.squadSlug}`}
            className="group bg-card border border-subtle rounded-xl p-5 hover:bg-card-hover hover:border-gold-300/20 transition-all duration-300"
          >
            <div className="flex items-start gap-3.5">
              {/* Colored circle with initials */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-xs font-mono font-semibold"
                style={{
                  backgroundColor: `${agent.color}15`,
                  color: agent.color,
                  border: `1px solid ${agent.color}30`,
                }}
              >
                {agent.initials}
              </div>

              <div className="min-w-0 flex-1">
                {/* Name */}
                <h3 className="text-sm font-semibold text-primary group-hover:text-gold-50 transition-colors truncate">
                  {agent.name}
                </h3>

                {/* Role */}
                <p className="text-xs text-secondary mt-0.5 truncate">
                  {agent.role}
                </p>

                {/* Squad badge */}
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-gold-300/5 text-gold-400 border border-gold-300/10">
                  {agent.squadName}
                </span>

                {/* Description */}
                <p className="text-xs text-muted mt-2 line-clamp-2 leading-relaxed">
                  {agent.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-sm">
            Nenhum agente encontrado para essa busca.
          </p>
        </div>
      )}
    </div>
  );
}
