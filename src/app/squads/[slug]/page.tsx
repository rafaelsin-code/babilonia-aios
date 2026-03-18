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
  Terminal,
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

  const tabs: { key: Tab; label: string; count: number; icon: React.ReactNode }[] = [
    { key: "agentes", label: "Agentes", count: squad.agents.length, icon: <Users size={16} /> },
    { key: "workflows", label: "Workflows", count: squad.workflows.length, icon: <GitBranch size={16} /> },
    { key: "tarefas", label: "Tarefas", count: squad.tasks.length, icon: <ListChecks size={16} /> },
  ];

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      {/* Back link */}
      <Link
        href="/squads"
        className="inline-flex items-center gap-2 text-sm text-gold-500 hover:text-gold-300 transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Voltar para squads
      </Link>

      {/* Header */}
      <header className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 animate-fade-in-up">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-3xl font-display font-bold text-gold-50 tracking-wide">
              {squad.name}
            </h1>
            <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-gold-300/10 text-gold-300 border border-gold-300/20">
              {squad.version}
            </span>
          </div>
          <p className="text-secondary text-sm leading-relaxed max-w-2xl mb-4">
            {squad.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {squad.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/[0.04] text-muted border border-white/[0.06] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats boxes */}
        <div className="flex gap-4 shrink-0">
          {[
            { label: "AGENTES", value: squad.agents.length, icon: <Users size={18} className="text-gold-300" /> },
            { label: "TAREFAS", value: squad.tasks.length, icon: <ListChecks size={18} className="text-gold-300" /> },
            { label: "WORKFLOWS", value: squad.workflows.length, icon: <GitBranch size={18} className="text-gold-300" /> },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-6 py-4 rounded-xl bg-surface border border-subtle min-w-[100px]"
            >
              <div className="flex items-center gap-2 mb-1">
                {stat.icon}
                <span className="text-2xl font-display font-bold text-gold-50">
                  {stat.value}
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted tracking-[0.2em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-subtle mb-8">
        <nav className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200
                border-b-2 -mb-[1px]
                ${
                  activeTab === tab.key
                    ? "border-gold-300 text-gold-50"
                    : "border-transparent text-muted hover:text-secondary"
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
                      ? "bg-gold-300/15 text-gold-300"
                      : "bg-white/[0.04] text-muted"
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
      <div className="animate-fade-in-up">
        {activeTab === "agentes" && <AgentesTab agents={squad.agents} />}
        {activeTab === "workflows" && <WorkflowsTab workflows={squad.workflows} onCopy={handleCopy} copiedCommand={copiedCommand} />}
        {activeTab === "tarefas" && <TarefasTab tasks={squad.tasks} onCopy={handleCopy} copiedCommand={copiedCommand} />}
      </div>
    </div>
  );
}

/* ============================================================
   AGENTES TAB
   ============================================================ */

function AgentesTab({ agents }: { agents: Agent[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {agents.map((agent, i) => (
        <div
          key={agent.id}
          className={`
            relative group rounded-xl p-5 transition-all duration-300
            bg-card hover:bg-card-hover border
            ${agent.isChief ? "border-gold-300/40 shadow-[0_0_20px_rgba(212,175,55,0.08)]" : "border-subtle hover:border-gold-300/15"}
          `}
          style={{ animationDelay: `${i * 50}ms` }}
        >
          {/* Chief badge */}
          {agent.isChief && (
            <div className="absolute -top-2.5 right-4 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-300/15 border border-gold-300/30">
              <Crown size={10} className="text-gold-300" />
              <span className="text-[9px] font-mono text-gold-300 uppercase tracking-wider font-medium">
                Chief
              </span>
            </div>
          )}

          <div className="flex items-start gap-3.5 mb-3">
            {/* Avatar */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ring-2 ring-offset-1 ring-offset-card"
              style={{
                backgroundColor: `${agent.color}18`,
                color: agent.color,
                outlineColor: `${agent.color}40`,
              }}
            >
              {agent.initials}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-gold-50 truncate">{agent.name}</h3>
              <p className="text-xs text-secondary truncate">{agent.role}</p>
            </div>
          </div>

          <p className="text-xs text-muted leading-relaxed mb-3 line-clamp-3">
            {agent.description}
          </p>

          {/* Frameworks */}
          <div className="flex flex-wrap gap-1.5">
            {agent.frameworks.map((fw) => (
              <span
                key={fw}
                className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.04] text-muted border border-white/[0.06] truncate max-w-[140px]"
              >
                {fw}
              </span>
            ))}
          </div>
        </div>
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
          className="rounded-xl bg-card border border-subtle p-6 hover:border-gold-300/15 transition-colors"
        >
          {/* Workflow header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
            <div className="flex items-center gap-3">
              <h3 className="text-base font-semibold text-gold-50">{wf.name}</h3>
              <button
                onClick={() => onCopy(wf.command)}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/[0.04] text-secondary border border-white/[0.06] hover:bg-white/[0.08] hover:text-gold-50 transition-colors"
              >
                <Terminal size={11} />
                {wf.command}
                {copiedCommand === wf.command ? (
                  <Check size={11} className="text-green-400 ml-1" />
                ) : (
                  <Copy size={11} className="ml-1 opacity-40" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <Clock size={13} />
              {wf.duration}
            </div>
          </div>

          <p className="text-xs text-secondary leading-relaxed mb-5">
            {wf.description}
          </p>

          {/* Visual Pipeline */}
          <div className="flex items-stretch gap-0 overflow-x-auto pb-2">
            {wf.steps.map((step, i) => (
              <div key={i} className="flex items-center shrink-0">
                {/* Step node */}
                <div className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-lg bg-surface border border-subtle min-w-[150px]">
                  <div className="w-8 h-8 rounded-full bg-gold-300/10 border border-gold-300/25 flex items-center justify-center">
                    <span className="text-[10px] font-mono font-bold text-gold-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-gold-50 text-center leading-tight">
                    {step.agent}
                  </span>
                  <span className="text-[10px] font-mono text-secondary">{step.action}</span>
                  <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-gold-300/8 text-gold-400 border border-gold-300/15">
                    {step.output}
                  </span>
                </div>

                {/* Arrow connector */}
                {i < wf.steps.length - 1 && (
                  <div className="flex items-center px-1 text-gold-500/40">
                    <div className="w-6 h-px bg-gold-500/20" />
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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="rounded-xl bg-card border border-subtle p-5 hover:border-gold-300/15 transition-colors group"
        >
          <h3 className="text-sm font-semibold text-gold-50 mb-1">{task.name}</h3>
          <p className="text-[11px] font-mono text-muted mb-3">{task.filename}</p>

          <button
            onClick={() => onCopy(task.command)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-surface border border-subtle hover:bg-card-hover hover:border-gold-300/20 transition-all"
          >
            <span className="flex items-center gap-2 text-xs font-mono text-secondary">
              <Terminal size={13} className="text-gold-500" />
              {task.command}
            </span>
            {copiedCommand === task.command ? (
              <Check size={14} className="text-green-400" />
            ) : (
              <Copy size={14} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>

          <p className="text-[10px] text-muted mt-2.5 leading-relaxed">
            Use <span className="font-mono text-secondary">{task.command}</span> apos ativar um agente.
          </p>
        </div>
      ))}
    </div>
  );
}
