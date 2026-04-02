"use client";

import Image from "next/image";
import Link from "next/link";
import { squads } from "@/data/squads";

const totalAgents = squads.reduce((acc, s) => acc + s.agents.length, 0);
const totalSquads = squads.length;

export default function AgentsPage() {
  return (
    <>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div
        className="min-h-screen bg-white p-8 md:p-12"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">
            Todos os Agentes
          </h1>
          <p className="text-slate-400 mt-2 text-sm">
            {totalAgents} agentes distribuidos em {totalSquads} squads
          </p>
        </div>

        {/* Carousel sections per squad */}
        <div className="space-y-10">
          {squads.map((squad) => (
            <section key={squad.slug}>
              {/* Squad header */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="flex items-center gap-3 pl-4"
                  style={{ borderLeft: `4px solid ${squad.accent}` }}
                >
                  <h2 className="text-lg font-semibold text-slate-900">
                    {squad.name}
                  </h2>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium"
                    style={{
                      backgroundColor: `${squad.accent}15`,
                      color: squad.accent,
                      border: `1px solid ${squad.accent}30`,
                    }}
                  >
                    {squad.agents.length} agentes
                  </span>
                </div>
                <Link
                  href={`/squads/${squad.slug}`}
                  className="text-sm text-slate-400 hover:text-slate-600 transition-colors shrink-0"
                >
                  Ver todos &rarr;
                </Link>
              </div>

              {/* Horizontal scroll carousel */}
              <div
                className="hide-scrollbar flex overflow-x-auto gap-4 pb-2 snap-x snap-mandatory"
                style={{ scrollBehavior: "smooth" }}
              >
                {squad.agents.map((agent) => {
                  const fallbackPhoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(agent.name)}&background=${agent.color.slice(1)}&color=fff&size=200&bold=true&format=png`;

                  return (
                    <Link
                      key={agent.id}
                      href={`/agents/${squad.slug}/${agent.id}`}
                      className="group snap-start flex-shrink-0 w-[180px] bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center"
                    >
                      {/* Photo */}
                      <Image
                        src={agent.photo || fallbackPhoto}
                        alt={agent.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-xl object-cover mb-3"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = fallbackPhoto;
                        }}
                      />

                      {/* Name */}
                      <h3 className="font-semibold text-sm text-slate-900 leading-tight">
                        {agent.name}
                      </h3>

                      {/* Handle */}
                      <p className="text-xs text-slate-400 mt-0.5">
                        @{agent.id}
                      </p>

                      {/* Role */}
                      <p className="text-xs text-blue-600 mt-1 line-clamp-1">
                        {agent.role}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
