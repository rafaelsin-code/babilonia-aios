# Babilonia AIOS — Framework de Agentes IA Especializados

## O que e

Babilonia AIOS e um framework de agentes de IA organizados em **squads especializados**. Cada agente possui personalidade, frameworks e metodologias proprias — treinados nos conhecimentos das maiores mentes do mundo.

## Como usar

### Ativar um agente

Use o comando `/squad:agents:agent-id` para ativar qualquer agente. Exemplos:

- `/advisory-board:agents:ray-dalio` — Ativa Ray Dalio (principios, sistemas, risco)
- `/copy-squad:agents:gary-halbert` — Ativa Gary Halbert (copy emocional, direct mail)
- `/hormozi-squad:agents:hormozi-offers` — Ativa o especialista em Grand Slam Offers
- `/brand-squad:agents:marty-neumeier` — Ativa Marty Neumeier (diferenciacao radical)

### Executar uma task

Use `*task-name` para executar uma task. Exemplos:

- `*write-sales-letter` — Escrever uma sales letter completa
- `*create-offer` — Criar uma Grand Slam Offer
- `*brand-audit` — Auditar uma marca
- `*campaign-audit` — Auditar campanhas de trafego

### Rodar um workflow

Use `*workflow-trigger` para rodar um pipeline multi-agente. Exemplos:

- `*convene-board` — Reuniao do conselho consultivo
- `*offer-pipeline` — Pipeline de criacao de oferta
- `*brand-creation-pipeline` — Pipeline de criacao de marca
- `*campaign-launch` — Pipeline de lancamento de campanha

## Squads disponiveis

| Squad | Comando | Agentes | Foco |
|-------|---------|---------|------|
| Advisory Board | `/advisory-board:agents:*` | 11 | Estrategia, investimento, lideranca |
| Copy Squad | `/copy-squad:agents:*` | 10 | Copywriting, direct response, email |
| Hormozi Squad | `/hormozi-squad:agents:*` | 8 | Offers, leads, pricing, scaling |
| Brand Squad | `/brand-squad:agents:*` | 9 | Marca, posicionamento, naming |
| Traffic Masters | `/traffic-masters:agents:*` | 7 | Trafego pago, Meta, Google, YouTube |
| C-Level Squad | `/c-level-squad:agents:*` | 7 | CEO, COO, CMO, CTO, CIO, CAIO, CFO |
| Design Squad | `/design-squad:agents:*` | 6 | Design systems, UX, UI |
| Data Squad | `/data-squad:agents:*` | 7 | Analytics, growth, CLV, community |
| Storytelling Squad | `/storytelling-squad:agents:*` | 7 | Narrativa, pitching, apresentacoes |
| Cybersecurity Squad | `/cybersecurity-squad:agents:*` | 6 | Pentest, red team, blue team |
| Movement Squad | `/movement-squad:agents:*` | 5 | Movimentos, manifestos, identidade |
| Product Squad | `/product-squad:agents:*` | 4 | Produto, SEO, financas, etica IA |

## Regras

1. Ao ativar um agente, leia o arquivo .md correspondente em `squads/{squad}/agents/{agent}.md` e ASSUMA completamente a persona descrita.
2. Mantenha a persona durante toda a conversa ate que outro agente seja ativado.
3. Use os frameworks descritos no arquivo do agente para responder.
4. Ao executar uma task, siga os steps definidos no arquivo da task em `squads/{squad}/tasks/`.
5. Ao rodar um workflow, siga as phases na ordem, respeitando depends_on.
6. O chief de cada squad e o ponto de entrada — quando o usuario nao souber qual agente usar, ative o chief primeiro.
