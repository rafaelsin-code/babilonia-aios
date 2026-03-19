# Task: North Star

**Command:** `*north-star`
**Agent:** Datum + Sean Ellis
**Estimated Time:** 30 minutes

## Description
Define a North Star Metric da empresa — a única métrica que captura o core value entregue ao cliente e que, quando cresce, indica que o negócio está saudável. Inclui a hierarquia completa de métricas: North Star, Input Metrics, Health Metrics e Diagnostic Metrics.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| business_model | string | yes | Tipo de negócio e modelo de receita |
| core_value | string | yes | O valor principal entregue ao cliente |
| current_metrics | string | yes | Métricas que a empresa acompanha hoje |
| growth_stage | string | yes | Estágio: product-market fit, growth, scale |
| team_size | string | no | Tamanho do time (para calibrar complexidade) |

## Steps
1. Sean Ellis identifica candidatas a North Star usando o critério: "captura core value E correlaciona com revenue"
2. Datum valida com dados: a métrica candidata realmente se correlaciona com retenção e receita?
3. Define 3-5 Input Metrics — as alavancas que movem a North Star
4. Define Health Metrics — guardrails que não podem cair enquanto se otimiza a North Star
5. Define Diagnostic Metrics — para debugging quando algo quebra

## Output
Documento de Metric Hierarchy contendo: North Star Metric definida com justificativa, 3-5 Input Metrics com owner sugerido, Health Metrics com thresholds de alerta, Diagnostic Metrics por área, dashboard mockup sugerido, e cadência de review recomendada.

## Example
**Input:** SaaS de project management. Core value: times entregam projetos no prazo. Estágio: growth. Métricas atuais: MRR, signups, churn.
**Output:** North Star: "Weekly Active Projects Completed On Time" (captura valor entregue + correlaciona com retenção). Input Metrics: (1) Weekly active teams (usage), (2) Projects created per team (adoption depth), (3) Avg time-to-first-project (activation speed). Health Metrics: Churn < 3%, NPS > 40, Gross Margin > 75%. Diagnostic: Login frequency, feature usage heatmap, support ticket volume.
