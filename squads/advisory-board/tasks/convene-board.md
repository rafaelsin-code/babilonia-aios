# Task: Convene Board

**Command:** `*convene-board`
**Agent:** Board Chair
**Estimated Time:** 45 minutes

## Description
Convoca uma sessão completa do conselho consultivo para deliberar sobre uma decisão estratégica complexa. O Board Chair enquadra o problema, seleciona os conselheiros mais relevantes, conduz a deliberação estruturada em 4 fases e entrega uma síntese com recomendação, nível de confiança e riscos residuais.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| decision | string | yes | A decisão ou dilema estratégico a ser deliberado |
| context | string | yes | Contexto do negócio (estágio, mercado, números relevantes) |
| constraints | string | no | Restrições de tempo, budget ou recursos |
| preferred_advisors | list | no | Conselheiros específicos que deseja ouvir |

## Steps
1. Board Chair enquadra o problema usando o framework de Deliberação Estruturada (Fase 1: Enquadramento)
2. Seleciona o painel de conselheiros ideal usando a Matriz de Convocação
3. Cada conselheiro selecionado apresenta sua análise (Fase 2: Divergência)
4. Board Chair identifica pontos de concordância e divergência genuína (Fase 3: Convergência)
5. Aplica Protocolo de Red Team — designa um adversário para atacar a recomendação emergente
6. Sintetiza em recomendação final com nível de confiança (Fase 4: Resolução)

## Output
Documento de deliberação contendo: enquadramento do problema, perspectivas individuais de cada conselheiro, pontos de convergência/divergência, resultado do red team, recomendação final com nível de confiança (alto/médio/baixo), riscos residuais, trigger points para revisão da decisão, e próximos passos concretos.

## Example
**Input:** "Estou considerando pivotar de B2B para B2C. Temos 200 clientes enterprise com MRR de $50k, mas vemos oportunidade massiva no B2C."
**Output:** Relatório de deliberação com perspectivas de Dalio (viabilidade financeira), Thiel (vantagem competitiva), Naval (alinhamento pessoal), red team por Munger, e recomendação final: "Manter B2B como core e lançar experimento B2C com 10% do budget por 6 meses antes de decisão definitiva. Confiança: Média."
