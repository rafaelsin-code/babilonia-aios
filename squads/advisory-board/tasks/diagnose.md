# Task: Diagnose

**Command:** `*diagnose`
**Agent:** Board Chair + Relevant Advisors
**Estimated Time:** 30 minutes

## Description
Realiza um diagnóstico estratégico profundo de um problema de negócio, convocando os conselheiros mais relevantes para analisar a situação sob múltiplas perspectivas. Diferente do convene-board, o foco aqui é entender o problema, não tomar uma decisão.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| problem | string | yes | Descrição do problema ou sintoma observado |
| business_context | string | yes | Estágio, mercado, tamanho, métricas-chave |
| what_tried | string | no | O que já foi tentado para resolver |
| timeline | string | no | Há quanto tempo o problema existe |

## Steps
1. Board Chair diferencia sintoma de causa raiz usando o framework de enquadramento
2. Seleciona 2-3 conselheiros com expertise na área do problema
3. Cada conselheiro analisa sob sua perspectiva (financeira, competitiva, cultural, etc.)
4. Board Chair cruza as análises para identificar causa raiz mais provável
5. Entrega diagnóstico com hipóteses priorizadas por probabilidade

## Output
Relatório de diagnóstico contendo: sintoma vs. causa raiz provável, análise sob cada perspectiva consultada, hipóteses priorizadas (alta/média/baixa probabilidade), recomendações de investigação adicional, e ações imediatas de quick-win.

## Example
**Input:** "Nosso churn dobrou nos últimos 3 meses mas não mudamos nada no produto."
**Output:** Diagnóstico com 3 hipóteses priorizadas: (1) Mudança no perfil de cliente adquirido — Fader analisa CLV por cohort, (2) Competidor lançou feature substituta — Thiel analisa landscape competitivo, (3) Deterioração de customer success — análise de NPS e health scores. Ações imediatas: segmentar churn por cohort, entrevistar últimos 10 churns.
