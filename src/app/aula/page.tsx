"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Terminal,
  Brain,
  Users,
  GitBranch,
  Zap,
  Sparkles,
  Check,
  X,
  ChevronRight,
  Code2,
  FileCode,
  Layers,
  Boxes,
  Workflow,
  Target,
  BookOpen,
  Rocket,
  CircleDot,
} from "lucide-react";

/* ════════════════════════════════════════════════════════════
   HOOK — Detectar seção ativa durante scroll
   ════════════════════════════════════════════════════════════ */

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

/* ════════════════════════════════════════════════════════════
   FADE-IN ON SCROLL — Helper component
   ════════════════════════════════════════════════════════════ */

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DADOS DAS SEÇÕES
   ════════════════════════════════════════════════════════════ */

const sections = [
  { id: "hero", label: "Início" },
  { id: "problema", label: "O Problema" },
  { id: "claude-code", label: "Claude Code" },
  { id: "comparacao", label: "Comparação" },
  { id: "agente", label: "Agentes" },
  { id: "porque", label: "Por que funciona" },
  { id: "squad", label: "Squads" },
  { id: "workflow", label: "Workflows" },
  { id: "task", label: "Tasks" },
  { id: "babilonia", label: "Babilônia" },
  { id: "antes-depois", label: "Antes vs Depois" },
  { id: "instalar", label: "Como instalar" },
  { id: "casos", label: "Casos de uso" },
  { id: "final", label: "Próximo passo" },
];

/* ════════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
   ════════════════════════════════════════════════════════════ */

