"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Users, Download, BookOpen } from "lucide-react";

const navItems = [
  { label: "Início", href: "/", icon: Home },
  { label: "Squads", href: "/squads", icon: Layers },
  { label: "Agentes", href: "/agents", icon: Users },
  { label: "Aula", href: "/aula", icon: BookOpen },
  { label: "Downloads", href: "/downloads", icon: Download },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 w-[240px] h-screen bg-[#0F172A] border-r border-[#1E293B] flex flex-col overflow-y-auto z-50">
      {/* Logo */}
      <div className="px-5 py-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-semibold text-sm">B</span>
        </div>
        <div>
          <h1 className="text-sm font-semibold text-white leading-tight">
            Babilônia AIOS
          </h1>
          <p className="text-[10px] text-slate-400 tracking-wider uppercase leading-tight mt-0.5">
            As maiores mentes para voce
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
                ${
                  isActive
                    ? "bg-blue-600/20 text-blue-400 font-medium"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }
              `}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}

        {/* Stats */}
        <div className="mt-6 px-3">
          <p className="text-xs text-slate-500">12 squads · 87 agentes</p>
        </div>
      </nav>

      {/* Footer */}
      <div className="mt-auto px-5 py-4">
        <p className="text-[11px] text-slate-600">
          Babilônia AIOS by Rafael Pinheiro
        </p>
      </div>
    </aside>
  );
}
