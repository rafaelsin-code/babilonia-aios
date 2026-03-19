# Task: UX Research

**Command:** `*ux-research`
**Agent:** UX Researcher
**Estimated Time:** 45 minutes

## Description
Planeja e conduz pesquisa de experiência do usuário para informar decisões de produto e design. Define metodologia, recruta perfil de participante, cria roteiro de pesquisa e entrega insights acionáveis.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| research_question | string | yes | A pergunta principal que a pesquisa deve responder |
| product_context | string | yes | Contexto do produto e feature em investigação |
| user_segment | string | yes | Segmento de usuários a pesquisar |
| research_type | string | no | Tipo preferido: generative, evaluative, ou both |
| timeline | string | yes | Prazo para resultados |
| existing_data | string | no | Dados já disponíveis (analytics, surveys anteriores) |

## Steps
1. Define a research question em formato testável e acionável
2. Seleciona metodologia: interviews, usability testing, card sorting, surveys, diary studies
3. Cria screening criteria e roteiro/protocolo de pesquisa
4. Define sample size e recruitment plan
5. Estrutura analysis framework e formato de entrega

## Output
Plano de pesquisa contendo: research question, metodologia selecionada com justificativa, screening criteria, roteiro de pesquisa (perguntas/tarefas), sample size e recruitment plan, analysis framework, timeline, e template de relatório de findings.

## Example
**Input:** Pergunta: "Por que 60% dos usuários abandonam o onboarding no step 3?" Produto: SaaS de project management. Segment: novos usuários.
**Output:** Metodologia: usability testing (5 sessões) + interviews (8 sessões). Screening: novos usuários que abandonaram nos últimos 30 dias. Roteiro: task-based testing do onboarding flow + entrevista semi-estruturada sobre expectativas e frustrações. Findings em 2 semanas com 5-7 insights priorizados e recomendações de redesign.