export default function AulaPage() {
  const activeSection = useActiveSection(sections.map((s) => s.id));

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-snap-type: y mandatory;
        }
        section.snap-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          * { animation: none !important; transition: none !important; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes float-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .blink { animation: blink 1s infinite; }
        .pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .float-up { animation: float-up 3s ease-in-out infinite; }
      `}</style>

      {/* ═══ NAV LATERAL — Dots de navegação ═══ */}
      <nav
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
        aria-label="Navegação da aula"
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-label={`Ir para ${section.label}`}
            className="group relative flex items-center gap-3 cursor-pointer"
          >
            <span
              className={`absolute right-6 whitespace-nowrap text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`}
            >
              {section.label}
            </span>
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-blue-500 scale-125 shadow-[0_0_20px_rgba(37,99,235,0.8)]"
                  : "bg-slate-700 group-hover:bg-slate-500"
              }`}
            />
          </a>
        ))}
      </nav>

      {/* ═══ PROGRESS BAR — Topo ═══ */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-900">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
          style={{
            width: `${((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100}%`,
          }}
        />
      </div>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 01 — HERO
          ════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="snap-section relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950" />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `linear-gradient(#60A5FA 1px, transparent 1px), linear-gradient(90deg, #60A5FA 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        <div className="absolute top-20 left-[15%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pulse-slow" />
        <div className="absolute bottom-20 right-[15%] w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pulse-slow" />

        <div className="relative z-10 max-w-5xl text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-mono mb-8">
              <BookOpen size={14} />
              AULA · DO ZERO AO BABILÔNIA
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-8">
              Entenda o que você
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                acabou de construir.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Claude Code, Agentes, Squads, Workflows, Tasks. E por que o{" "}
              <span className="text-blue-400 font-semibold">Babilônia AIOS</span>{" "}
              muda tudo.
            </p>
          </FadeIn>
          <FadeIn delay={450}>
            <a
              href="#problema"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
            >
              Começar a aula
              <ArrowDown size={18} className="float-up" />
            </a>
          </FadeIn>
          <FadeIn delay={600}>
            <div className="mt-16 flex items-center justify-center gap-8 text-xs text-slate-500 font-mono">
              <span>14 CAPÍTULOS</span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span>12 MIN DE LEITURA</span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span>SCROLL PARA AVANÇAR</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 02 — O PROBLEMA
          ════════════════════════════════════════════════════ */}
      <section
        id="problema"
        className="snap-section relative min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              01 · O PROBLEMA
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-12 leading-[1]">
              IA genérica sabe
              <br />
              um pouco de tudo.
              <br />
              <span className="text-slate-500">E nada de nada.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <X size={20} className="text-red-400" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-200">ChatGPT / Claude Web</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Você pergunta. Ele responde com o que é <em>estatisticamente mais comum</em>.
                  Genérico, mediano, sem personalidade. Não lembra de você amanhã.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-blue-500/5 border border-blue-500/30 backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <Check size={20} className="text-blue-400" />
                  </div>
                  <h3 className="font-bold text-xl text-white">Agente Especialista</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Mesma IA, mas <em>calibrada</em> pra pensar como um especialista real.
                  Com frameworks, tom, metodologia e profundidade. Como ter o Ray Dalio respondendo.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 03 — O QUE É CLAUDE CODE
          ════════════════════════════════════════════════════ */}
      <section
        id="claude-code"
        className="snap-section relative min-h-screen flex items-center px-6 py-20 bg-slate-900/30"
      >
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              02 · A FERRAMENTA
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn delay={150}>
                <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1]">
                  O que é{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Claude Code
                  </span>?
                </h2>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="text-xl text-slate-400 mb-6 leading-relaxed">
                  Não é um chatbot. É um <strong className="text-white">agente de IA que roda no seu terminal</strong>, com acesso direto ao seu computador.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <ul className="space-y-4 text-slate-300">
                  {[
                    { icon: FileCode, text: "Lê e edita arquivos do seu projeto" },
                    { icon: Terminal, text: "Roda comandos no shell por você" },
                    { icon: Code2, text: "Escreve, testa e refatora código" },
                    { icon: Brain, text: "Mantém contexto do projeto (CLAUDE.md)" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-blue-400" />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Terminal mockup */}
            <FadeIn delay={300}>
              <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl shadow-blue-500/10">
                <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="text-xs font-mono text-slate-500 ml-2">terminal</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <p className="text-slate-500">$ cd ~/babilonia-aios</p>
                  <p className="text-slate-500">$ claude</p>
                  <p className="text-blue-400">🏛️  Babilônia AIOS · 87 agentes · 12 squads</p>
                  <p className="text-slate-600">─────────────────────────</p>
                  <p className="text-slate-400">&gt; Crie uma Grand Slam Offer para meu curso</p>
                  <p className="text-emerald-400 mt-2">● Ativando Hormozi Squad...</p>
                  <p className="text-emerald-400">● Lendo frameworks.md...</p>
                  <p className="text-emerald-400">● Gerando oferta<span className="blink">_</span></p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 04 — COMPARAÇÃO
          ════════════════════════════════════════════════════ */}
      <section
        id="comparacao"
        className="snap-section relative min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              03 · COMPARAÇÃO
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-16 leading-[1]">
              Claude Code é <em>outro patamar</em>.
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-900/50">
                    <th className="text-left px-6 py-5 text-slate-500 text-xs font-mono uppercase tracking-widest">Recurso</th>
                    <th className="text-center px-6 py-5 text-slate-500 text-xs font-mono uppercase tracking-widest">ChatGPT</th>
                    <th className="text-center px-6 py-5 text-slate-500 text-xs font-mono uppercase tracking-widest">Claude Web</th>
                    <th className="text-center px-6 py-5 text-blue-400 text-xs font-mono uppercase tracking-widest">Claude Code</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["Chat com IA", true, true, true],
                    ["Acesso aos seus arquivos", false, false, true],
                    ["Roda comandos no terminal", false, false, true],
                    ["Edita código automaticamente", false, false, true],
                    ["Memória persistente do projeto", false, false, true],
                    ["Slash commands customizáveis", false, false, true],
                    ["Agentes especializados (Squads)", false, false, true],
                    ["Hooks e automação", false, false, true],
                  ].map(([label, a, b, c], i) => (
                    <tr key={i} className="border-t border-slate-800">
                      <td className="px-6 py-4 text-slate-300">{label}</td>
                      <td className="text-center px-6 py-4">
                        {a ? <Check size={18} className="inline text-slate-400" /> : <X size={18} className="inline text-slate-700" />}
                      </td>
                      <td className="text-center px-6 py-4">
                        {b ? <Check size={18} className="inline text-slate-400" /> : <X size={18} className="inline text-slate-700" />}
                      </td>
                      <td className="text-center px-6 py-4 bg-blue-500/5">
                        {c ? <Check size={18} className="inline text-blue-400" /> : <X size={18} className="inline text-slate-700" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 05 — O QUE É UM AGENTE
          ════════════════════════════════════════════════════ */}
      <section
        id="agente"
        className="snap-section relative min-h-screen flex items-center px-6 py-20 bg-slate-900/30"
      >
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              04 · CONCEITO
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1]">
              O que é um{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Agente
              </span>?
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed">
              Um agente é o Claude <strong className="text-white">vestido com uma persona específica</strong>. Mesma IA, mas com:
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Brain, title: "Personalidade", desc: "Tom, estilo, jeito de pensar" },
                { icon: Layers, title: "Frameworks", desc: "Metodologias específicas de um expert" },
                { icon: Target, title: "Especialidade", desc: "Domínio profundo em uma área" },
                { icon: Sparkles, title: "Contexto", desc: "Biografia e referências reais" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-blue-400" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={600}>
            <div className="mt-12 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <p className="text-slate-300 leading-relaxed">
                <strong className="text-blue-400">Na prática:</strong>{" "}
                ao ativar o agente <code className="text-cyan-300 bg-slate-950 px-2 py-0.5 rounded">ray-dalio</code>, o Claude
                assume os princípios, estrutura mental e tom do Ray Dalio. Suas respostas mudam completamente —
                ele agora pensa em ciclos, princípios e máquinas, não em respostas genéricas.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 06 — POR QUE FUNCIONA
          ════════════════════════════════════════════════════ */}
      <section
        id="porque"
        className="snap-section relative min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-5xl mx-auto w-full text-center">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              05 · A LÓGICA
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1]">
              Você iria num{" "}
              <span className="text-slate-500">clínico geral</span>
              <br />
              pra operar o coração?
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
              Então por que você pede pro <em>ChatGPT genérico</em> escrever sua sales letter,
              montar sua estratégia de marca ou criar sua oferta?
            </p>
          </FadeIn>
          <FadeIn delay={450}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <p className="text-5xl font-black text-slate-600 mb-3">01</p>
                <p className="text-slate-400">Generalista conhece <strong className="text-white">tudo de forma rasa</strong>.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <p className="text-5xl font-black text-slate-600 mb-3">02</p>
                <p className="text-slate-400">Especialista conhece <strong className="text-white">um domínio de forma profunda</strong>.</p>
              </div>
              <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30">
                <p className="text-5xl font-black text-blue-400 mb-3">03</p>
                <p className="text-slate-300">Babilônia tem <strong className="text-white">87 especialistas</strong> prontos pra trabalhar.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 07 — SQUADS
          ════════════════════════════════════════════════════ */}
      <section
        id="squad"
        className="snap-section relative min-h-screen flex items-center px-6 py-20 bg-slate-900/30"
      >
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              06 · TIMES
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1]">
              Um agente é bom.
              <br />
              Um <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">squad inteiro</span> é outro nível.
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed">
              Um <strong className="text-white">squad</strong> é um time de agentes especializados que trabalham juntos.
              Cada um com sua função, orquestrados por um chief.
            </p>
          </FadeIn>

          {/* Exemplo visual — Advisory Board */}
          <FadeIn delay={450}>
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                  <Users size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Exemplo</p>
                  <p className="font-bold text-lg text-white">Advisory Board Squad</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: "Ray Dalio", role: "Princípios" },
                  { name: "Charlie Munger", role: "Modelos mentais" },
                  { name: "Naval Ravikant", role: "Alavancagem" },
                  { name: "Peter Thiel", role: "Monopólio" },
                  { name: "Warren Buffett", role: "Investimento" },
                  { name: "Jeff Bezos", role: "Longo prazo" },
                  { name: "Steve Jobs", role: "Produto" },
                  { name: "+ 4 mais", role: "Conselheiros" },
                ].map((a, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                    <p className="font-semibold text-white text-sm">{a.name}</p>
                    <p className="text-xs text-blue-400 mt-0.5">{a.role}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-sm text-slate-400">
                  Ativar com{" "}
                  <code className="text-cyan-300 bg-slate-900 px-2 py-1 rounded font-mono">/advisory-board</code>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 08 — WORKFLOWS
          ════════════════════════════════════════════════════ */}
      <section
        id="workflow"
        className="snap-section relative min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              07 · ORQUESTRAÇÃO
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1]">
              Workflows:
              <br />
              <span className="text-slate-500">linhas de montagem inteligentes.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl text-slate-400 mb-16 max-w-3xl leading-relaxed">
              Um workflow é um <strong className="text-white">pipeline sequencial</strong> onde o output de um agente vira o input do próximo.
              Como numa fábrica: cada um faz sua parte.
            </p>
          </FadeIn>
          <FadeIn delay={450}>
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-8">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
                Exemplo: Sales Letter Pipeline
              </p>
              <div className="flex flex-col md:flex-row items-stretch gap-4 md:overflow-x-auto pb-2">
                {[
                  { num: "01", agent: "Strategist", output: "Big Idea" },
                  { num: "02", agent: "Headline Writer", output: "Título" },
                  { num: "03", agent: "Lead Writer", output: "Abertura" },
                  { num: "04", agent: "Body Writer", output: "Corpo" },
                  { num: "05", agent: "Reviewer", output: "Revisão final" },
                ].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-4 md:flex-1">
                    <div className="flex-1 p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-colors">
                      <p className="text-xs font-mono text-blue-400 mb-2">{step.num}</p>
                      <p className="font-bold text-white text-sm mb-1">{step.agent}</p>
                      <p className="text-xs text-slate-500 font-mono">→ {step.output}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <ChevronRight size={20} className="text-slate-700 shrink-0 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 09 — TASKS
          ════════════════════════════════════════════════════ */}
      <section
        id="task"
        className="snap-section relative min-h-screen flex items-center px-6 py-20 bg-slate-900/30"
      >
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              08 · AÇÕES
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1]">
              Tasks são os{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                comandos executáveis
              </span>.
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed">
              Ações pré-definidas com inputs e outputs claros. Você digita o comando e a task executa os passos.
            </p>
          </FadeIn>
          <FadeIn delay={450}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { cmd: "/criar-oferta", desc: "Constrói uma Grand Slam Offer completa usando os frameworks do Hormozi" },
                { cmd: "/escrever-copy", desc: "Gera uma sales letter de direct response do zero ao CTA" },
                { cmd: "/auditar-marca", desc: "Auditoria completa de posicionamento e identidade visual" },
                { cmd: "/reunir-conselho", desc: "Reúne o advisory board pra deliberar uma decisão estratégica" },
              ].map((task, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all group cursor-default"
                >
                  <code className="text-lg font-mono text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {task.cmd}
                  </code>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">{task.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 10 — O BABILÔNIA AIOS
          ════════════════════════════════════════════════════ */}
      <section
        id="babilonia"
        className="snap-section relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-slate-950 to-cyan-950/30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pulse-slow" />

        <div className="relative z-10 max-w-5xl w-full text-center">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              09 · O QUE VOCÊ CONSTRUIU
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-12 leading-[0.95]">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Babilônia AIOS.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              O primeiro framework open-source de agentes IA especializados.
              <br />
              Construído pra quem leva resultado a sério.
            </p>
          </FadeIn>
          <FadeIn delay={450}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "87", label: "Agentes" },
                { value: "12", label: "Squads" },
                { value: "7", label: "Workflows" },
                { value: "36", label: "Tasks" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-slate-950/60 backdrop-blur border border-blue-500/20 hover:border-blue-500/50 transition-colors"
                >
                  <p className="text-6xl font-black bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 11 — ANTES VS DEPOIS
          ════════════════════════════════════════════════════ */}
      <section
        id="antes-depois"
        className="snap-section relative min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              10 · A DIFERENÇA NA PRÁTICA
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-16 leading-[1]">
              Veja a diferença.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn delay={300}>
              <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 h-full">
                <p className="text-xs font-mono text-red-400 uppercase tracking-widest mb-4">
                  ❌ Antes — Claude genérico
                </p>
                <p className="text-sm text-slate-500 mb-4 font-mono">
                  &quot;Escreva uma sales letter pro meu curso&quot;
                </p>
                <div className="rounded-xl bg-slate-950 p-5 border border-slate-800">
                  <p className="text-sm text-slate-400 leading-relaxed italic">
                    &quot;Você está cansado de não saber por onde começar? Nosso curso vai te ensinar tudo o que você precisa.
                    Com aulas práticas e suporte dedicado, você vai alcançar seus objetivos...&quot;
                  </p>
                  <p className="text-xs text-slate-600 mt-3 font-mono">→ genérico. morno. ignorável.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={450}>
              <div className="p-8 rounded-2xl bg-blue-500/5 border border-blue-500/30 h-full">
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-4">
                  ✓ Depois — /copy-squad com Gary Halbert
                </p>
                <p className="text-sm text-slate-300 mb-4 font-mono">
                  &quot;/copy-squad:agents:gary-halbert escreva pro meu curso&quot;
                </p>
                <div className="rounded-xl bg-slate-950 p-5 border border-blue-500/30">
                  <p className="text-sm text-slate-200 leading-relaxed italic">
                    &quot;Querido amigo,
                    <br /><br />
                    Na última terça, às 14h23, eu recebi uma ligação que me deixou mudo por 30 segundos inteiros.
                    Era o Marcos — aluno do curso há 47 dias. Ele me disse, com a voz tremendo...&quot;
                  </p>
                  <p className="text-xs text-blue-400 mt-3 font-mono">→ storytelling. timestamp real. emoção crua.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 12 — COMO INSTALAR
          ════════════════════════════════════════════════════ */}
      <section
        id="instalar"
        className="snap-section relative min-h-screen flex items-center px-6 py-20 bg-slate-900/30"
      >
        <div className="max-w-5xl mx-auto w-full">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              11 · COMO USAR
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-16 leading-[1]">
              4 comandos. <br />
              <span className="text-slate-500">Dois minutos.</span>
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              { step: "01", label: "Clone o repositório", cmd: "git clone https://github.com/rafaelsin-code/babilonia-aios.git" },
              { step: "02", label: "Entre na pasta", cmd: "cd babilonia-aios" },
              { step: "03", label: "Instale as dependências", cmd: "npm install" },
              { step: "04", label: "Abra o Claude Code", cmd: "claude" },
            ].map((step, i) => (
              <FadeIn key={i} delay={300 + i * 100}>
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 font-mono text-blue-400 font-bold group-hover:bg-blue-500/20 transition-colors">
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-400 mb-2">{step.label}</p>
                    <div className="rounded-xl bg-slate-950 border border-slate-800 px-5 py-4 group-hover:border-blue-500/30 transition-colors">
                      <code className="font-mono text-sm text-cyan-300 block truncate">
                        {step.cmd}
                      </code>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={800}>
            <div className="mt-12 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <p className="text-slate-300">
                <strong className="text-blue-400">Depois disso:</strong> digite{" "}
                <code className="text-cyan-300 bg-slate-950 px-2 py-1 rounded font-mono">/babilonia</code> dentro do
                Claude Code para ver o menu completo.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 13 — CASOS DE USO
          ════════════════════════════════════════════════════ */}
      <section
        id="casos"
        className="snap-section relative min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <p className="text-sm font-mono text-blue-400 tracking-widest mb-6">
              12 · O QUE DÁ PRA FAZER
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-16 leading-[1]">
              Casos de uso reais.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Rocket, title: "Criar uma oferta", desc: "Grand Slam Offer do Hormozi do zero até a precificação" },
              { icon: FileCode, title: "Escrever sales letter", desc: "Copy de direct response com lendas do copywriting" },
              { icon: Target, title: "Auditar uma marca", desc: "Posicionamento, identidade, gaps e oportunidades" },
              { icon: Users, title: "Reunir o conselho", desc: "Deliberar uma decisão estratégica com 11 advisors" },
              { icon: Workflow, title: "Planejar lançamento", desc: "Pipeline completo de campanha de tráfego pago" },
              { icon: Boxes, title: "Montar estratégia", desc: "Usar C-suite virtual pra planejar próximos 90 dias" },
            ].map((uc, i) => (
              <FadeIn key={i} delay={300 + i * 80}>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/80 transition-all group cursor-default h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <uc.icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{uc.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{uc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SEÇÃO 14 — FINAL / CTA
          ════════════════════════════════════════════════════ */}
      <section
        id="final"
        className="snap-section relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/60 to-slate-950" />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `linear-gradient(#60A5FA 1px, transparent 1px), linear-gradient(90deg, #60A5FA 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/15 rounded-full blur-3xl pulse-slow" />

        <div className="relative z-10 max-w-4xl text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-mono mb-8">
              <CircleDot size={14} />
              VOCÊ CHEGOU AO FINAL
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.95]">
              Agora você entende.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Agora é construir.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Você não precisa mais de uma equipe gigante nem de uma agência cara.
              As maiores mentes do mundo estão a um comando de distância.
            </p>
          </FadeIn>
          <FadeIn delay={450}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/downloads"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-300 hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
              >
                Instalar agora
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/squads"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur"
              >
                Explorar squads
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={600}>
            <p className="mt-16 text-sm text-slate-600 font-mono">
              babilonia.aaltacupula.com · github.com/rafaelsin-code/babilonia-aios
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
