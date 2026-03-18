"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  ListChecks,
  GitBranch,
  Copy,
  Check,
  Clock,
  ArrowRight,
  Crown,
} from "lucide-react";
import { getSquadBySlug } from "@/data/squads";
import type { Agent, Task, Workflow } from "@/data/squads";

type Tab = "agentes" | "workflows" | "tarefas";

export default function SquadDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const squad = getSquadBySlug(slug);

  const [activeTab, setActiveTab] = useState<Tab>("agentes");
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  if (!squad) {
    notFound();
  }

  function handleCopy(command: string) {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  }

  const tabs: {
    key: Tab;
    label: string;
    count: number;
    icon: React.ReactNode;
  }[] = [
    {
      key: "agentes",
      label: "Agentes",
      count: squad.agents.length,
      icon: <Users size={16} />,
    },
    {
      key: "workflows",
      label: "Workflows",
      count: squad.workflows.length,
      icon: <GitBranch size={16} />,
    },
    {
      key: "tarefas",
      label: "Tarefas",
      count: squad.tasks.length,
      icon: <ListChecks size={16} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 max-w-7xl mx-auto">
      {/* Back link */}
      <Link
        href="/squads"
        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors mb-8 group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Voltar para squads
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex-1 min-w-0">
            {/* Name + Version */}
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-text-heading tracking-tight">
                {squad.name}
              </h1>
              <span className="bg-slate-100 text-slate-500 text-xs font-mono rounded px-2 py-0.5">
                {squad.version}
              </span>
            </div>

            {/* Description */}
            <p className="text-text-body text-sm leading-relaxed max-w-2xl mb-5">
              {squad.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {squad.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-50 text-blue-700 text-xs rounded-full px-2.5 py-0.5 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats cards */}
          <div className="flex gap-4 shrink-0">
            {[
              { label: "AGENTES", value: squad.agents.length },
              { label: "TAREFAS", value: squad.tasks.length },
              { label: "WORKFLOWS", value: squad.workflows.length },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center px-6 py-4 rounded-lg bg-white border border-slate-200 min-w-[110px] shadow-sm"
              >
                <span className="text-2xl font-bold text-blue-600">
                  {stat.value}
                </span>
                <span className="text-xs uppercase text-text-muted tracking-wider mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-slate-200 mb-8">
        <nav className="flex gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200
                border-b-2 -mb-[1px] cursor-pointer
                ${
                  activeTab === tab.key
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }
              `}
            >
              {tab.icon}
              {tab.label}
              <span
                className={`
                  ml-1 px-1.5 py-0.5 text-[10px] font-mono rounded-md
                  ${
                    activeTab === tab.key
                      ? "bg-blue-50 text-blue-600"
                      : "bg-slate-100 text-slate-500"
                  }
                `}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === "agentes" && (
          <AgentesTab agents={squad.agents} squadSlug={slug} />
        )}
        {activeTab === "workflows" && (
          <WorkflowsTab
            workflows={squad.workflows}
            onCopy={handleCopy}
            copiedCommand={copiedCommand}
          />
        )}
        {activeTab === "tarefas" && (
          <TarefasTab
            tasks={squad.tasks}
            onCopy={handleCopy}
            copiedCommand={copiedCommand}
          />
        )}
      </div>
    </div>
  );
}

/* ============================================================
   AGENTES TAB
   ============================================================ */

function AgentesTab({
  agents,
  squadSlug,
}: {
  agents: Agent[];
  squadSlug: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {agents.map((agent) => (
        <Link
          key={agent.id}
          href={`/agents/${squadSlug}/${agent.id}`}
          className="relative group rounded-xl bg-white border border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-slate-300 p-5 transition-all duration-200 cursor-pointer"
        >
          {/* Chief badge */}
          {agent.isChief && (
            <div className="absolute -top-2.5 right-4 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-semibold uppercase tracking-wider">
              <Crown size={10} />
              Chief
            </div>
          )}

          <div className="flex items-start gap-3.5 mb-3">
            {/* Avatar */}
            {agent.photo ? (
              <img
                src={agent.photo}
                alt={agent.name}
                className="w-[44px] h-[44px] rounded-full object-cover shrink-0"
              />
            ) : (
              <div
                className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{
                  backgroundColor: `${agent.color}1A`,
                  color: agent.color,
                }}
              >
                {agent.initials}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-text-heading truncate">
                {agent.name}
              </h3>
              <p className="text-xs text-text-muted truncate">@{agent.id}</p>
              <p className="text-sm text-text-body truncate mt-0.5">
                {agent.role}
              </p>
            </div>
          </div>

          <p className="text-xs text-text-muted leading-relaxed mb-3 line-clamp-2">
            {agent.description}
          </p>

          {/* Activation path */}
          <p className="font-mono text-[10px] text-text-muted mb-3 truncate">
            /{squadSlug}:agents:{agent.id}
          </p>

          {/* Frameworks */}
          <div className="flex flex-wrap gap-1.5">
            {agent.frameworks.map((fw) => (
              <span
                key={fw}
                className="bg-slate-100 text-slate-600 text-[10px] font-mono rounded px-1.5 py-0.5 truncate max-w-[140px]"
              >
                {fw}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ============================================================
   WORKFLOWS TAB
   ============================================================ */

function WorkflowsTab({
  workflows,
  onCopy,
  copiedCommand,
}: {
  workflows: Workflow[];
  onCopy: (cmd: string) => void;
  copiedCommand: string | null;
}) {
  return (
    <div className="flex flex-col gap-6">
      {workflows.map((wf) => (
        <div
          key={wf.id}
          className="rounded-xl bg-white border border-slate-200 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-200"
        >
          {/* Workflow header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
            <div className="flex items-center gap-3">
              <h3 className="text-base font-semibold text-text-heading">
                {wf.name}
              </h3>
              <button
                onClick={() => onCopy(wf.command)}
                className="flex items-center gap-1.5 font-mono text-blue-600 bg-blue-50 rounded px-2 py-1 text-xs hover:bg-blue-100 transition-colors cursor-pointer"
              >
                {wf.command}
                {copiedCommand === wf.command ? (
                  <Check size={12} className="text-emerald-500 ml-1" />
                ) : (
                  <Copy size={12} className="ml-1 opacity-50" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-text-muted bg-slate-50 rounded-full px-3 py-1">
              <Clock size={13} />
              {wf.duration}
            </div>
          </div>

          <p className="text-sm text-text-body leading-relaxed mb-6">
            {wf.description}
          </p>

          {/* Visual Pipeline */}
          <div className="flex items-stretch gap-0 overflow-x-auto pb-2">
            {wf.steps.map((step, i) => (
              <div key={i} className="flex items-center shrink-0">
                {/* Step node */}
                <div className="flex flex-col items-center gap-2 px-4 py-3.5 rounded-lg bg-white border border-slate-200 min-w-[160px] shadow-sm">
                  <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                    <span className="text-[10px] font-mono font-bold text-blue-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-text-heading text-center leading-tight">
                    {step.agent}
                  </span>
                  <span className="text-[10px] font-mono text-text-body">
                    {step.action}
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-slate-50 text-slate-600 border border-slate-200">
                    {step.output}
                  </span>
                </div>

                {/* Arrow connector */}
                {i < wf.steps.length - 1 && (
                  <div className="flex items-center px-1 text-blue-400">
                    <div className="w-6 h-px bg-blue-300" />
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   TAREFAS TAB
   ============================================================ */

function TarefasTab({
  tasks,
  onCopy,
  copiedCommand,
}: {
  tasks: Task[];
  onCopy: (cmd: string) => void;
  copiedCommand: string | null;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="rounded-xl bg-white border border-slate-200 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-200 group"
        >
          <h3 className="text-sm font-semibold text-text-heading mb-1">
            {task.name}
          </h3>
          <p className="font-mono text-xs text-text-muted mb-4">
            {task.filename}
          </p>

          <button
            onClick={() => onCopy(task.command)}
            className="w-full flex items-center justify-between font-mono text-blue-600 bg-blue-50 rounded px-3 py-2.5 text-xs hover:bg-blue-100 transition-colors cursor-pointer"
          >
            <span>{task.command}</span>
            {copiedCommand === task.command ? (
              <Check size={14} className="text-emerald-500" />
            ) : (
              <Copy
                size={14}
                className="opacity-0 group-hover:opacity-60 transition-opacity"
              />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
