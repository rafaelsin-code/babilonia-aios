# Task: Product Discovery

**Command:** `*product-discovery`
**Agent:** Product Manager
**Estimated Time:** 45 minutes

## Description
Conduz um ciclo de product discovery para validar uma oportunidade de produto. Usa a Opportunity Solution Tree de Teresa Torres para conectar outcomes de negócio a problemas de usuário e soluções testáveis. Entrega hipóteses priorizadas com plano de validação.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| desired_outcome | string | yes | A métrica de negócio que queremos mover |
| user_segment | string | yes | Segmento de usuários em foco |
| known_problems | string | no | Problemas já identificados |
| ideas | string | no | Ideias de solução já consideradas |
| data_available | string | no | Dados quanti/quali já disponíveis |
| timeline | string | yes | Prazo para conclusão do discovery |

## Steps
1. Define desired outcome e conecta a métrica de negócio mensurável
2. Mapeia oportunidades (problemas/necessidades dos usuários) via dados existentes e hipóteses
3. Para cada oportunidade, gera 2-3 soluções possíveis
4. Prioriza soluções usando RICE
5. Define experiment plan: assumption testing, prototyping, ou MVP

## Output
Documento de discovery contendo: Opportunity Solution Tree completa (outcome → opportunities → solutions → experiments), ranking RICE das soluções, top 3 hipóteses a testar, experiment plan para cada (método, métricas de sucesso, timeline), e assumptions log (o que precisa ser verdade para cada solução funcionar).

## Example
**Input:** Outcome: aumentar trial-to-paid conversion de 5% para 12%. Segment: SMB founders. Problemas conhecidos: "onboarding confuso", "não entendo o valor rápido".
**Output:** 6 opportunities mapeadas, 14 solution ideas, top 3: (1) Guided onboarding com template por indústria (RICE: 32), (2) "Aha moment" accelerator — forçar valor nos primeiros 10 minutos (RICE: 28), (3) Concierge onboarding para trials high-value (RICE: 24). Experiment: A/B test do guided onboarding em 2 semanas, meta: activation rate >40%.
