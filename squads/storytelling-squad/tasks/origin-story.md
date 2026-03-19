# Task: Origin Story

**Command:** `*origin-story`
**Agent:** Story Chief + Joseph Campbell + Robert McKee
**Estimated Time:** 35 minutes

## Description
Cria a origin story da empresa ou do fundador — a narrativa fundacional que explica por que a empresa existe e por que é autêntica. Combina a jornada do herói de Campbell com a estrutura dramática de McKee para criar uma história que ressoa emocionalmente e constrói credibilidade.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| founder_name | string | yes | Nome do fundador |
| founding_moment | string | yes | O momento/evento que gerou a ideia |
| previous_life | string | yes | O que fazia antes (o "mundo comum") |
| struggle | string | yes | A dificuldade que enfrentou |
| turning_point | string | yes | O momento de virada/decisão |
| first_win | string | no | A primeira vitória ou validação |
| mission_today | string | yes | A missão que carrega hoje |

## Steps
1. Joseph Campbell mapeia nos 12 estágios da Jornada do Herói
2. Robert McKee identifica a controlling idea e estrutura o arco em 3 atos
3. Story Chief encontra o momento de maior vulnerabilidade (o coração da história)
4. Escreve versão longa (500-800 palavras) e versão curta (150 palavras)
5. Adapta para diferentes contextos (site, pitch, entrevista, social)

## Output
Pacote de Origin Story contendo: versão longa (500-800 palavras, para About page), versão média (200 palavras, para bios e materiais), versão curta (50 palavras, para social e taglines), mapa da jornada do herói aplicada, controlling idea, e notas sobre como contar verbalmente (para entrevistas e podcasts).

## Example
**Input:** Founder: Ana. Momento: viu a mãe perder economias em golpe financeiro. Antes: trabalhava em banco. Luta: deixar emprego estável, levantar capital sem network. Virada: primeiro cliente chorou de alívio ao entender as próprias finanças. Missão: fazer educação financeira acessível.
**Output:** Longa: "Ana trabalhava no 15o andar de um banco no Itaim quando recebeu a ligação. Sua mãe, professora aposentada, tinha acabado de perder R$80 mil..." (narrativa completa em 650 palavras). Curta: "Ana viu sua mãe perder as economias de uma vida por falta de educação financeira. Pediu demissão do banco e criou a ferramenta que gostaria que sua mãe tivesse." Controlling idea: "Verdadeira proteção financeira é alcançada quando educação substitui complexidade."
