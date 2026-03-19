<p align="center">
  <strong>Babilonia AIOS</strong>
</p>

<h3 align="center">As maiores mentes do mundo, organizadas em squads inteligentes, trabalhando para voce.</h3>

<p align="center">
  <a href="#instalacao">Instalacao</a> &bull;
  <a href="#o-que-e">O que e</a> &bull;
  <a href="#squads">Squads</a> &bull;
  <a href="#como-funciona">Como funciona</a> &bull;
  <a href="#contribuindo">Contribuindo</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/agentes-140-blue" alt="140 agentes" />
  <img src="https://img.shields.io/badge/squads-12-blue" alt="12 squads" />
  <img src="https://img.shields.io/badge/workflows-23-blue" alt="23 workflows" />
  <img src="https://img.shields.io/badge/tasks-100-blue" alt="100 tasks" />
  <img src="https://img.shields.io/badge/licenca-MIT-green" alt="MIT License" />
</p>

---

## O que e

**Babilonia AIOS** e uma plataforma open-source de agentes de inteligencia artificial organizados em **squads especializados**. Cada agente possui personalidade, frameworks e metodologias proprias — treinados nos conhecimentos das maiores mentes do mundo.

Diferente de chatbots genericos, cada agente e um **especialista profundo** na sua area. Quando um squad recebe uma missao, os agentes se coordenam por meio de **workflows inteligentes**, onde o output de um se torna o input do proximo.

## Instalacao

### Pre-requisitos

