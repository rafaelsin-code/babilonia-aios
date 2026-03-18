"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy } from "lucide-react";
import { squads } from "@/data/squads";

const totalAgents = squads.reduce((acc, s) => acc + s.agents.length, 0);
const totalSquads = squads.length;

export default function AgentsPage() {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 1500);
  };

  return (
    <div className="min-h-screen p-8 md:p-12">
      {/* Header */}
      <div className="mb-10 animate-fade-in-up">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-gold-50 tracking-wide">
          Todos os Agentes
        </h1>
        <p className="text-secondary mt-2 text-lg">
          Todos os agentes disponiveis para ativacao
        </p>
        <p className="text-muted mt-1 text-sm">
          {totalAgents} agentes distribuidos em {totalSquads} squads. Clique no card para ver a bio.
        </p>
      </div>

      {/* Squads sections */}
      <div className="space-y-10 animate-fade-in-up delay-200">
        {squads.map((squad) => (
          <section key={squad.slug}>
            {/* Squad header */}
            <div
              className="flex items-center gap-3 mb-4 pl-4"
              style={{ borderLeft: `3px solid ${squad.accent}` }}
            >
              <h2 className="text-lg font-semibold text-primary">
                {squad.name}
              </h2>
              <span
                className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium"
                style={{
                  backgroundColor: `${squad.accent}15`,
                  color: squad.accent,
                  border: `1px solid ${squad.accent}30`,
                }}
              >
                {squad.agents.length} agentes
              </span>
            </div>

            {/* Agent cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {squad.agents.map((agent) => {
                const agentPath = `/${squad.slug}:agents:${agent.id}`;

                return (
                  <Link
                    key={agent.id}
                    href={`/agents/${squad.slug}/${agent.id}`}
                    className="group bg-card border border-subtle rounded-xl p-4 hover:bg-card-hover hover:border-[--hover-border] transition-all duration-300"
                    style={
                      {
                        "--hover-border": `${squad.accent}40`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="flex items-start gap-3">
                      {/* Photo or initials */}
                      {agent.photo ? (
                        <img
                          src={agent.photo}
                          alt={agent.name}
                          className="w-10 h-10 rounded-full object-cover shrink-0"
                        />
                      ) : (
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
                      )}

                      <div className="min-w-0 flex-1">
                        {/* Name */}
                        <h3 className="text-sm font-semibold text-primary group-hover:text-gold-50 transition-colors truncate">
                          {agent.name}
                        </h3>

                        {/* Handle */}
                        <p className="text-xs text-muted mt-0.5 truncate">
                          @{agent.id}
                        </p>

                        {/* Path with copy */}
                        <div className="flex items-center gap-1.5 mt-2">
                          <span className="text-[10px] font-mono text-muted truncate">
                            {agentPath}
                          </span>
                          <button
                            onClick={(e) => handleCopy(e, agentPath)}
                            className="shrink-0 text-muted hover:text-primary transition-colors"
                            title="Copiar path"
                          >
                            <Copy size={11} />
                          </button>
                          {copiedPath === agentPath && (
                            <span className="text-[10px] text-green-400 font-mono">
                              ok
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
