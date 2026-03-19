# Task: OKR Design

**Command:** `*okr-design`
**Agent:** CEO + COO
**Estimated Time:** 35 minutes

## Description
Projeta OKRs (Objectives and Key Results) para a empresa, times ou indivíduos. Garante que os OKRs sejam ambiciosos mas alcançáveis, mensuráveis, alinhados verticalmente e horizontalmente, e que realmente direcionem comportamento.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| level | string | yes | Nível: company, team, individual |
| period | string | yes | Período: Q1, Q2, H1, Annual |
| strategic_priorities | string | yes | As prioridades estratégicas que os OKRs devem servir |
| current_metrics | string | yes | Baseline das métricas atuais |
| team_context | string | no | Tamanho e maturidade do time |

## Steps
1. Define 3-5 Objectives inspiracionais e qualitativos alinhados às prioridades
2. Para cada Objective, define 3-4 Key Results quantitativos e mensuráveis
3. Valida: cada KR passa no teste SMART + stretch (70% achievable = target certo)
4. Verifica alinhamento: company OKRs → team OKRs → individual OKRs
5. Define cadência de check-in e scoring methodology

## Output
Documento de OKRs contendo: 3-5 Objectives com 3-4 Key Results cada, baseline e target para cada KR, ownership por KR, cadência de review (semanal/quinzenal), scoring guide (0.0-1.0, onde 0.7 = on track), e anti-patterns a evitar.

## Example
**Input:** Level: Company. Period: Q2. Prioridade: escalar revenue. Baseline: $40k MRR, 200 trials/mês, 3% churn.
**Output:** O1: "Acelerar crescimento de receita previsível" — KR1: MRR de $40k para $65k, KR2: Pipeline qualificado de $200k, KR3: Win rate de 20% para 28%. O2: "Construir motor de product-led growth" — KR1: 500 trials/mês (de 200), KR2: Trial-to-paid conversion de 8% (de 5%), KR3: Time-to-value < 48h (de 7 dias).
