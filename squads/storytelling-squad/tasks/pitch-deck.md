# Task: Pitch Deck

**Command:** `*pitch-deck`
**Agent:** Story Chief + Oren Klaff + Nancy Duarte
**Estimated Time:** 50 minutes

## Description
Cria a narrativa e estrutura de um pitch deck usando a dinâmica de frame control de Klaff e a sparkline de Duarte. Não produz os slides, mas entrega o roteiro completo slide-by-slide com narrativa, dados e notas de apresentação.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| pitch_type | string | yes | Tipo: investor (seed/A/B), sales, partnership, internal |
| company | string | yes | Nome e descrição da empresa |
| audience | string | yes | Quem vai receber o pitch |
| key_metrics | string | yes | Métricas de tração e financeiras |
| ask | string | yes | O que está pedindo (investimento, contrato, aprovação) |
| time_limit | string | no | Tempo disponível (default: 15 min) |
| differentiator | string | yes | O que torna a empresa única |

## Steps
1. Oren Klaff define o frame stack: power, time, intrigue, prize
2. Nancy Duarte estrutura a sparkline: alternância entre "what is" e "what could be"
3. Story Chief integra a origin story e customer story no fluxo narrativo
4. Define roteiro slide-by-slide: título, mensagem-chave, data/visual, nota de apresentação
5. Inclui timing por slide e transições

## Output
Roteiro de pitch deck contendo: para cada slide — título, mensagem-chave (1 frase), conteúdo sugerido (dado, visual, história), nota de apresentação (o que falar), e timing. Inclui frame stack para abertura, sparkline structure, e coaching notes para o apresentador.

## Example
**Input:** Pitch type: Series A. Empresa: SaaS de HR. Audience: VC tier 1. Metrics: $500k ARR, 120% NRR, 50 clientes. Ask: $5M. Differentiator: AI que prevê turnover.
**Output:** 15 slides, 12 minutos: S1 (Hook — "E se você pudesse prever quem vai pedir demissão 90 dias antes?"), S2 (Problem — custo de turnover: $4.1k/employee), S3 (Sparkline — what is vs. what could be), S4 (Solution — demo de 30s), S5 (Traction — $500k ARR graph), S6-7 (Why now + Market), S8 (Business model), S9 (Competition — category design), S10 (Team), S11 (Financials), S12 (Ask — $5M for...), S13 (Vision — closing sparkline). Coaching: abra de pé, olho no partner mais senior, prize frame no Q&A.
