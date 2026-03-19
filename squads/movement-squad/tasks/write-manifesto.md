# Task: Write Manifesto

**Command:** `*write-manifesto`
**Agent:** Movement Chief + Manifesto Writer
**Estimated Time:** 40 minutes

## Description
Escreve um manifesto de marca ou movimento — uma declaração visceral que define crenças, inimigos, visão e chamado à ação. O manifesto é projetado para separar aliados de indiferentes, inspirar ação e criar identidade de grupo.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| brand_or_movement | string | yes | Nome da marca ou movimento |
| core_belief | string | yes | A crença central que une o grupo |
| enemy | string | yes | O que vocês combatem (ideia, sistema, status quo) |
| audience | string | yes | Quem o manifesto deve mobilizar |
| vision | string | yes | O mundo que querem criar |
| tone | string | no | Tom desejado (rebelde, inspirador, urgente, poético) |
| founder_voice | string | no | A voz pessoal do fundador para autenticidade |

## Steps
1. Movement Chief valida se há tensão real e causa genuína (Movement Readiness)
2. Manifesto Writer escava a raiva legítima e a visão genuína
3. Estrutura nos 7 Blocos: insatisfação, causa, inimigo, princípios, visão, chamado, compromisso
4. Aplica rhetorical devices: anáfora, antítese, tricolon, imperativo
5. Testa: teste do arrepio, teste do compartilhamento, teste da exclusão

## Output
Manifesto completo contendo: versão full (400-600 palavras), versão destilada (10 princípios em 1 frase cada), versão tagline (1 frase de chamado), notas sobre rhetorical devices usados, guidelines de uso (onde publicar, como apresentar), e resultado dos 3 testes.

## Example
**Input:** Movimento: educação sem diploma. Crença: talento e dedicação valem mais que certificado. Inimigo: o sistema educacional que vende papel em vez de competência. Audience: autodidatas e profissionais sem diploma. Visão: mundo onde o que você sabe fazer importa mais que onde você estudou.
**Output:** Manifesto "O Diploma Não Define Você" (520 palavras) abrindo com "Nós nos recusamos a acreditar que 4 anos numa sala de aula e R$200 mil de dívida são o único caminho...", 10 princípios incluindo "Portfólio > Diploma", "O mercado é o único professor que não mente", fechando com "Se você já construiu algo real, você é um de nós. Junte-se." Passa nos 3 testes.
