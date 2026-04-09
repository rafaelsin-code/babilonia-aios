<div align="center">

# 🏛️ Babilônia AIOS

### As maiores mentes do mundo, organizadas em squads inteligentes.

**Framework open-source de agentes IA especializados para Claude Code.**
Construído para quem leva resultado a sério.

[![CI](https://github.com/rafaelsin-code/babilonia-aios/actions/workflows/ci.yml/badge.svg)](https://github.com/rafaelsin-code/babilonia-aios/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

![Agentes](https://img.shields.io/badge/agentes-87-2563EB?style=for-the-badge)
![Squads](https://img.shields.io/badge/squads-12-2563EB?style=for-the-badge)
![Workflows](https://img.shields.io/badge/workflows-7-2563EB?style=for-the-badge)
![Tasks](https://img.shields.io/badge/tasks-36-2563EB?style=for-the-badge)

[**📺 Aula completa**](https://babilonia.aaltacupula.com/aula) ·
[**🌐 Site oficial**](https://babilonia.aaltacupula.com) ·
[**📥 Instalação**](#-instalação) ·
[**🤝 Contribuir**](CONTRIBUTING.md)

</div>

---

## 📖 Sobre

**Babilônia AIOS** é um framework open-source de agentes de IA organizados em **squads especializados**, feito para rodar nativamente dentro do [Claude Code](https://docs.anthropic.com/claude-code).

Diferente de prompts genéricos ou chatbots rasos, cada agente é um **especialista profundo** com personalidade, frameworks e metodologias próprias — calibrado com base em especialistas reais como Ray Dalio, Gary Halbert, Alex Hormozi, David Aaker, Joseph Campbell e outros.

Quando um squad recebe uma missão, os agentes se coordenam via **workflows** (pipelines onde o output de um vira o input do próximo), criando uma cadeia de valor profissional em vez de respostas isoladas.

## ✨ O que vem dentro

- 🧠 **87 agentes especializados** com system prompts completos (.md)
- 👥 **12 squads temáticos** (Advisory Board, Copy, Hormozi, Brand, Traffic, C-Level, Design, Data, Storytelling, Cybersecurity, Movement, Product)
- ⚡ **7 workflows multi-agente** (.yaml) com fases, dependências e critérios de conclusão
- 🎯 **36 tasks executáveis** com inputs, steps e outputs definidos
- 💬 **17 slash commands** nativos para Claude Code (`/babilonia`, `/advisory-board`, `/criar-oferta`, etc.)
- 🌐 **Site Next.js** completo com documentação interativa e aula visual
- 📚 **CLAUDE.md** com instruções de uso do framework

## 🚀 Instalação

### Pré-requisitos

- **Node.js** 20.9 ou superior
- **Git**
- **[Claude Code](https://docs.anthropic.com/claude-code)** (Anthropic CLI) — obrigatório para usar os slash commands

### Em 4 comandos

```bash
# 1. Clone o repositório
git clone https://github.com/rafaelsin-code/babilonia-aios.git

# 2. Entre na pasta
cd babilonia-aios

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
npm run dev
```

Acesse **http://localhost:3000** no navegador.

### Em uma linha

```bash
git clone https://github.com/rafaelsin-code/babilonia-aios.git && cd babilonia-aios && npm install && npm run dev
```

## 💬 Usando no Claude Code

Depois de clonar, abra o projeto no Claude Code:

```bash
cd babilonia-aios
claude
```

Então use qualquer slash command:

| Comando | O que faz |
|---------|-----------|
| `/babilonia` | Menu completo com todos os squads |
| `/advisory-board` | Conselho com Ray Dalio, Munger, Naval, Thiel |
| `/copy-squad` | Lendas do copywriting (Halbert, Ogilvy, Schwartz) |
| `/hormozi-squad` | Frameworks Hormozi (Offers, Leads, Scaling) |
| `/brand-squad` | Estratégia de marca (Aaker, Ries, Neumeier) |
| `/criar-oferta` | Executa uma Grand Slam Offer do zero |
| `/escrever-copy` | Escreve uma sales letter completa |
| `/reunir-conselho` | Deliberação estratégica multi-agente |

Veja o [menu completo](.claude/commands/) com os 17 slash commands disponíveis.

## 🧠 Como funciona

### Agentes

Cada agente é o Claude **vestido com uma persona específica**. Mesma IA, mas com:
- **Personalidade** definida (tom, estilo, abordagem)
- **Frameworks** próprios (metodologias calibradas)
- **Especialidade** profunda (área de domínio)
- **Biografia** baseada em especialistas reais

### Squads

Um **squad** é um time de agentes que trabalham juntos, coordenados por um *chief*. Ex: o Advisory Board tem Ray Dalio, Charlie Munger, Naval Ravikant e outros 8 conselheiros.

### Workflows

Pipelines sequenciais onde o output de um agente vira o input do próximo:

```
Strategist → Headline Writer → Lead Writer → Body Writer → Reviewer
```

Como uma linha de montagem onde cada agente contribui com sua perspectiva única.

### Tasks

Ações executáveis com inputs e outputs definidos. Você digita um comando e a task executa os passos em ordem.

## 👥 Squads disponíveis

| Squad | Agentes | Descrição |
|-------|---------|-----------|
| 🎯 **Advisory Board** | 11 | Ray Dalio, Charlie Munger, Naval Ravikant, Peter Thiel e mais |
| ✍️ **Copy Squad** | 10 | Gary Halbert, Eugene Schwartz, David Ogilvy e mais |
| 💰 **Hormozi Squad** | 8 | Frameworks de Alex Hormozi (Offers, Leads, Pricing, Scaling) |
| 🏷️ **Brand Squad** | 9 | David Aaker, Al Ries, Marty Neumeier e mais |
| 🚀 **Traffic Masters** | 7 | Molly Pittman, Tom Breeze, Kasim Aslam, Pedro Sobral |
| 👔 **C-Level Squad** | 7 | CEO, COO, CMO, CTO, CIO, CAIO, CFO virtuais |
| 🎨 **Design Squad** | 6 | Brad Frost, Dan Mall, Dave Malouf e mais |
| 📊 **Data Squad** | 7 | Avinash Kaushik, Sean Ellis, Peter Fader e mais |
| 📖 **Storytelling** | 7 | Joseph Campbell, Robert McKee, Nancy Duarte e mais |
| 🔒 **Cybersecurity** | 6 | Pentest, Red Team, Blue Team, AppSec, IR |
| ✊ **Movement Squad** | 5 | Fenomenologia, identidade, manifestos |
| 📦 **Product Squad** | 4 | PM, SEO, CFO, AI Ethics |

## 🛠️ Stack Tecnológica

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Linguagem:** [TypeScript 5](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com)
- **Ícones:** [Lucide React](https://lucide.dev)
- **Deploy:** [Vercel](https://vercel.com) (recomendado)

## 📁 Estrutura do Projeto

```
babilonia-aios/
├── squads/                          # CORE — Definições dos squads
│   ├── advisory-board/
│   │   ├── config.yaml              # Configuração do squad
│   │   ├── agents/                  # System prompts completos
│   │   ├── tasks/                   # Tasks executáveis
│   │   └── workflows/               # Workflows orquestrados (.yaml)
│   └── ... (11 outros squads)
│
├── src/                             # WEBAPP — Interface visual
│   ├── app/                         # Páginas Next.js (App Router)
│   │   ├── page.tsx                 # Home
│   │   ├── squads/                  # Lista e detalhes dos squads
│   │   ├── agents/                  # Lista e detalhes dos agentes
│   │   ├── aula/                    # Apresentação interativa
│   │   └── downloads/               # Página de instalação
│   ├── components/
│   └── data/
│
├── .claude/                         # Configuração do Claude Code
│   ├── commands/                    # 17 slash commands
│   └── settings.json                # Statusline customizada
│
├── .github/                         # GitHub config
│   ├── workflows/ci.yml             # CI/CD pipeline
│   ├── ISSUE_TEMPLATE/              # Templates de issues
│   └── PULL_REQUEST_TEMPLATE.md
│
├── CLAUDE.md                        # Instruções do framework
├── CONTRIBUTING.md                  # Guia de contribuição
├── CODE_OF_CONDUCT.md               # Código de conduta
├── SECURITY.md                      # Política de segurança
├── CHANGELOG.md                     # Histórico de versões
└── LICENSE                          # MIT License
```

## 🚢 Deploy

### Vercel (recomendado)

1. Faça um fork deste repositório
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Clique em **Deploy** — pronto

### Build manual

```bash
npm run build
npm start
```

## 🤝 Contribuindo

Contribuições são extremamente bem-vindas! Veja o [**guia completo de contribuição**](CONTRIBUTING.md) antes de abrir um PR.

Tipos de contribuição aceitos:
- 🐛 Bug reports e correções
- ✨ Novos agentes, squads, workflows ou tasks
- 📝 Melhorias na documentação
- 🎨 Melhorias na UI do site
- 🔒 Correções de segurança

Ao participar, você concorda com o [Código de Conduta](CODE_OF_CONDUCT.md).

## 🔒 Segurança

Encontrou uma vulnerabilidade? **Não abra uma issue pública.** Veja [SECURITY.md](SECURITY.md) para reportar de forma privada.

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE) — você pode usar, modificar, distribuir e até vender, desde que mantenha o aviso de copyright.

## ⭐ Apoie o projeto

Se o Babilônia AIOS te ajudou, **deixe uma estrela** no repositório. Isso ajuda outros devs a encontrarem o projeto.

---

<div align="center">

**Feito com ☕ e 🧠 por [Rafael Pinheiro](https://github.com/rafaelsin-code)**

[Site](https://babilonia.aaltacupula.com) ·
[Aula](https://babilonia.aaltacupula.com/aula) ·
[Instagram](https://instagram.com/rafaelpinheiro) ·
[Report Bug](https://github.com/rafaelsin-code/babilonia-aios/issues/new?template=bug_report.yml) ·
[Request Feature](https://github.com/rafaelsin-code/babilonia-aios/issues/new?template=feature_request.yml)

</div>
