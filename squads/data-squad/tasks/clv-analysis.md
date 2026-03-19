# Task: CLV Analysis

**Command:** `*clv-analysis`
**Agent:** Datum + Peter Fader + Nick Mehta
**Estimated Time:** 40 minutes

## Description
Realiza análise de Customer Lifetime Value segmentada, usando modelos probabilísticos para prever o valor futuro de cada segmento de clientes. Identifica quais clientes investir, quais manter e quais estão destruindo valor.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| transaction_data | string | yes | Dados transacionais: customer_id, date, value (mínimo 12 meses) |
| num_customers | number | yes | Tamanho da base de clientes |
| business_model | string | yes | Tipo: subscription, transactional, hybrid |
| avg_ticket | string | yes | Ticket médio atual |
| churn_rate | string | no | Taxa de churn (se subscription) |
| acquisition_cost | string | no | CAC médio e por canal |

## Steps
1. Datum prepara e valida os dados transacionais
2. Peter Fader aplica modelo BG/NBD + Gamma-Gamma para projetar CLV individual
3. Segmenta em 4 tiers por CLV projetado (Tier 1: top 5%, Tier 2: next 15%, Tier 3: next 30%, Tier 4: bottom 50%)
4. Nick Mehta cruza com health scores para identificar clientes de alto valor em risco
5. Define estratégia de investimento por tier

## Output
Relatório de CLV contendo: distribuição de CLV por segmento (gráfico), perfil de cada tier (comportamento, demographics, LTV), CLV/CAC ratio por canal de aquisição, clientes de alto valor em risco (action needed), estratégia de investimento por tier, e projeção de customer-base value total.

## Example
**Input:** SaaS com 2.000 clientes. Subscription model. Ticket médio: R$200/mês. Churn: 4%/mês. CAC: R$800.
**Output:** Tier 1 (100 clientes, 5%): CLV médio R$18.000, NRR 140%, zero churn risk — proteger a todo custo. Tier 2 (300 clientes): CLV R$6.000, oportunidade de upgrade. Tier 3 (600 clientes): CLV R$2.500, automatizar CS. Tier 4 (1000 clientes): CLV R$800, abaixo do CAC — parar de adquirir esse perfil. Customer-base value total: R$7.2M. Ação #1: realocar budget de aquisição para canais que trazem perfil Tier 1-2.
