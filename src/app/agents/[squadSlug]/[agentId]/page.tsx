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
  const [imgError, setImgError] = useState(false);

  if (!squad || !agent) {
    notFound();
  }

  const activationCommand = `/${squadSlug}:agents:${agentId}`;

  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(agent.name)}&background=${agent.color.slice(1)}&color=fff&size=200&bold=true&format=png`;

  function handleCopy() {
    navigator.clipboard.writeText(activationCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // Split bio into paragraphs for rich display
  const bioParagraphs = (agent.bio || agent.description)
    .split(/\.\s+/)
    .filter((s) => s.trim().length > 0)
    .map((s) => (s.endsWith(".") ? s : s + "."));

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F8FAFC", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Top navigation bar */}
      <div className="max-w-[1120px] mx-auto px-6 pt-8 pb-4">
        <Link
          href={`/squads/${squadSlug}`}
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft
            size={15}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Voltar para {squad.name}
        </Link>
      </div>

      {/* Two-column layout */}
      <div className="max-w-[1120px] mx-auto px-6 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* ═══════════ LEFT COLUMN — Sticky Sidebar ═══════════ */}
          <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.03)] p-6">
              {/* Avatar */}
              <div className="flex flex-col items-center mb-5">
                <div className="relative mb-4">
                  <img
                    src={
                      agent.photo && !imgError
                        ? agent.photo
                        : fallbackAvatar
                    }
                    alt={agent.name}
                    className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-100"
                    onError={() => setImgError(true)}
                  />
                  {agent.isChief && (
                    <span
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-lg flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: "#2563EB" }}
                    >
                      <Crown size={14} className="text-white" />
                    </span>
                  )}
                </div>

                <h2 className="text-base font-semibold text-slate-900 text-center leading-tight">
                  {agent.name}
                </h2>
                <p
                  className="text-xs font-medium mt-1 text-center"
                  style={{ color: "#2563EB" }}
                >
                  {agent.role}
                </p>

                {/* Squad badge */}
                <Link
                  href={`/squads/${squadSlug}`}
                  className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-150 hover:border-blue-200 hover:text-blue-600 transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-sm"
                    style={{ backgroundColor: squad.accent }}
                  />
                  {squad.name}
                </Link>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-100 my-5" />

              {/* Frameworks list */}
              {agent.frameworks.length > 0 && (
                <>
                  <div className="mb-5">
                    <h3 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Frameworks
                    </h3>
                    <ul className="space-y-2">
                      {agent.frameworks.map((fw) => (
                        <li
                          key={fw}
                          className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-snug"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-[6px] shrink-0"
                            style={{ backgroundColor: "#2563EB" }}
                          />
                          {fw}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-px bg-slate-100 my-5" />
                </>
              )}

              {/* Personality */}
              <div className="mb-5">
                <h3 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Personalidade
                </h3>
                <p className="text-[13px] text-slate-500 italic leading-relaxed">
                  &ldquo;{agent.personality}&rdquo;
                </p>
              </div>

              <div className="h-px bg-slate-100 my-5" />

              {/* Activation command */}
              <div>
                <h3 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Comando
                </h3>
                <div className="flex items-center gap-2">
                  <code
                    className="flex-1 px-3 py-2 rounded-lg text-[12px] text-blue-700 border border-blue-100 truncate"
                    style={{
                      backgroundColor: "#EFF6FF",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {activationCommand}
                  </code>
                  <button
                    onClick={handleCopy}
                    className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer"
                    title="Copiar comando"
                  >
                    {copied ? (
                      <Check size={14} className="text-green-500" />
                    ) : (
                      <Copy size={14} className="text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* ═══════════ RIGHT COLUMN — Main Content ═══════════ */}
          <main className="flex-1 min-w-0">
            {/* Sobre */}
            <section className="mb-10">
              <h1 className="text-2xl font-bold text-slate-900 mb-1">
                Sobre {agent.name}
              </h1>
              <div
                className="h-[3px] w-12 rounded-full mt-3 mb-6"
                style={{ backgroundColor: "#2563EB" }}
              />
              <div className="space-y-4">
                {bioParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-[15px] text-slate-600 leading-[1.75]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <div className="h-px bg-slate-200/70 my-10" />

            {/* Especialidades */}
            <section className="mb-10">
              <div className="flex items-center gap-2.5 mb-4">
                <Sparkles
                  size={18}
                  style={{ color: "#2563EB" }}
                  strokeWidth={2}
                />
                <h2 className="text-lg font-semibold text-slate-900">
                  Especialidades
                </h2>
              </div>
              <p className="text-[15px] text-slate-600 leading-[1.75]">
                {agent.specialty}
              </p>
            </section>

            <div className="h-px bg-slate-200/70 my-10" />

            {/* Frameworks & Metodologias — detailed */}
            {agent.frameworks.length > 0 && (
              <>
                <section className="mb-10">
                  <h2 className="text-lg font-semibold text-slate-900 mb-5">
                    Frameworks &amp; Metodologias
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {agent.frameworks.map((fw) => (
                      <div
                        key={fw}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 hover:border-blue-200 transition-colors"
                      >
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[13px] font-bold"
                          style={{
                            backgroundColor: `${agent.color}14`,
                            color: agent.color,
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {fw.charAt(0)}
                        </span>
                        <div>
                          <p className="text-[13px] font-semibold text-slate-800 leading-tight">
                            {fw}
                          </p>
                          <p className="text-[12px] text-slate-400 mt-1 leading-snug">
                            Metodologia aplicada por {agent.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="h-px bg-slate-200/70 my-10" />
              </>
            )}

            {/* Como Usar Este Agente */}
            <section className="mb-10">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Como Usar Este Agente
              </h2>
              <div className="space-y-4 text-[15px] text-slate-600 leading-[1.75]">
                {agent.isChief ? (
                  <>
                    <p>
                      Como <strong>Chief do squad {squad.name}</strong>,{" "}
                      {agent.name} e o ponto de entrada para ativar qualquer
                      agente ou workflow deste squad. Use o comando abaixo para
                      iniciar uma sessao.
                    </p>
                    <p>
                      Apos ativar, voce pode solicitar diagnosticos, sinteses ou
                      encaminhar questoes para agentes especificos do squad.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Ative o <strong>Chief do squad</strong> primeiro para
                      contexto completo, depois execute o comando de gatilho
                      deste agente. Voce tambem pode ativa-lo diretamente se ja
                      tiver contexto do squad carregado.
                    </p>
                    <p>
                      {agent.name} vai responder usando seus frameworks (
                      {agent.frameworks.slice(0, 2).join(", ")}
                      {agent.frameworks.length > 2 ? ", entre outros" : ""}) e
                      sua personalidade unica para gerar insights acionaveis.
                    </p>
                  </>
                )}
              </div>

              {/* Command block */}
              <div
                className="mt-6 flex items-center gap-3 p-4 rounded-xl border"
                style={{
                  backgroundColor: "#F8FAFC",
                  borderColor: "#E2E8F0",
                }}
              >
                <code
                  className="flex-1 text-[14px] text-blue-700 font-semibold"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {activationCommand}
                </code>
                <button
                  onClick={handleCopy}
                  className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-medium border transition-all cursor-pointer"
                  style={{
                    backgroundColor: copied ? "#F0FDF4" : "white",
                    borderColor: copied ? "#86EFAC" : "#E2E8F0",
                    color: copied ? "#16A34A" : "#64748B",
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={13} />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      Copiar
                    </>
                  )}
                </button>
              </div>

              <p
                className="text-[11px] text-slate-400 mt-2 ml-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Cole no chat para ativar o agente
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
