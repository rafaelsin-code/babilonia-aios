import { getTotalStats } from "@/data/squads";
import {
  Layers,
  Users,
  ListChecks,
  GitBranch,
  Brain,
} from "lucide-react";

export default function Home() {
  const stats = getTotalStats();

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 md:px-10 py-12 font-sans">
      {/* ── Hero ── */}
      <section className="animate-fade-in-up max-w-4xl mx-auto text-center pt-16 pb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-text-heading tracking-tight">
          Babilonia AIOS
        </h1>
        <p className="text-xl md:text-2xl text-text-body mt-4 font-light">
          As maiores mentes trabalhando para voce
        </p>
      </section>

      {/* ── Stats Row ── */}
      <section className="animate-fade-in-up delay-100 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          {
            label: "Squads",
            value: stats.squads,
            icon: Layers,
          },
          {
            label: "Agentes",
            value: stats.agents,
            icon: Users,
          },
          {
            label: "Tasks",
            value: stats.tasks,
            icon: ListChecks,
          },
          {
            label: "Workflows",
            value: stats.workflows,
            icon: GitBranch,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-border-default rounded-xl shadow-card px-6 py-5 flex items-center gap-4 hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <stat.icon size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-text-heading">
                {stat.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ── O que e ── */}
      <section className="animate-fade-in-up delay-200 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-text-heading mb-6 text-center">
          O que e Babilonia AIOS?
        </h2>
        <div className="space-y-4 text-text-body text-base leading-relaxed text-center">
          <p>
            Uma plataforma de agentes de inteligencia artificial organizados em{" "}
            <strong className="text-text-heading font-semibold">squads especializados</strong>.
            Cada squad reune agentes com habilidades complementares — estrategistas,
            desenvolvedores, designers, analistas, marketeiros — que colaboram para
            executar tarefas complexas de ponta a ponta.
          </p>
          <p>
            Diferente de um chatbot generico, cada agente possui{" "}
            <strong className="text-text-heading font-semibold">personalidade definida</strong>,{" "}
            <strong className="text-text-heading font-semibold">frameworks proprios</strong> e{" "}
            <strong className="text-text-heading font-semibold">area de especialidade</strong>.
            Quando um squad recebe uma missao, os agentes se coordenam por meio de
            workflows inteligentes — cada um contribuindo com sua perspectiva unica
            para um resultado superior.
          </p>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section className="animate-fade-in-up delay-300 max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-text-heading mb-8 text-center">
          Como funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "Agentes Especializados",
              description:
                "Cada agente possui role, personalidade, frameworks e especialidade unica. Eles nao sao genericos — sao especialistas profundos em suas areas.",
            },
            {
              icon: GitBranch,
              title: "Workflows Inteligentes",
              description:
                "Workflows orquestram multiplos agentes em sequencia. Cada passo alimenta o proximo, criando uma cadeia de valor onde o output de um agente se torna o input do seguinte.",
            },
            {
              icon: ListChecks,
              title: "Tasks Executaveis",
              description:
                "Tasks sao acoes atomicas que voce dispara com um comando. Cada task ativa o agente certo com o contexto certo para entregar um resultado objetivo e acionavel.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white border border-border-default rounded-xl shadow-card p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <pillar.icon
                  size={24}
                  className="text-blue-600 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-lg font-semibold text-text-heading mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
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
