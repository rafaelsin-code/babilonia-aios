#!/bin/bash
# Babilônia AIOS — banner colorido

# Detecta suporte a true color (24-bit)
if [[ "$COLORTERM" == "truecolor" || "$COLORTERM" == "24bit" ]]; then
  BLUE=$'\033[38;2;37;99;235m'      # #2563EB — azul da marca
  LIGHT=$'\033[38;2;96;165;250m'    # #60A5FA — azul claro
  CYAN=$'\033[38;2;34;211;238m'     # #22D3EE — ciano
  MUTED=$'\033[38;2;148;163;184m'   # #94A3B8 — cinza claro
else
  BLUE=$'\033[1;34m'
  LIGHT=$'\033[1;94m'
  CYAN=$'\033[1;36m'
  MUTED=$'\033[0;37m'
fi
BOLD=$'\033[1m'
RESET=$'\033[0m'

cat <<EOF

${BLUE}██████╗  █████╗ ██████╗ ██╗██╗      ██████╗ ███╗   ██╗██╗ █████╗${RESET}
${BLUE}██╔══██╗██╔══██╗██╔══██╗██║██║     ██╔═══██╗████╗  ██║██║██╔══██╗${RESET}
${BLUE}██████╔╝███████║██████╔╝██║██║     ██║   ██║██╔██╗ ██║██║███████║${RESET}
${LIGHT}██╔══██╗██╔══██║██╔══██╗██║██║     ██║   ██║██║╚██╗██║██║██╔══██║${RESET}
${LIGHT}██████╔╝██║  ██║██████╔╝██║███████╗╚██████╔╝██║ ╚████║██║██║  ██║${RESET}
${LIGHT}╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝${RESET}
                          ${CYAN}A  I  O  S${RESET}

   ${BOLD}As maiores mentes do mundo, organizadas em squads inteligentes.${RESET}

   ${BLUE}87${RESET} agentes  ·  ${BLUE}12${RESET} squads  ·  ${BLUE}7${RESET} workflows  ·  ${BLUE}36${RESET} tasks
   ${MUTED}─────────────────────────────────────────────────────────${RESET}

   ${BOLD}COMANDOS RÁPIDOS:${RESET}
   ${CYAN}/babilonia${RESET}          menu completo
   ${CYAN}/advisory-board${RESET}     Dalio, Munger, Naval, Thiel
   ${CYAN}/copy-squad${RESET}         Halbert, Ogilvy, Schwartz
   ${CYAN}/hormozi-squad${RESET}      Grand Slam Offers
   ${CYAN}/brand-squad${RESET}        Aaker, Ries, Neumeier
   ${CYAN}/criar-oferta${RESET}       executar task de oferta
   ${CYAN}/reunir-conselho${RESET}    deliberação multi-agente

   Digite ${CYAN}/${RESET} para ver TODOS os comandos disponíveis.
   Digite ${CYAN}/babilonia${RESET} para o menu interativo.

EOF
