# Task: Business Audit

**Command:** `*business-audit`
**Agent:** Hormozi Chief
**Estimated Time:** 40 minutes

## Description
Realiza uma auditoria completa do negócio usando a lente Hormozi — focando nas alavancas de receita, valor por cliente, mecanismos de aquisição e oportunidades de otimização. Identifica os maiores gargalos de crescimento e prescreve ações priorizadas por impacto.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| business_type | string | yes | Tipo de negócio (SaaS, agência, e-commerce, serviços, info-produto) |
| revenue | string | yes | Receita mensal/anual atual |
| num_customers | number | yes | Número de clientes ativos |
| avg_ticket | string | yes | Ticket médio |
| acquisition_channels | string | yes | Canais de aquisição atuais |
| churn_rate | string | no | Taxa de churn (se aplicável) |
| biggest_challenge | string | yes | Maior desafio percebido |

## Steps
1. Analisa as 4 alavancas de receita Hormozi: mais leads, melhor conversão, maior ticket, mais frequência
2. Identifica qual alavanca tem maior potencial de impacto com menor esforço
3. Avalia a oferta atual contra o framework de Value Equation
4. Analisa unit economics e identifica vazamentos de valor
5. Prescreve top 3 ações priorizadas com impacto estimado

## Output
Relatório de auditoria contendo: diagnóstico das 4 alavancas com score (1-10), identificação da alavanca #1 para focar, análise da oferta atual vs. Grand Slam Offer ideal, top 3 ações com impacto estimado em receita, e timeline de implementação sugerida.

## Example
**Input:** Agência de design. Revenue: R$80k/mês. 15 clientes. Ticket médio: R$5.300. Canal: indicação. Churn: 10%/mês. Desafio: não consigo crescer além disso.
**Output:** Alavanca #1: Reduzir churn (10% → 3% = +R$28k/mês em 6 meses). Alavanca #2: Aumentar ticket com value stack (R$5.3k → R$8k). Alavanca #3: Sistematizar indicações. Oferta atual é genérica — reestruturar como Grand Slam Offer com deliverables claros e garantia.
