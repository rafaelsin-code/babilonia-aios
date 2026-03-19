# Task: Brand Audit

**Command:** `*brand-audit`
**Agent:** Brand Chief + David Aaker + Kevin Keller
**Estimated Time:** 45 minutes

## Description
Realiza uma auditoria completa de saúde de marca avaliando 6 indicadores-chave: awareness, consideration, preference, loyalty, advocacy e premium pricing power. Identifica gaps entre posicionamento desejado e percebido, e entrega um diagnóstico acionável.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| brand_name | string | yes | Nome da marca |
| industry | string | yes | Setor de atuação |
| current_positioning | string | yes | Como a marca se posiciona hoje |
| competitors | string | yes | 3-5 concorrentes diretos |
| brand_assets | string | no | Logo, tagline, brand guidelines existentes |
| customer_feedback | string | no | Feedback ou dados de percepção de clientes |

## Steps
1. Brand Chief aplica o Brand Health Scorecard nos 6 indicadores
2. David Aaker avalia a arquitetura de marca e equity sob o Aaker Model
3. Kevin Keller analisa o Customer-Based Brand Equity (CBBE)
4. Comparativo competitivo: posicionamento da marca vs. concorrentes
5. Brand Chief consolida em diagnóstico com gap analysis e prioridades

## Output
Relatório de auditoria contendo: Brand Health Scorecard (6 indicadores com score 1-10), análise de brand equity, gap analysis (posicionamento desejado vs. percebido), mapa competitivo de posicionamento, top 5 recomendações priorizadas por impacto, e roadmap de evolução de marca.

## Example
**Input:** Marca: fintech de pagamentos. Posicionamento: "a mais simples". Concorrentes: PagSeguro, Stone, Mercado Pago.
**Output:** Scorecard: awareness 4/10, consideration 6/10, preference 3/10, loyalty 5/10, advocacy 2/10, premium pricing 2/10. Gap: "simples" não diferencia — todos dizem isso. Recomendação: reposicionar para nicho específico (ex: "pagamentos para micro-negócios rurais") onde "simples" tem significado real.
