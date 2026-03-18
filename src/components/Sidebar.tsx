"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Users, Download } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Squads", href: "/squads", icon: Layers },
  { label: "Agentes", href: "/agents", icon: Users },
  { label: "Downloads", href: "/downloads", icon: Download },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-deep border-r border-subtle flex flex-col z-50">
      {/* Logo */}
      <div className="px-5 py-6 flex items-center gap-3">
        <div className="w-10 h-10 rotate-45 bg-gold-300/10 border border-gold-300/40 flex items-center justify-center">
          <span className="text-gold-300 font-display font-bold text-lg -rotate-45">
            B
          </span>
        </div>
        <div>
          <h1 className="text-sm font-display font-semibold text-gold-50 tracking-wide leading-tight">
            Babilonia AIOS
          </h1>
          <p className="text-[10px] text-gold-500 tracking-widest uppercase leading-tight mt-0.5">
            As maiores mentes para voce
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-subtle" />

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
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                transition-all duration-200 group
                ${
                  isActive
                    ? "bg-gold-300/10 text-gold-50 border border-gold-300/20"
                    : "text-secondary hover:text-primary hover:bg-white/[0.03] border border-transparent"
                }
              `}
            >
              <Icon
                size={18}
                className={`transition-colors ${
                  isActive
                    ? "text-gold-300"
                    : "text-muted group-hover:text-secondary"
                }`}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-subtle">
        <p className="text-[10px] text-muted text-center tracking-wide">
          Babilonia AIOS by Rafael Pinheiro
        </p>
      </div>
    </aside>
  );
}
