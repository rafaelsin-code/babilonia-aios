<p align="center">
  <strong>Babilônia AIOS</strong>
</p>

<h3 align="center">As maiores mentes do mundo, organizadas em squads inteligentes, trabalhando para você.</h3>

<p align="center">
  <a href="#instalacao">Instalação</a> &bull;
  <a href="#o-que-e">O que é</a> &bull;
  <a href="#squads">Squads</a> &bull;
  <a href="#como-funciona">Como funciona</a> &bull;
  <a href="#contribuindo">Contribuindo</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/agentes-87-blue" alt="87 agentes" />
  <img src="https://img.shields.io/badge/squads-12-blue" alt="12 squads" />
  <img src="https://img.shields.io/badge/workflows-7-blue" alt="7 workflows" />
  <img src="https://img.shields.io/badge/tasks-36-blue" alt="36 tasks" />
  <img src="https://img.shields.io/badge/licença-MIT-green" alt="MIT License" />
</p>

---

## O que é

**Babilônia AIOS** é uma plataforma open-source de agentes de inteligência artificial organizados em **squads especializados**. Cada agente possui personalidade, frameworks e metodologias próprias — treinados nos conhecimentos das maiores mentes do mundo.

Diferente de chatbots genéricos, cada agente é um **especialista profundo** na sua área. Quando um squad recebe uma missão, os agentes se coordenam por meio de **workflows inteligentes**, onde o output de um se torna o input do próximo.

## Instalação

### Pré-requisitos

