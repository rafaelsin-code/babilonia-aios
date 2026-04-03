"use client";

import { useState } from "react";
import {
  Terminal,
  Check,
  Copy,
  ExternalLink,
  Download,
  Box,
  Cpu,
  GitBranch,
  Layers,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";

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
      className="p-2 rounded-lg hover:bg-white/10 transition-all text-slate-500 hover:text-white"
      title="Copiar"
    >
      {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
    </button>
  );
}

const steps = [
  { num: 1, label: "Clone o repositório", cmd: "git clone https://github.com/rafaelsin-code/babilonia-aios.git" },
  { num: 2, label: "Entre na pasta do projeto", cmd: "cd babilonia-aios" },
  { num: 3, label: "Instale as dependências", cmd: "npm install" },
  { num: 4, label: "Inicie o servidor", cmd: "npm run dev" },
];

const features = [
  { icon: Cpu, title: "87 Agentes IA", desc: "Agentes especializados com personalidade, frameworks e metodologias únicas." },
  { icon: Layers, title: "12 Squads", desc: "Times temáticos organizados por área de expertise." },
  { icon: GitBranch, title: "7 Workflows", desc: "Pipelines que orquestram múltiplos agentes em sequência." },
  { icon: Zap, title: "36 Tasks", desc: "Ações executáveis com inputs e outputs definidos." },
  { icon: Shield, title: "Framework Ético", desc: "Governança e princípios de IA responsável integrados." },
  { icon: Box, title: "Claude Code Ready", desc: "17 slash commands prontos. Abra o projeto e use." },
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen font-sans">

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-20 px-6">
        {/* Grid bg */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        {/* Glow orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Download size={14} />
            Open Source &middot; Gratuito
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Babilônia
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> AIOS</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            O framework completo de orquestração de agentes IA. Sistema de squads,
            workflows inteligentes e toda a infraestrutura para desenvolvimento
            orientado por inteligência artificial.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/rafaelsin-code/babilonia-aios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold text-base hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              Ver no GitHub
            </a>
            <a
              href="#install"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-base border border-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <Terminal size={18} />
              Instalação Rápida
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES GRID ═══ */}
      <section className="max-w-5xl mx-auto px-6 -mt-1 relative z-10">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-2 grid grid-cols-2 md:grid-cols-3 gap-1">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl p-5 hover:bg-blue-50/50 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <f.icon size={20} className="text-blue-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">{f.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ INSTALLATION ═══ */}
      <section id="install" className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">Instalação</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Pronto em 4 comandos
          </h2>
          <p className="text-slate-500">
            Copie e cole. Em menos de 2 minutos você está rodando.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-5 mb-10">
          {steps.map((step, i) => (
            <div key={step.num} className="group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}>
              <div className="flex items-start gap-4">
                {/* Number + line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-600/20">
                    <span className="text-xs font-bold text-white">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-5 bg-gradient-to-b from-blue-200 to-transparent mt-1" />
                  )}
                </div>

                <div className="flex-1 min-w-0 -mt-1">
                  <p className="text-sm font-semibold text-slate-700 mb-2">{step.label}</p>
                  <div className="group/code bg-slate-900 rounded-xl flex items-center justify-between gap-3 px-5 py-3.5 border border-slate-800 hover:border-blue-500/30 transition-colors">
                    <code className="text-sm font-mono text-emerald-400 truncate select-all">
                      {step.cmd}
                    </code>
                    <CopyButton text={step.cmd} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Como usar no Claude Code */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">Como usar</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Slash commands no Claude Code
            </h2>
            <p className="text-slate-500">
              Após instalar, abra o projeto no Claude Code e use os comandos.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-slate-500 ml-2">Claude Code</span>
            </div>
            <div className="p-6 space-y-3">
              {[
                { cmd: "/babilonia", desc: "menu com todos os comandos" },
                { cmd: "/advisory-board", desc: "conselho com Dalio, Munger, Naval, Thiel" },
                { cmd: "/copy-squad", desc: "squad de copy com Halbert, Ogilvy, Schwartz" },
                { cmd: "/hormozi-squad", desc: "frameworks Hormozi completos" },
                { cmd: "/brand-squad", desc: "estratégia de marca com Aaker, Ries, Neumeier" },
                { cmd: "/traffic-masters", desc: "tráfego com Pittman, Sobral, Breeze" },
                { cmd: "/c-level", desc: "C-suite virtual completa" },
                { cmd: "/storytelling", desc: "narrativa com Campbell, McKee, Duarte" },
                { cmd: "/criar-oferta", desc: "executa Grand Slam Offer passo a passo" },
                { cmd: "/escrever-copy", desc: "escreve sales letter completa" },
                { cmd: "/auditar-marca", desc: "auditoria completa de marca" },
                { cmd: "/reunir-conselho", desc: "deliberação estratégica multi-agente" },
              ].map((item) => (
                <div key={item.cmd} className="flex items-center gap-4 group">
                  <code className="text-sm font-mono text-cyan-400 w-44 shrink-0">{item.cmd}</code>
                  <span className="text-slate-500 text-sm">→</span>
                  <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={16} className="text-blue-600" />
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-700">Pré-requisitos</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Node.js 20.9+", "Git", "Claude Code (Anthropic CLI)"].map((req) => (
              <span key={req} className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-slate-700 border border-blue-200/50 shadow-sm">
                {req}
              </span>
            ))}
          </div>
        </div>

        {/* One-liner */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 mb-10">
          <p className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">Instalação em uma linha</p>
          <div className="flex items-center justify-between gap-3">
            <code className="text-sm font-mono text-cyan-400 select-all">
              git clone https://github.com/rafaelsin-code/babilonia-aios.git && cd babilonia-aios && npm i && npm run dev
            </code>
            <CopyButton text="git clone https://github.com/rafaelsin-code/babilonia-aios.git && cd babilonia-aios && npm i && npm run dev" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/rafaelsin-code/babilonia-aios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <ExternalLink size={18} />
            Acessar Repositório no GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
