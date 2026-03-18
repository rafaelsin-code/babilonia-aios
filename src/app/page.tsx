import { getTotalStats } from "@/data/squads";
import {
  Sparkles,
  Users,
  Workflow,
  ListChecks,
  Brain,
  Target,
} from "lucide-react";

export default function Home() {
  const stats = getTotalStats();

  return (
    <div className="min-h-screen px-10 py-12">
      {/* ── Hero ── */}
      <section className="animate-fade-in-up max-w-3xl">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={16} className="text-gold-300" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-400">
            Plataforma de Agentes Autonomos
          </span>
        </div>

        <h1 className="font-display text-5xl font-bold text-gold-50 leading-tight">
          Babilonia AIOS
        </h1>
        <p className="font-display text-xl text-gold-200/60 mt-2 mb-8">
          As maiores mentes para voce
        </p>

        <p className="text-secondary text-[15px] leading-relaxed max-w-2xl">
          Uma plataforma onde agentes de IA especializados trabalham em squads
          coordenados para resolver problemas complexos. Cada agente possui
          personalidade, frameworks e especialidades unicas — combinados, eles
          formam uma forca intelectual sem precedentes.
        </p>
      </section>

      {/* ── Stats Bar ── */}
      <section className="animate-fade-in-up delay-100 mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
        {[
          {
            label: "Squads",
            value: stats.squads,
            icon: Users,
            color: "text-gold-300",
          },
          {
            label: "Agentes",
            value: stats.agents,
            icon: Brain,
            color: "text-gold-200",
          },
          {
            label: "Tasks",
            value: stats.tasks,
            icon: ListChecks,
            color: "text-gold-200",
          },
          {
            label: "Workflows",
            value: stats.workflows,
            icon: Workflow,
            color: "text-gold-200",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-subtle rounded-xl px-5 py-4 flex items-center gap-4 group hover:border-gold-dim transition-all duration-300"
          >
            <stat.icon
              size={20}
              className={`${stat.color} opacity-70 group-hover:opacity-100 transition-opacity`}
            />
            <div>
              <p className="text-2xl font-display font-bold text-gold-50">
                {stat.value}
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Divider ── */}
      <div className="my-14 border-t border-subtle max-w-3xl" />

      {/* ── O que e Babilonia AIOS? ── */}
      <section className="animate-fade-in-up delay-200 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold text-gold-50 mb-4">
          O que e Babilonia AIOS?
        </h2>
        <div className="space-y-4 text-secondary text-[15px] leading-relaxed">
          <p>
            Babilonia AIOS e uma plataforma de agentes de inteligencia artificial
            organizados em <strong className="text-gold-100">squads especializados</strong>.
            Cada squad reune agentes com habilidades complementares — estrategistas,
            desenvolvedores, designers, analistas, marketeiros — que colaboram para
            executar tarefas complexas de ponta a ponta.
          </p>
          <p>
            Diferente de um chatbot generico, cada agente possui{" "}
            <strong className="text-gold-100">personalidade definida</strong>,{" "}
            <strong className="text-gold-100">frameworks proprios</strong> e{" "}
            <strong className="text-gold-100">area de especialidade</strong>.
            Quando um squad recebe uma missao, os agentes se coordenam por meio de
            workflows inteligentes — cada um contribuindo com sua perspectiva unica
            para um resultado superior.
          </p>
        </div>
      </section>

      {/* ── Por que criamos isso? ── */}
      <section className="animate-fade-in-up delay-300 mt-14 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold text-gold-50 mb-4">
          Por que criamos isso?
        </h2>
        <div className="space-y-4 text-secondary text-[15px] leading-relaxed">
          <p>
            A maioria das ferramentas de IA oferece uma unica perspectiva generica.
            Mas problemas reais exigem{" "}
            <strong className="text-gold-100">multiplas perspectivas</strong>,{" "}
            <strong className="text-gold-100">especializacao profunda</strong> e{" "}
            <strong className="text-gold-100">execucao coordenada</strong>.
          </p>
          <p>
            Babilonia AIOS nasceu da crenca de que a IA pode ser mais do que um
            assistente — pode ser uma{" "}
            <strong className="text-gold-100">equipe inteira</strong> de mentes
            brilhantes trabalhando juntas. Conselheiros estrategicos que pensam como
            Ray Dalio e Charlie Munger. Desenvolvedores que seguem os principios de
            engenharia da Netflix e do Google. Designers que criam na qualidade da
            Apple e do Stripe.
          </p>
          <p>
            O resultado: voce ganha acesso a um exercito de especialistas que
            trabalham 24/7, sem ego, sem politica — apenas resultados.
          </p>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section className="animate-fade-in-up delay-400 mt-14 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold text-gold-50 mb-6">
          Como funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: Brain,
              title: "Agentes Especializados",
              description:
                "Cada agente possui role, personalidade, frameworks e especialidade unica. Eles nao sao genericos — sao especialistas profundos em suas areas.",
            },
            {
              icon: Workflow,
              title: "Workflows Inteligentes",
              description:
                "Workflows orquestram multiplos agentes em sequencia. Cada passo alimenta o proximo, criando uma cadeia de valor onde o output de um agente se torna o input do seguinte.",
            },
            {
              icon: Target,
              title: "Tasks Executaveis",
              description:
                "Tasks sao acoes atomicas que voce dispara com um comando. Cada task ativa o agente certo com o contexto certo para entregar um resultado objetivo e acionavel.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card border border-subtle rounded-xl p-6 hover:border-gold-dim transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-300/10 border border-gold-300/20 flex items-center justify-center mb-4">
                <pillar.icon
                  size={20}
                  className="text-gold-300 opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-gold-50 mb-2">
                {pillar.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom spacer ── */}
      <div className="h-20" />
    </div>
  );
}