- **Node.js** 18 ou superior
- **Git**
- **Claude Code** (Anthropic CLI) — [instalar aqui](https://docs.anthropic.com/claude-code)

### Instalacao rapida

```bash
# Clone o repositorio
git clone https://github.com/rafaelsin-code/babilonia-aios.git

# Entre na pasta
cd babilonia-aios

# Instale as dependencias
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** no navegador.

### Instalacao em uma linha

```bash
git clone https://github.com/rafaelsin-code/babilonia-aios.git && cd babilonia-aios && npm install && npm run dev
```

## Squads

| Squad | Agentes | Descricao |
|-------|---------|-----------|
| **Advisory Board** | 11 | Conselheiros estrategicos — Ray Dalio, Charlie Munger, Naval Ravikant, Peter Thiel e mais |
| **Copy Squad** | 23 | Lendas do copywriting — Gary Halbert, Eugene Schwartz, David Ogilvy e mais 20 |
| **Hormozi Squad** | 16 | Frameworks de Alex Hormozi — Offers, Leads, Pricing, Scaling |
| **Brand Squad** | 15 | Estrategia de marca — David Aaker, Al Ries, Marty Neumeier e mais |
| **Traffic Masters** | 16 | Trafego pago — Molly Pittman, Tom Breeze, Kasim Aslam, Pedro Sobral e mais |
| **C-Level Squad** | 7 | C-suite virtual — CEO, COO, CMO, CTO, CIO, CAIO, CFO |
| **Design Squad** | 8 | Design operations — Brad Frost, Dan Mall, Dave Malouf e mais |
| **Data Squad** | 7 | Estrategistas data-driven — Avinash Kaushik, Sean Ellis, Peter Fader e mais |
| **Storytelling Squad** | 12 | Mestres da narrativa — Joseph Campbell, Robert McKee, Nancy Duarte e mais |
| **Cybersecurity Squad** | 15 | Ciberseguranca — Pentest, Red Team, Blue Team, AppSec, IR |
| **Movement Squad** | 7 | Construcao de movimentos — Fenomenologia, identidade, manifestos |
| **Product Squad** | 4 | Produto e crescimento — PM, SEO, CFO, AI Ethics |

## Como funciona

### 1. Agentes Especializados

Cada agente possui:
- **Personalidade** definida (tom, estilo, abordagem)
- **Frameworks** proprios (metodologias, modelos mentais)
- **Especialidade** profunda (area de dominio)
- **Biografia** baseada em especialistas reais

### 2. Workflows Inteligentes

Pipelines que conectam agentes em sequencia:

```
Estrategista -> Copywriter -> Revisor -> Resultado Final
```

Cada agente contribui com sua perspectiva unica, criando uma cadeia de valor onde o todo e maior que a soma das partes.

### 3. Tasks Executaveis

Acoes concretas com:
- Inputs e outputs definidos
- Criterios de qualidade
- Comandos de ativacao

## Stack Tecnologica

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilizacao:** Tailwind CSS
- **Icones:** Lucide React
- **Deploy:** Vercel (recomendado)

## Estrutura do Projeto

```
babilonia-aios/
├── squads/                          # CORE — Definicoes dos squads
│   ├── advisory-board/
│   │   ├── config.yaml              # Configuracao do squad
│   │   ├── agents/                  # Agentes (system prompts completos)
│   │   │   ├── board-chair.md
│   │   │   ├── ray-dalio.md
│   │   │   ├── charlie-munger.md
│   │   │   └── ...
│   │   ├── tasks/                   # Tasks executaveis
│   │   │   ├── convene-board.md
│   │   │   └── ...
│   │   └── workflows/               # Workflows orquestrados
│   │       ├── wf-board-meeting.yaml
│   │       └── ...
│   ├── copy-squad/                  # 23 copywriters lendarios
│   ├── hormozi-squad/               # Frameworks Alex Hormozi
│   ├── brand-squad/                 # Estrategia de marca
│   ├── traffic-masters/             # Trafego pago
│   ├── c-level-squad/               # C-suite virtual
│   ├── design-squad/                # Design operations
│   ├── data-squad/                  # Growth e analytics
│   ├── storytelling-squad/          # Narrativa e pitching
│   ├── cybersecurity-squad/         # Seguranca ofensiva e defensiva
│   ├── movement-squad/              # Construcao de movimentos
│   └── product-squad/               # Produto, SEO, financas
│
├── src/                             # WEBAPP — Interface visual
│   ├── app/                         # Paginas (Next.js App Router)
│   ├── components/                  # Componentes reutilizaveis
│   └── data/                        # Dados compilados dos squads
│
├── tailwind.config.ts
├── next.config.mjs
├── package.json
├── LICENSE
└── README.md
```

### Usando os agentes diretamente

Cada arquivo `.md` em `squads/*/agents/` e um **system prompt completo** pronto para usar com qualquer LLM (Claude, GPT, etc.). Basta copiar o conteudo e colar como system prompt.

Cada arquivo `.md` em `squads/*/tasks/` define uma **task executavel** com inputs, steps e outputs esperados.

Cada `.yaml` em `squads/*/workflows/` define um **pipeline multi-agente** com fases, dependencias e criterios de conclusao.

## Deploy

### Vercel (recomendado)

1. Faca um fork deste repositorio
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositorio
4. Clique em "Deploy"

### Build manual

```bash
npm run build
npm start
```

## Contribuindo

Contribuicoes sao bem-vindas! Para contribuir:

1. Faca um fork do repositorio
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudancas (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Adicionando um novo agente

Edite `src/data/squads.ts` e adicione o agente ao squad correspondente seguindo a interface `Agent`:

```typescript
{
  id: "nome-do-agente",
  name: "Nome do Agente",
  role: "Role do Agente",
  specialty: "Especialidade",
  description: "Descricao curta",
  bio: "Biografia completa com 4-6 frases...",
  frameworks: ["Framework 1", "Framework 2"],
  personality: "Tracos de personalidade",
  color: "#HEX",
  initials: "NA",
  photo: "URL da foto",
}
```

## Licenca

Este projeto esta licenciado sob a [MIT License](LICENSE).

---

<p align="center">
  Feito por <a href="https://github.com/rafaelsin-code">Rafael Pinheiro</a>
</p>
