# Task: Strategic Plan

**Command:** `*strategic-plan`
**Agent:** CEO + C-Level Team
**Estimated Time:** 60 minutes

## Description
Desenvolve um plano estratégico completo para o próximo ciclo (trimestral ou anual). Define visão, prioridades estratégicas, alocação de recursos, milestones e métricas de sucesso. Baseado em análise de mercado, capabilities internas e ambição do fundador.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| company_stage | string | yes | Estágio (pre-seed, seed, series A, growth, established) |
| current_metrics | string | yes | Métricas-chave atuais (revenue, growth, team size, runway) |
| market_context | string | yes | Dinâmica do mercado, competição, tendências |
| vision | string | yes | Onde quer chegar em 12-36 meses |
| constraints | string | yes | Limitações (capital, equipe, tecnologia) |
| planning_horizon | string | no | Período do plano (default: 12 meses) |

## Steps
1. Diagnóstico situacional: SWOT + análise de capabilities vs. ambição
2. Definição de 3-5 prioridades estratégicas para o período
3. Para cada prioridade: OKRs, recursos necessários, owner, milestones
4. Alocação de recursos (budget, headcount) por prioridade
5. Definição de review cadence e critérios de pivot

## Output
Plano estratégico contendo: diagnóstico situacional (1 página), visão e winning aspiration, 3-5 prioridades estratégicas com OKRs, alocação de recursos por prioridade, roadmap trimestral com milestones, risks & mitigations, e governance (cadência de review, critérios de ajuste).

## Example
**Input:** SaaS B2B Series A. Revenue: $500k ARR, crescendo 10% m/m. Team: 15 pessoas. Runway: 18 meses. Visão: $3M ARR em 12 meses.
**Output:** 3 prioridades: (1) Escalar GTM — hire AEs, invest em outbound, meta $150k MRR Q4. (2) Product-led growth — implementar free trial, meta 500 trials/mês. (3) CS para NRR — atingir 120% NRR. Budget: 60% GTM, 25% Product, 15% CS. Review mensal com CEO + VPs.
