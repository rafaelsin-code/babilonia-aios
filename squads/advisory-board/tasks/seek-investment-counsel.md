# Task: Seek Investment Counsel

**Command:** `*seek-investment-counsel`
**Agent:** Board Chair + Ray Dalio + Charlie Munger + Peter Thiel
**Estimated Time:** 40 minutes

## Description
Sessão especializada do conselho focada em decisões de investimento, fundraising, alocação de capital e avaliação financeira. Convoca o painel financeiro do board — Dalio (macro + all-weather), Munger (value + mental models), Thiel (venture + zero-to-one) — para análise profunda.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| investment_question | string | yes | A decisão de investimento ou financeira em questão |
| financials | string | yes | Números relevantes (revenue, burn, runway, valuation) |
| options | string | no | Opções sendo consideradas (ex: bootstrap vs raise, valuations recebidas) |
| risk_tolerance | string | no | Perfil de risco do fundador (conservador/moderado/agressivo) |

## Steps
1. Board Chair enquadra a decisão financeira e define critérios de avaliação
2. Ray Dalio analisa sob perspectiva macro, ciclos econômicos e all-weather allocation
3. Charlie Munger aplica mental models — inverte o problema, busca incentivos perversos e identifica a premissa mais fraca
4. Peter Thiel avalia sob lente de poder de monopólio, timing e assimetria de risco/retorno
5. Board Chair sintetiza em recomendação com cenários bull/base/bear

## Output
Parecer de investimento contendo: análise macro (Dalio), análise de value e riscos ocultos (Munger), análise de vantagem competitiva e timing (Thiel), recomendação consolidada com cenários, condições para proceed/abort, e red flags identificadas.

## Example
**Input:** "Recebemos term sheet de Series A: $5M a $20M pre-money. Nosso MRR é $80k, crescendo 15% m/m."
**Output:** Dalio: "Momento macro favorável para SaaS, mas prepare all-weather — 18 meses de runway mínimo." Munger: "Inverta: o que tem que dar errado para o valuation não se justificar? Se crescimento cai para 5% m/m, $20M é caro." Thiel: "$20M pre com $80k MRR implica expectativa de monopólio local. Você tem defensibilidade real?" Recomendação: aceitar com ajustes no cap table, priorizar hiring de GTM, e atingir $200k MRR em 12 meses.
