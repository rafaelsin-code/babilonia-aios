# Task: Campaign Audit

**Command:** `*campaign-audit`
**Agent:** Traffic Chief + Meta Ads Expert + Google Ads Expert
**Estimated Time:** 40 minutes

## Description
Realiza uma auditoria completa de campanhas de tráfego pago, analisando estrutura, targeting, criativos, bidding e performance. Identifica desperdícios, oportunidades de otimização e ações de quick-win com maior potencial de impacto.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| platform | string | yes | Plataforma(s): Meta, Google, TikTok, LinkedIn |
| monthly_spend | string | yes | Investimento mensal atual |
| objective | string | yes | Objetivo da campanha (leads, vendas, awareness) |
| current_metrics | string | yes | CPA, ROAS, CTR, CPM atuais |
| target_metrics | string | yes | Métricas-alvo desejadas |
| account_access | string | no | Nível de acesso disponível para análise |

## Steps
1. Traffic Chief avalia a estrutura geral: conta, campanhas, ad sets, ads
2. Analisa targeting: audiências, exclusões, overlap, lookalikes
3. Audita criativos: formatos, copy, hooks, fadiga criativa
4. Avalia bidding e budget allocation: CBO vs. ABO, distribuição por campanha
5. Identifica top 5 quick-wins e constrói plano de otimização priorizado

## Output
Relatório de auditoria contendo: diagnóstico da estrutura de conta, análise de targeting (gaps e sobreposições), avaliação de criativos (winners vs. losers), diagnóstico de bidding e budget, top 5 quick-wins com impacto estimado, e plano de otimização para 30/60/90 dias.

## Example
**Input:** Meta Ads. Spend: R$50k/mês. Objetivo: leads para SaaS. CPA atual: R$85. CPA target: R$50.
**Output:** Quick-wins identificados: (1) Excluir audiences com overlap de 60% — economia estimada de R$8k/mês, (2) Desligar 3 ad sets com CPA >R$120 que consomem 30% do budget, (3) Escalar 2 criativos com CPA <R$40 que estão limitados por budget, (4) Implementar Advantage+ para prospecting, (5) Criar lookalike de compradores (não leads) 1%. CPA projetado após otimização: R$55-60.
