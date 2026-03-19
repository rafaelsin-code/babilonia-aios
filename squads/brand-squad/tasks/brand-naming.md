# Task: Brand Naming

**Command:** `*brand-naming`
**Agent:** Brand Chief + Naming Strategist + Marty Neumeier
**Estimated Time:** 35 minutes

## Description
Cria opções de nome para marca, produto ou feature usando critérios estratégicos de naming. Cada opção é avaliada contra critérios de memorabilidade, disponibilidade, significado, sonoridade e potencial de trademark.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| what_to_name | string | yes | O que precisa de nome (empresa, produto, feature, serviço) |
| brand_personality | string | yes | Personalidade e tom da marca |
| target_audience | string | yes | Público-alvo |
| values | string | yes | Valores e atributos que o nome deve comunicar |
| naming_style | string | no | Estilo preferido (real word, invented, compound, acronym) |
| domains_needed | string | no | Se precisa de .com disponível |

## Steps
1. Naming Strategist define critérios e restrições do briefing
2. Gera 30-50 candidatos usando 6 métodos: real words, invented words, compounds, metaphors, acronyms, foreign words
3. Marty Neumeier aplica o Brand Gap test: cada nome é avaliado em differentiation, relevance, memorability, extendibility e depth
4. Filtra para top 10 com verificação básica de disponibilidade (.com, redes sociais)
5. Brand Chief apresenta top 5 com justificativa estratégica para cada

## Output
Relatório de naming contendo: critérios utilizados, top 5 nomes com score em cada critério, justificativa estratégica de cada opção, verificação de disponibilidade (domínio e redes sociais), riscos linguísticos/culturais identificados, e recomendação final com rationale.

## Example
**Input:** Naming para: plataforma de automação para agências. Personalidade: ousada, eficiente. Valores: velocidade, inteligência, autonomia.
**Output:** Top 5: (1) Ignite — metáfora de aceleração, .com disponível, forte e memorável. (2) Nexo — conexão inteligente, 4 letras, fácil pronúncia global. (3) Automa — raiz de automação, inventado, trademark forte. (4) Pulse — ritmo e velocidade, universal. (5) Forja — criação e transformação, português, forte sonoridade. Recomendação: Nexo (equilíbrio entre memorabilidade, significado e disponibilidade).
