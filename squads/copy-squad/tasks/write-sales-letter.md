# Task: Write Sales Letter

**Command:** `*write-sales-letter`
**Agent:** Cyrus (orquestra) + Gary Halbert + Eugene Schwartz
**Estimated Time:** 60 minutes

## Description
Produz uma sales letter de direct response completa, combinando a estrutura clássica de Halbert com a sofisticação de nível de awareness de Schwartz. A carta é projetada para converter leitores em compradores usando copy testada e frameworks comprovados por décadas de resultados.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| product | string | yes | Produto/serviço a ser vendido |
| target_audience | string | yes | Quem é o comprador ideal (dores, desejos, contexto) |
| price | string | yes | Preço e estrutura de oferta |
| awareness_level | string | no | Nível de awareness (unaware/problem-aware/solution-aware/product-aware/most-aware) |
| key_benefits | string | yes | 3-5 benefícios principais |
| proof_elements | string | no | Depoimentos, resultados, dados de prova |
| tone | string | no | Tom desejado (urgente/conversacional/autoritário) |

## Steps
1. Cyrus avalia o briefing e define a estratégia de copy (awareness level, big idea, angle)
2. Eugene Schwartz define a abertura baseada no nível de awareness do prospect
3. Gary Halbert estrutura a carta: headline → lead → body → offer → close → P.S.
4. Integração de proof elements e storytelling ao longo da carta
5. Cyrus revisa, otimiza transições e garante coesão e persuasão progressiva

## Output
Sales letter completa contendo: headline principal + 2-3 alternativas, lead (abertura persuasiva), corpo com storytelling e benefícios, seção de prova social, oferta com stack de valor, call to action, garantia, e P.S. estratégico. Inclui notas sobre awareness level e premissas de copy.

## Example
**Input:** Produto: Curso online de copywriting. Audience: Freelancers que querem cobrar mais. Preço: R$1.497. Benefícios: escrever faster, cobrar 3x mais, pipeline cheio.
**Output:** Sales letter de 2.500 palavras com headline "Os Freelancers Que Descobriram Como Cobrar R$5.000 Por Texto (E Ter Fila De Espera)", estruturada com abertura problem-aware, 3 histórias de transformação, stack de valor de R$7.000+, guarantee de 30 dias, e 3 P.S. com urgência, prova social e objeção-killer.
