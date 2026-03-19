# Task: Movement Strategy

**Command:** `*movement-strategy`
**Agent:** Movement Chief + Growth Catalyst + Identity Architect
**Estimated Time:** 50 minutes

## Description
Desenvolve a estratégia completa para transformar uma marca em um movimento. Define causa, identidade de grupo, plano de mobilização e métricas. Vai além de marketing — projeta uma causa que as pessoas querem carregar.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| brand | string | yes | Nome e descrição da marca |
| tension | string | yes | A tensão ou insatisfação que motiva o movimento |
| existing_community | string | no | Comunidade existente (tamanho, engajamento) |
| founder_authority | string | yes | Por que o fundador tem legitimidade para liderar |
| resources | string | yes | Recursos disponíveis (time, budget, plataforma) |
| timeline | string | yes | Horizonte de planejamento |

## Steps
1. Movement Chief roda Movement Readiness Assessment
2. Define Movement Architecture: causa, manifesto, identidade, comunidade, ação
3. Identity Architect projeta Identity Stack: lexicon, symbols, rituals, values, status system
4. Growth Catalyst cria Grassroots Scaling Playbook para o estágio atual
5. Define métricas de movimento: members, belonging score, advocacy rate, organic growth rate

## Output
Documento de estratégia contendo: Movement Readiness Score, Movement Architecture (5 pilares), Identity Stack (6 camadas), Grassroots Scaling Playbook (fase por fase), calendar de 90 dias com ações semanais, métricas e KPIs, budget estimado, e risks & mitigations.

## Example
**Input:** Marca: ferramenta de produtividade para devs. Tensão: devs gastam 40% do tempo em meetings inúteis. Comunidade: 500 usuários no Discord. Fundador: ex-eng lead no Google.
**Output:** Readiness: 8/10 (tensão forte, fundador legítimo, early believers existem). Causa: "Code > Meetings". Identidade: membros se chamam "Builders", ritual semanal "Focus Friday" (sem meetings), badge de status por horas de deep work. Scaling: ativar 20 super-spreaders do Discord, criar "Builders Kit" para empresas adotarem Focus Friday, parceria com dev influencers. Meta 90 dias: 2.000 membros, 50 empresas adotando Focus Friday.
