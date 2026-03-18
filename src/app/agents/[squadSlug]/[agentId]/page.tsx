"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Crown } from "lucide-react";
import { getSquadBySlug } from "@/data/squads";

export default function AgentDetailPage() {
  const params = useParams();
  const squadSlug = params.squadSlug as string;
  const agentId = params.agentId as string;

  const squad = getSquadBySlug(squadSlug);
  const agent = squad?.agents.find((a) => a.id === agentId);

  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!squad || !agent) {
    notFound();
  }

  const activationCommand = `/${squadSlug}:agents:${agentId}`;

  function handleCopy() {
    navigator.clipboard.writeText(activationCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen bg-white p-8 md:p-12" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[800px] mx-auto">
        {/* Back link */}
        <Link
          href={`/squads/${squadSlug}`}
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors mb-10 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Voltar para {squad.name}
        </Link>

        {/* Hero section */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Avatar */}
          {agent.photo && !imgError ? (
            <img
              src={agent.photo}
              alt={agent.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-slate-200 mb-6"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-mono font-bold mb-6 border-2 shrink-0"
              style={{
                backgroundColor: `${agent.color}18`,
                color: agent.color,
                borderColor: `${agent.color}40`,
              }}
            >
              {agent.initials}
            </div>
          )}

          {/* Name */}
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {agent.name}
          </h1>

          {/* Role */}
          <p className="font-mono text-sm text-blue-600 uppercase tracking-wider mb-4">
            {agent.role}
          </p>

          {/* Badges */}
          <div className="flex items-center gap-3">
            {agent.isChief && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 uppercase tracking-wider font-medium">
                <Crown size={12} />
                Chief
              </span>
            )}
            <Link
              href={`/squads/${squadSlug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
            >
              {squad.name}
            </Link>
          </div>
        </div>

        {/* Biografia */}
        <section className="mb-6">
          <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Biografia
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {agent.bio || agent.description}
            </p>
          </div>
        </section>

        {/* Especialidades */}
        <section className="mb-6">
          <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Especialidades
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {agent.specialty}
            </p>
          </div>
        </section>

        {/* Frameworks */}
        {agent.frameworks.length > 0 && (
          <section className="mb-6">
            <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Frameworks
              </h2>
              <div className="flex flex-wrap gap-2">
                {agent.frameworks.map((fw) => (
                  <span
                    key={fw}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-blue-50 text-blue-700 border border-blue-200"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Personalidade */}
        <section className="mb-6">
          <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Personalidade
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {agent.personality}
            </p>
          </div>
        </section>

        {/* Comando de Ativacao */}
        <section className="mb-10">
          <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Comando de Ativacao
            </h2>
            <div className="flex items-center gap-3">
              <code className="flex-1 px-4 py-3 rounded-lg bg-blue-50 border border-blue-200 text-sm font-mono text-blue-700">
                {activationCommand}
              </code>
              <button
                onClick={handleCopy}
                className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-all"
                title="Copiar comando"
              >
                {copied ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <Copy size={16} className="text-slate-400" />
                )}
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 font-mono">
              Cole este comando para ativar o agente
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
