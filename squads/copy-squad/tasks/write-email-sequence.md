# Task: Write Email Sequence

**Command:** `*write-email-sequence`
**Agent:** Cyrus + Andre Chaperon + Ben Settle
**Estimated Time:** 45 minutes

## Description
Cria uma sequência de emails estratégica — welcome, nurture, launch, ou re-engagement. Combina a maestria de soap opera sequences de Chaperon com o daily email style de Settle. Cada email é escrito para mover o leitor um passo mais perto da conversão.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| sequence_type | string | yes | Tipo: welcome, nurture, launch, abandoned-cart, re-engagement |
| num_emails | number | yes | Quantidade de emails na sequência (3-12) |
| product | string | yes | Produto/serviço promovido |
| target_audience | string | yes | Quem recebe os emails |
| goal | string | yes | Objetivo final (venda, agendamento, download) |
| brand_voice | string | no | Tom e personalidade da marca |

## Steps
1. Cyrus define a estratégia da sequência: arco narrativo, cadência, progressão de awareness
2. Andre Chaperon estrutura o "soap opera sequence" — cada email abre um loop que o próximo fecha
3. Ben Settle adiciona personalidade, polarização e urgência natural (não fabricada)
4. Cyrus revisa cadência, subject lines, CTAs e garante progressão lógica
5. Entrega sequência completa pronta para configuração no ESP

## Output
Sequência completa contendo: para cada email — subject line (+ 2 variações para A/B test), preview text, body copy, CTA, e nota sobre timing/gatilho de envio. Inclui visão geral da estratégia da sequência e mapa de arco narrativo.

## Example
**Input:** Sequence: launch de 7 emails. Produto: mentoria de negócios. Audience: founders de SaaS. Goal: venda de R$5.000.
**Output:** Sequência de 7 emails ao longo de 10 dias: E1 (história de origem), E2 (problema amplificado), E3 (caso de sucesso), E4 (objeção-killer), E5 (prova social + FAQ), E6 (urgência + bônus), E7 (last call). Cada email com subject line, body e CTA completos.
