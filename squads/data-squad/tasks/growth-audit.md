# Task: Growth Audit

**Command:** `*growth-audit`
**Agent:** Datum + Sean Ellis + Avinash Kaushik
**Estimated Time:** 45 minutes

## Description
Realiza uma auditoria completa de crescimento, mapeando o funil inteiro (AARRR), identificando o maior gargalo, segmentando por cohort e canal, e prescrevendo experimentos priorizados para destravar growth.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| business_model | string | yes | Tipo de negócio (SaaS, e-commerce, marketplace, etc.) |
| funnel_metrics | string | yes | Métricas por estágio do funil (traffic, signup, activation, retention, revenue, referral) |
| channels | string | yes | Canais de aquisição e performance de cada um |
| cohort_data | string | no | Dados de cohort se disponíveis |
| growth_rate | string | yes | Taxa de crescimento atual (MoM ou WoW) |
| biggest_bet | string | no | O que já tentaram para crescer |

## Steps
1. Datum mapeia o funil completo AARRR com taxas de conversão entre cada estágio
2. Sean Ellis identifica o maior gargalo (maior drop-off absoluto com maior potencial)
3. Avinash Kaushik segmenta por canal e dispositivo para revelar padrões escondidos
4. Formular hipóteses baseadas em dados quali + quanti
5. Priorizar 5-7 experimentos usando ICE scoring

## Output
Relatório de growth audit contendo: funil AARRR completo com taxas, identificação do gargalo #1, segmentação por canal/cohort/dispositivo, 5-7 hipóteses de crescimento, backlog de experimentos com ICE score, timeline de execução sugerida, e North Star Metric recomendada.

## Example
**Input:** SaaS B2B. Funnel: 10k visitors → 500 signups → 100 activated → 70 retained (M1) → 50 paying. Growth: 8% MoM. Canais: Google Ads 40%, Organic 30%, Referral 20%, Direct 10%.
**Output:** Gargalo #1: Activation (20% signup-to-activation). Segmentação revela: Google Ads activation é 12% vs. Referral 35%. Hipóteses: (1) Google Ads traz ICP errado, (2) Onboarding não entrega value rápido o suficiente, (3) Aha moment não está claro para novos usuários. Top experiments: simplificar onboarding para 3 steps (ICE: 9), criar template gallery na ativação (ICE: 8), segmentar Google Ads por intent (ICE: 7).
