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
      className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-slate-500 hover:text-green-400"
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
    <div className="min-h-screen bg-white p-8 md:p-12" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">
          Downloads
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Instale o framework e comece a usar os agentes.
        </p>
      </div>

      {/* Main card */}
      <div className="max-w-3xl">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          {/* Card header */}
          <div className="p-8 border-b border-slate-200">
            <div className="flex items-start gap-5">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                <Terminal size={28} className="text-blue-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Babilonia AIOS Core
                </h2>
                <p className="text-slate-500 mt-2 text-sm leading-relaxed">
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
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Como instalar
            </h3>

            <div className="space-y-4">
              {installSteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  {/* Step number */}
                  <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-semibold text-white">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-700 mb-2 font-medium">{step.label}</p>
                    <div className="bg-slate-900 rounded-lg flex items-center justify-between gap-2 px-4 py-3">
                      <code className="text-sm font-mono text-green-400 truncate">
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
          <div className="mx-8 mb-8 p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-3">
              Pre-requisitos
            </h4>
            <div className="flex flex-wrap gap-2">
              {prerequisites.map((req) => (
                <span
                  key={req}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="px-8 pb-8">
            <a
              href="https://github.com/BabiloniaAIOS/aios-core"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
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
