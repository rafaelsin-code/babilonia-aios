# Task: Scaling Plan

**Command:** `*scaling-plan`
**Agent:** Traffic Chief + Platform Specialists
**Estimated Time:** 35 minutes

## Description
Cria um plano de escalada de investimento em tráfego pago, definindo a estratégia para ir do investimento atual ao target sem perder eficiência. Inclui regras de scaling, diversificação de canais, previsão de degradação de CPA e contingências.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| current_spend | string | yes | Investimento mensal atual |
| target_spend | string | yes | Investimento mensal target |
| current_metrics | string | yes | CPA, ROAS, volume atual |
| platforms | string | yes | Plataformas em uso e planejadas |
| timeline | string | yes | Em quanto tempo quer atingir o target |
| max_acceptable_cpa | string | yes | CPA máximo aceitável durante scaling |

## Steps
1. Avalia headroom de escala nos canais atuais (audience saturation, frequency)
2. Define curva de scaling: incremental (20%/semana) vs. aggressive (2x/mês)
3. Projeta degradação esperada de CPA em cada faixa de investimento
4. Identifica novos canais/formatos para diversificação
5. Cria playbook de scaling com regras de go/no-go e rollback triggers

## Output
Plano de scaling contendo: curva de investimento semana a semana, projeção de CPA em cada estágio, regras de go/no-go (quando pausar, quando acelerar), plano de diversificação de canais, necessidade de criativos novos por fase, e cenários de melhor/pior caso.

## Example
**Input:** Atual: R$30k/mês em Meta. Target: R$100k/mês. CPA atual: R$45. CPA máximo: R$65. Timeline: 3 meses.
**Output:** Mês 1: R$30k→R$50k (Meta only, escalar winners 20%/semana). CPA projetado: R$48-52. Mês 2: R$50k→R$75k (Meta R$55k + Google R$20k). CPA projetado: R$52-58. Mês 3: R$75k→R$100k (Meta R$60k + Google R$30k + TikTok R$10k). CPA projetado: R$55-62. Trigger de rollback: se CPA > R$65 por 5 dias consecutivos, reduzir 30% e auditar.
