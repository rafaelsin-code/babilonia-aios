#!/bin/bash
# Babilônia AIOS — banner colorido (sempre azul forte)

# Força true color — terminais modernos (iTerm2, Terminal.app, Warp, Ghostty,
# VSCode, Hyper, Alacritty, kitty, WezTerm) todos suportam 24-bit.
# Se seu terminal for muito antigo, exporte FORCE_BASIC_COLORS=1 antes de rodar.

if [[ -z "$FORCE_BASIC_COLORS" ]]; then
  # True color — azul vibrante da marca
  BLUE=$'\033[38;2;59;130;246m'       # #3B82F6 — azul forte mais visível
  DEEP=$'\033[38;2;37;99;235m'        # #2563EB — azul marca
  LIGHT=$'\033[38;2;96;165;250m'      # #60A5FA — azul claro
  CYAN=$'\033[38;2;34;211;238m'       # #22D3EE — ciano
  MUTED=$'\033[38;2;148;163;184m'     # #94A3B8 — cinza
else
  # Fallback 16 cores
  BLUE=$'\033[1;94m'
  DEEP=$'\033[1;34m'
  LIGHT=$'\033[1;96m'
  CYAN=$'\033[1;36m'
  MUTED=$'\033[0;37m'
fi
BOLD=$'\033[1m'
RESET=$'\033[0m'

printf '%s\n' ""
printf '%s%s%s\n' "$BLUE" "██████╗  █████╗ ██████╗ ██╗██╗      ██████╗ ███╗   ██╗██╗ █████╗" "$RESET"
printf '%s%s%s\n' "$BLUE" "██╔══██╗██╔══██╗██╔══██╗██║██║     ██╔═══██╗████╗  ██║██║██╔══██╗" "$RESET"
printf '%s%s%s\n' "$DEEP" "██████╔╝███████║██████╔╝██║██║     ██║   ██║██╔██╗ ██║██║███████║" "$RESET"
printf '%s%s%s\n' "$DEEP" "██╔══██╗██╔══██║██╔══██╗██║██║     ██║   ██║██║╚██╗██║██║██╔══██║" "$RESET"
printf '%s%s%s\n' "$LIGHT" "██████╔╝██║  ██║██████╔╝██║███████╗╚██████╔╝██║ ╚████║██║██║  ██║" "$RESET"
printf '%s%s%s\n' "$LIGHT" "╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝" "$RESET"
printf '                          %s%s%s\n' "$CYAN" "A  I  O  S" "$RESET"
printf '\n'
printf '   %s%s%s\n' "$BOLD" "As maiores mentes do mundo, organizadas em squads inteligentes." "$RESET"
printf '\n'
printf '   %s87%s agentes  ·  %s12%s squads  ·  %s7%s workflows  ·  %s36%s tasks\n' "$BLUE" "$RESET" "$BLUE" "$RESET" "$BLUE" "$RESET" "$BLUE" "$RESET"
printf '   %s─────────────────────────────────────────────────────────%s\n' "$MUTED" "$RESET"
printf '\n'
printf '   %sCOMANDOS RÁPIDOS:%s\n' "$BOLD" "$RESET"
printf '   %s/babilonia%s          menu completo\n' "$CYAN" "$RESET"
printf '   %s/advisory-board%s     Dalio, Munger, Naval, Thiel\n' "$CYAN" "$RESET"
printf '   %s/copy-squad%s         Halbert, Ogilvy, Schwartz\n' "$CYAN" "$RESET"
printf '   %s/hormozi-squad%s      Grand Slam Offers\n' "$CYAN" "$RESET"
printf '   %s/brand-squad%s        Aaker, Ries, Neumeier\n' "$CYAN" "$RESET"
printf '   %s/criar-oferta%s       executar task de oferta\n' "$CYAN" "$RESET"
printf '   %s/reunir-conselho%s    deliberação multi-agente\n' "$CYAN" "$RESET"
printf '\n'
printf '   Digite %s/%s para ver TODOS os comandos disponíveis.\n' "$CYAN" "$RESET"
printf '\n'
