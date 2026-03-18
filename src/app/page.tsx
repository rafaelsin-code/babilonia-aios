"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getTotalStats, squads } from "@/data/squads";
import {
  Layers,
  Users,
  ListChecks,
  GitBranch,
  Brain,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Home() {
  const stats = getTotalStats();
  const featuredAgents = squads.flatMap(s => s.agents).filter(a => a.photo && !a.photo.includes("ui-avatars")).slice(0, 12);

  return (
    <div className="min-h-screen font-sans overflow-hidden">

      {/* ═══ HERO — Full width gradient with floating elements ═══ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

        {/* Floating agent avatars */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {featuredAgents.map((agent, i) => {
            const positions = [
              { top: '12%', left: '8%' }, { top: '20%', right: '12%' },
              { bottom: '25%', left: '5%' }, { bottom: '15%', right: '8%' },
              { top: '40%', left: '3%' }, { top: '35%', right: '5%' },
              { top: '8%', left: '25%' }, { bottom: '30%', right: '20%' },
              { top: '55%', left: '10%' }, { bottom: '8%', left: '20%' },
              { top: '15%', right: '25%' }, { bottom: '20%', right: '15%' },
            ];
            const pos = positions[i % positions.length];
            return (
              <div
                key={agent.id}
                className="absolute w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-lg opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-500"
                style={{
                  ...pos,
                  animation: `float${i % 3} ${6 + (i % 4)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                <img src={agent.photo} alt="" className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-200/50 text-blue-700 text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles size={14} />
            Plataforma de Agentes IA Especializados
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
            Babilonia
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> AIOS</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
            As maiores mentes do mundo, organizadas em squads inteligentes,
            trabalhando para voce.
          </p>

          <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
            <Link
              href="/squads"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explorar Squads
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-700 font-semibold text-base border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Ver Agentes
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ STATS — Animated counters with glassmorphism ═══ */}
      <section className="relative -mt-16 z-20 max-w-5xl mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-xl shadow-slate-200/40 p-2 grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { label: "Squads", value: stats.squads, icon: Layers, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Agentes", value: stats.agents, icon: Users, color: "text-indigo-600", bg: "bg-indigo-50" },
            { label: "Tasks", value: stats.tasks, icon: ListChecks, color: "text-emerald-600", bg: "bg-emerald-50" },
            { label: "Workflows", value: stats.workflows, icon: GitBranch, color: "text-violet-600", bg: "bg-violet-50" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl px-6 py-5 flex items-center gap-4 hover:bg-slate-50/80 transition-all duration-300 group">
              <div className={`w-11 h-11 rounded-xl ${stat.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={20} className={stat.color} />
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">
                  <AnimatedCounter target={stat.value} />
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WHAT IS IT — Left-aligned with accent bar ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">O que e</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              IA generica sabe um pouco de tudo.
              <span className="text-blue-600"> Nos sabemos tudo</span> de cada coisa.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Cada agente do Babilonia foi treinado com a metodologia, frameworks,
              personalidade e estilo de pensamento de um especialista real. Nao e um chatbot
              generico — e uma inteligencia calibrada para pensar como os melhores do mundo.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Quando voce ativa um workflow, multiplos especialistas trabalham em sequencia:
              o estrategista define o caminho, o copywriter escreve, o analista revisa.
              Como uma equipe de elite — sem salarios de 6 digitos.
            </p>
          </div>

          {/* Visual: stacked agent cards */}
          <div className="relative h-[400px] hidden lg:block">
            {[0, 1, 2].map((i) => {
              const agents = [
                { name: "Ray Dalio", role: "Principios & Ciclos", squad: "Advisory Board" },
                { name: "Gary Halbert", role: "Direct Mail Legend", squad: "Copy Squad" },
                { name: "Alex Hormozi", role: "Grand Slam Offers", squad: "Hormozi Squad" },
              ];
              return (
                <div
                  key={i}
                  className="absolute bg-white rounded-2xl border border-slate-200 shadow-lg p-6 w-[320px]"
                  style={{
                    top: `${i * 50 + 30}px`,
                    left: `${i * 30}px`,
                    zIndex: 3 - i,
                    transform: `rotate(${(i - 1) * 3}deg)`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                      {agents[i].name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{agents[i].name}</p>
                      <p className="text-xs text-blue-600">{agents[i].role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-slate-100 text-slate-500">
                      {agents[i].squad}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — Horizontal timeline style ═══ */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4 text-center">Como funciona</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Tres pilares. Um resultado.
          </h2>
          <p className="text-slate-400 text-center text-lg max-w-2xl mx-auto mb-16">
            Agentes especializados, orquestrados por workflows, executando tasks concretas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                num: "01",
                title: "Agentes Especializados",
                description: "Cada agente possui personalidade, metodologia e foco definidos. Nao sao chatbots genericos — sao especialistas com frameworks calibrados dos maiores nomes do mundo.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Zap,
                num: "02",
                title: "Workflows Inteligentes",
                description: "Pipelines conectam agentes em sequencias logicas. O output de um se torna o input do proximo. Estrategista → Copywriter → Revisor → Resultado final.",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                icon: Shield,
                num: "03",
                title: "Tasks Executaveis",
                description: "Acoes concretas com inputs e outputs definidos e criterios de qualidade. Criar oferta, auditar negocio, gerar hooks, montar lancamento — tudo com um comando.",
                color: "from-violet-500 to-violet-600",
              },
            ].map((pillar) => (
              <div key={pillar.num} className="group relative">
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8 h-full hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 tracking-wider">{pillar.num}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Pronto para ter as maiores
            <span className="text-blue-600"> mentes do mundo</span> no seu time?
          </h2>
          <p className="text-lg text-slate-500 mb-10">
            {stats.agents} agentes. {stats.squads} squads. Um clique.
          </p>
          <Link
            href="/squads"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1"
          >
            Comecar Agora
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ═══ Float animations ═══ */}
      <style jsx>{`
        @keyframes float0 { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(3deg); } }
        @keyframes float1 { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(-2deg); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-10px) rotate(2deg); } }
      `}</style>
    </div>
  );
}
