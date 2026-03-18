"use client";

import { useState } from "react";
import { Terminal, Check, Copy, ExternalLink } from "lucide-react";

const installSteps = [
  {
    number: 1,
    label: "Clone o repositorio",
    command: "git clone https://github.com/BabiloniaAIOS/aios-core.git",
  },
  {
    number: 2,
    label: "Entre na pasta",
    command: "cd aios-core",
  },
  {
    number: 3,
    label: "Instale as dependencias",
    command: "npm install",
  },
  {
    number: 4,
    label: "Execute o instalador",
    command: "npx aios-core install",
  },
];

const prerequisites = ["Node.js 18+", "Git", "Claude Code (Anthropic CLI)"];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-white/5 transition-colors text-muted hover:text-secondary"
      title="Copiar comando"
    >
      {copied ? (
        <Check size={14} className="text-green-400" />
      ) : (
        <Copy size={14} />
      )}
    </button>
  );
}

export default function DownloadsPage() {
  return (
    <div className="min-h-screen p-8 md:p-12">
      {/* Header */}
      <div className="mb-10 animate-fade-in-up">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-gold-50 tracking-wide">
          Downloads
        </h1>
        <p className="text-secondary mt-2 text-lg">
          Instale o framework e comece a usar os agentes.
        </p>
      </div>

      {/* Main card */}
      <div className="max-w-3xl animate-fade-in-up delay-100">
        <div className="bg-card border border-subtle rounded-2xl overflow-hidden">
          {/* Card header */}
          <div className="p-8 border-b border-subtle">
            <div className="flex items-start gap-5">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold-300/10 border border-gold-300/20 flex items-center justify-center shrink-0">
                <Terminal size={28} className="text-gold-300" />
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-gold-50">
                  Babilonia AIOS Core
                </h2>
                <p className="text-secondary mt-2 text-sm leading-relaxed">
                  Repositorio completo do framework AIOS. Inclui o core do
                  sistema, CLI, orquestracao de agentes, sistema de squads,
                  templates, e toda a infraestrutura para desenvolvimento
                  orientado por IA.
                </p>
              </div>
            </div>
          </div>

          {/* Install steps */}
          <div className="p-8">
            <h3 className="font-display text-lg font-semibold text-gold-100 mb-6">
              Como instalar
            </h3>

            <div className="space-y-4">
              {installSteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  {/* Step number */}
                  <div className="w-7 h-7 rounded-full bg-gold-300/15 border border-gold-300/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-semibold text-gold-200">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-primary mb-2">{step.label}</p>
                    <div className="bg-deep rounded-lg border border-subtle flex items-center justify-between gap-2 px-4 py-3">
                      <code className="text-sm font-mono text-gold-200 truncate">
                        {step.command}
                      </code>
                      <CopyButton text={step.command} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="mx-8 mb-8 p-5 bg-deep rounded-xl border border-subtle">
            <h4 className="text-xs font-mono font-semibold text-gold-400 uppercase tracking-wider mb-3">
              Pre-requisitos
            </h4>
            <div className="flex flex-wrap gap-2">
              {prerequisites.map((req) => (
                <span
                  key={req}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-surface text-secondary border border-subtle"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="px-8 pb-8">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-gold-300/10 border border-gold-300/30 text-gold-200 text-sm font-medium hover:bg-gold-300/20 hover:border-gold-300/40 transition-all duration-200"
            >
              <ExternalLink size={16} />
              Acessar Repositorio no GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
