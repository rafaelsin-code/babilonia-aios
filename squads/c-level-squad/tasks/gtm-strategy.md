# Task: GTM Strategy

**Command:** `*gtm-strategy`
**Agent:** CEO + CMO + CRO
**Estimated Time:** 50 minutes

## Description
Desenvolve uma estratégia de Go-To-Market para lançamento de produto, entrada em novo mercado ou reposicionamento. Define ICP, messaging, canais, pricing, sales motion e métricas de sucesso para os primeiros 90 dias e beyond.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| what_launching | string | yes | O que está sendo lançado (produto, feature, mercado) |
| target_market | string | yes | Mercado-alvo com tamanho estimado |
| icp | string | yes | Ideal Customer Profile detalhado |
| differentiation | string | yes | Por que clientes devem escolher você |
| pricing | string | no | Estratégia de preço (se definida) |
| budget | string | yes | Budget disponível para GTM |
| timeline | string | yes | Timeline do lançamento |

## Steps
1. Define e refina ICP com critérios de firmografia e comportamento
2. Desenvolve messaging framework: positioning, value props, proof points
3. Define channel strategy: inbound, outbound, product-led, partner, paid
4. Alinha sales motion: self-serve, inside sales, field sales, ou hybrid
5. Define métricas de sucesso para 30/60/90 dias e launch plan detalhado

## Output
Documento GTM contendo: ICP detalhado, messaging framework (elevator pitch, value props, one-liners por canal), channel strategy com budget allocation, sales playbook (qualification, demo, close), pricing rationale, launch timeline com milestones, métricas de sucesso 30/60/90, e contingency plan.

## Example
**Input:** Lançando feature de IA para SaaS existente. Mercado: mid-market (100-500 employees). Budget: R$200k para 6 meses.
**Output:** ICP: VP de Ops em empresas mid-market com processos manuais. Messaging: "De 20 horas manuais para 20 minutos automáticos." Canais: 40% outbound (SDR para base existente + net new), 30% content (cases de early adopters), 20% paid (LinkedIn + Google), 10% partner. Sales motion: inside sales com demo consultiva. Meta 30 dias: 100 demos. Meta 60 dias: 20 clientes pagantes. Meta 90 dias: 3 cases publicados.
