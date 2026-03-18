"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check } from "lucide-react";
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
    <div className="min-h-screen bg-white p-8 md:p-12" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">
          Todos os Agentes
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Todos os agentes disponiveis para ativacao
        </p>
        <p className="text-slate-400 mt-1 text-sm">
          {totalAgents} agentes distribuidos em {totalSquads} squads. Clique no card para ver a bio.
        </p>
      </div>

      {/* Squads sections */}
      <div className="space-y-10">
        {squads.map((squad) => (
          <section key={squad.slug}>
            {/* Squad header */}
            <div
              className="flex items-center gap-3 mb-4 pl-4"
              style={{ borderLeft: `3px solid ${squad.accent}` }}
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {squad.name}
              </h2>
              <span
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium"
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
                    className="group bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      {/* Photo with onError fallback or initials */}
                      <div className="relative w-10 h-10 shrink-0">
                        {agent.photo ? (
                          <>
                            <img
                              src={agent.photo}
                              alt={agent.name}
                              className="w-10 h-10 rounded-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display:flex');
                              }}
                            />
                            <div
                              style={{ display: 'none' }}
                              className="w-10 h-10 rounded-full items-center justify-center text-xs font-mono font-semibold absolute top-0 left-0"
                            >
                              <div
                                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-semibold"
                                style={{
                                  backgroundColor: `${agent.color}15`,
                                  color: agent.color,
                                  border: `1px solid ${agent.color}30`,
                                }}
                              >
                                {agent.initials}
                              </div>
                            </div>
                          </>
                        ) : (
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-semibold"
                            style={{
                              backgroundColor: `${agent.color}15`,
                              color: agent.color,
                              border: `1px solid ${agent.color}30`,
                            }}
                          >
                            {agent.initials}
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        {/* Name */}
                        <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                          {agent.name}
                        </h3>

                        {/* Handle */}
                        <p className="text-xs text-slate-400 mt-0.5 truncate">
                          @{agent.id}
                        </p>

                        {/* Path with copy */}
                        <div className="flex items-center gap-1.5 mt-2">
                          <span className="text-[10px] font-mono text-slate-400 truncate">
                            {agentPath}
                          </span>
                          <button
                            onClick={(e) => handleCopy(e, agentPath)}
                            className="shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
                            title="Copiar path"
                          >
                            {copiedPath === agentPath ? (
                              <Check size={11} className="text-green-500" />
                            ) : (
                              <Copy size={11} />
                            )}
                          </button>
                          {copiedPath === agentPath && (
                            <span className="text-[10px] text-green-500 font-mono">
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
