# Task: Roadmap

**Command:** `*roadmap`
**Agent:** Product Manager + CFO Strategist
**Estimated Time:** 40 minutes

## Description
Constrói um product roadmap estratégico que alinha prioridades de produto com objetivos de negócio, recursos disponíveis e timeline. Usa RICE para priorização e conecta cada item a um outcome mensurável.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| time_horizon | string | yes | Período: quarterly, semi-annual, annual |
| business_objectives | string | yes | OKRs ou objetivos estratégicos do período |
| feature_requests | string | yes | Backlog de features/requests existente |
| team_capacity | string | yes | Tamanho do time de engenharia e velocidade |
| constraints | string | no | Restrições técnicas, regulatórias ou de mercado |
| customer_segments | string | no | Segmentos de clientes com necessidades diferentes |

## Steps
1. Product Manager conecta feature requests a business objectives usando Opportunity Solution Tree
2. Aplica RICE scoring para cada item
3. CFO Strategist valida impacto financeiro e unit economics de features de monetização
4. Define roadmap em 3 horizontes: Now (committed), Next (planned), Later (exploratory)
5. Identifica dependências, riscos e trade-offs

## Output
Product roadmap contendo: visão do período (1 parágrafo), themes/pillars estratégicos (2-3), items priorizados com RICE score e assigned quarter, dependency map, resource allocation por theme, milestones com métricas de sucesso, risks & trade-offs documentados, e communication plan para stakeholders.

## Example
**Input:** Horizon: H2 2026. Objectives: NRR >120%, 500 new customers. Backlog: 45 items. Team: 8 engineers.
**Output:** 3 themes: (1) "Stickiness" — features que aumentam retenção (40% capacity), (2) "Growth Engine" — self-serve e virality (35% capacity), (3) "Enterprise Ready" — compliance e admin features (25% capacity). Now: collaborative workspaces (RICE 42), API v2 (RICE 38). Next: SSO + SCIM (RICE 35), usage analytics dashboard (RICE 33). Later: AI assistant, marketplace. Milestone Q3: NRR 115%, 250 new customers.
