"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Crown, Sparkles } from "lucide-react";
import { getSquadBySlug } from "@/data/squads";

export default function AgentDetailPage() {
  const params = useParams();
  const squadSlug = params.squadSlug as string;
  const agentId = params.agentId as string;

  const squad = getSquadBySlug(squadSlug);
  const agent = squad?.agents.find((a) => a.id === agentId);

  const [copied, setCopied] = useState(false);

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
    <div className="min-h-screen p-8 md:p-12">
      <div className="max-w-[800px] mx-auto">
        {/* Back link */}
        <Link
          href={`/squads/${squadSlug}`}
          className="inline-flex items-center gap-2 text-sm text-gold-500 hover:text-gold-300 transition-colors mb-10 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Voltar para {squad.name}
        </Link>

        {/* Hero section */}
        <div className="flex flex-col items-center text-center mb-12 animate-fade-in-up">
          {/* Avatar */}
          {agent.photo ? (
            <img
              src={agent.photo}
              alt={agent.name}
              className="w-[120px] h-[120px] rounded-full object-cover border-2 border-gold-300/30 mb-6"
            />
          ) : (
            <div
              className="w-[120px] h-[120px] rounded-full flex items-center justify-center text-2xl font-mono font-bold mb-6 border-2 shrink-0"
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
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gold-50 tracking-wide mb-2">
            {agent.name}
          </h1>

          {/* Role */}
          <p className="font-mono text-sm text-gold-200 uppercase tracking-widest mb-4">
            {agent.role}
          </p>

          {/* Badges */}
          <div className="flex items-center gap-3">
            {agent.isChief && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-300/15 border border-gold-300/30 text-xs font-mono text-gold-300 uppercase tracking-wider font-medium">
                <Crown size={12} />
                Chief
              </span>
            )}
            <Link
              href={`/squads/${squadSlug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-secondary hover:text-gold-200 hover:border-gold-300/20 transition-colors"
            >
              {squad.name}
            </Link>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-10 animate-fade-in-up">
          <div className="rounded-xl bg-card border border-subtle p-6">
            <h2 className="font-display text-lg font-semibold text-gold-50 mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-gold-300" />
              Biografia
            </h2>
            <p className="text-sm text-secondary leading-relaxed">
              {agent.bio || agent.description}
            </p>
          </div>
        </section>

        {/* Especialidades */}
        <section className="mb-10 animate-fade-in-up">
          <div className="rounded-xl bg-card border border-subtle p-6">
            <h2 className="font-display text-lg font-semibold text-gold-50 mb-4">
              Especialidades
            </h2>
            <p className="text-sm text-secondary leading-relaxed">
              {agent.specialty}
            </p>
          </div>
        </section>

        {/* Frameworks */}
        {agent.frameworks.length > 0 && (
          <section className="mb-10 animate-fade-in-up">
            <div className="rounded-xl bg-card border border-subtle p-6">
              <h2 className="font-display text-lg font-semibold text-gold-50 mb-4">
                Frameworks
              </h2>
              <div className="flex flex-wrap gap-2">
                {agent.frameworks.map((fw) => (
                  <span
                    key={fw}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-gold-300/8 text-gold-400 border border-gold-300/15"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Personalidade */}
        <section className="mb-10 animate-fade-in-up">
          <div className="rounded-xl bg-card border border-subtle p-6">
            <h2 className="font-display text-lg font-semibold text-gold-50 mb-4">
              Personalidade
            </h2>
            <p className="text-sm text-secondary leading-relaxed">
              {agent.personality}
            </p>
          </div>
        </section>

        {/* Comandos */}
        <section className="mb-10 animate-fade-in-up">
          <div className="rounded-xl bg-card border border-subtle p-6">
            <h2 className="font-display text-lg font-semibold text-gold-50 mb-4">
              Comandos
            </h2>
            <div className="flex items-center gap-3">
              <code className="flex-1 px-4 py-3 rounded-lg bg-surface border border-subtle text-sm font-mono text-gold-200">
                {activationCommand}
              </code>
              <button
                onClick={handleCopy}
                className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-subtle hover:bg-card-hover hover:border-gold-300/20 transition-all"
                title="Copiar comando"
              >
                {copied ? (
                  <Check size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} className="text-muted" />
                )}
              </button>
            </div>
            <p className="text-[11px] text-muted mt-2 font-mono">
              Comando de ativacao do agente
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