- **Node.js** 20.9 ou superior
- **Git**
- **Claude Code** (Anthropic CLI) — [instalar aqui](https://docs.anthropic.com/claude-code)

### Instalação rápida

```bash
# Clone o repositório
git clone https://github.com/rafaelsin-code/babilonia-aios.git

# Entre na pasta
cd babilonia-aios

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** no navegador.

### Instalação em uma linha

```bash
git clone https://github.com/rafaelsin-code/babilonia-aios.git && cd babilonia-aios && npm install && npm run dev
```

### Usando os agentes no Claude Code

Abra o projeto no Claude Code e use os slash commands:

```bash
cd babilonia-aios
claude
```

Depois use qualquer comando:

| Comando | Descrição |
|---------|-----------|
| `/babilonia` | Menu com todos os comandos |
| `/advisory-board` | Conselho com Dalio, Munger, Naval, Thiel |
| `/copy-squad` | Squad de copy com Halbert, Ogilvy, Schwartz |
| `/hormozi-squad` | Frameworks Hormozi completos |
| `/criar-oferta` | Executa Grand Slam Offer passo a passo |
| `/escrever-copy` | Escreve sales letter completa |
| `/auditar-marca` | Auditoria completa de marca |
| `/reunir-conselho` | Deliberação estratégica multi-agente |

## Squads

| Squad | Agentes | Descrição |
|-------|---------|-----------|
| **Advisory Board** | 11 | Conselheiros estratégicos — Ray Dalio, Charlie Munger, Naval Ravikant, Peter Thiel e mais |
| **Copy Squad** | 10 | Lendas do copywriting — Gary Halbert, Eugene Schwartz, David Ogilvy e mais |
| **Hormozi Squad** | 8 | Frameworks de Alex Hormozi — Offers, Leads, Pricing, Scaling |
| **Brand Squad** | 9 | Estratégia de marca — David Aaker, Al Ries, Marty Neumeier e mais |
| **Traffic Masters** | 7 | Tráfego pago — Molly Pittman, Tom Breeze, Kasim Aslam, Pedro Sobral e mais |
| **C-Level Squad** | 7 | C-suite virtual — CEO, COO, CMO, CTO, CIO, CAIO, CFO |
| **Design Squad** | 6 | Design operations — Brad Frost, Dan Mall, Dave Malouf e mais |
| **Data Squad** | 7 | Estrategistas data-driven — Avinash Kaushik, Sean Ellis, Peter Fader e mais |
| **Storytelling Squad** | 7 | Mestres da narrativa — Joseph Campbell, Robert McKee, Nancy Duarte e mais |
| **Cybersecurity Squad** | 6 | Cibersegurança — Pentest, Red Team, Blue Team, AppSec, IR |
| **Movement Squad** | 5 | Construção de movimentos — Fenomenologia, identidade, manifestos |
| **Product Squad** | 4 | Produto e crescimento — PM, SEO, CFO, AI Ethics |

## Como funciona

### 1. Agentes Especializados

Cada agente possui:
- **Personalidade** definida (tom, estilo, abordagem)
- **Frameworks** próprios (metodologias, modelos mentais)
- **Especialidade** profunda (área de domínio)
- **Biografia** baseada em especialistas reais

### 2. Workflows Inteligentes

Pipelines que conectam agentes em sequência:

```
Estrategista → Copywriter → Revisor → Resultado Final
```

Cada agente contribui com sua perspectiva única, criando uma cadeia de valor onde o todo é maior que a soma das partes.

### 3. Tasks Executáveis

Ações concretas com:
- Inputs e outputs definidos
- Critérios de qualidade
- Comandos de ativação

## Stack Tecnológica

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Ícones:** Lucide React
- **Deploy:** Vercel (recomendado)

## Estrutura do Projeto

```
babilonia-aios/
├── squads/                          # CORE — Definições dos squads
│   ├── advisory-board/
│   │   ├── config.yaml              # Configuração do squad
│   │   ├── agents/                  # Agentes (system prompts completos)
│   │   │   ├── board-chair.md
│   │   │   ├── ray-dalio.md
│   │   │   ├── charlie-munger.md
│   │   │   └── ...
│   │   ├── tasks/                   # Tasks executáveis
│   │   │   ├── convene-board.md
│   │   │   └── ...
│   │   └── workflows/               # Workflows orquestrados
│   │       ├── wf-board-meeting.yaml
│   │       └── ...
│   ├── copy-squad/                  # 10 copywriters lendários
│   ├── hormozi-squad/               # Frameworks Alex Hormozi
│   ├── brand-squad/                 # Estratégia de marca
│   ├── traffic-masters/             # Tráfego pago
│   ├── c-level-squad/               # C-suite virtual
│   ├── design-squad/                # Design operations
│   ├── data-squad/                  # Growth e analytics
│   ├── storytelling-squad/          # Narrativa e pitching
│   ├── cybersecurity-squad/         # Segurança ofensiva e defensiva
│   ├── movement-squad/              # Construção de movimentos
│   └── product-squad/               # Produto, SEO, finanças
│
├── src/                             # WEBAPP — Interface visual
│   ├── app/                         # Páginas (Next.js App Router)
│   ├── components/                  # Componentes reutilizáveis
│   └── data/                        # Dados compilados dos squads
│
├── .github/workflows/               # CI/CD — Lint + Build automático
├── tailwind.config.ts
├── next.config.mjs
├── package.json
├── LICENSE
└── README.md
```

### Usando os agentes diretamente

Cada arquivo `.md` em `squads/*/agents/` é um **system prompt completo** pronto para usar com qualquer LLM (Claude, GPT, etc.). Basta copiar o conteúdo e colar como system prompt.

Cada arquivo `.md` em `squads/*/tasks/` define uma **task executável** com inputs, steps e outputs esperados.

Cada `.yaml` em `squads/*/workflows/` define um **pipeline multi-agente** com fases, dependências e critérios de conclusão.

## Deploy

### Vercel (recomendado)

1. Faça um fork deste repositório
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Clique em "Deploy"

### Build manual

```bash
npm run build
npm start
```

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
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
  description: "Descrição curta",
  bio: "Biografia completa com 4-6 frases...",
  frameworks: ["Framework 1", "Framework 2"],
  personality: "Traços de personalidade",
  color: "#HEX",
  initials: "NA",
  photo: "URL da foto",
}
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

<p align="center">
  Feito por <a href="https://github.com/rafaelsin-code">Rafael Pinheiro</a>
</p>
