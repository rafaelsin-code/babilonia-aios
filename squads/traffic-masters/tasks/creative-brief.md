# Task: Creative Brief

**Command:** `*creative-brief`
**Agent:** Traffic Chief + Creative Director
**Estimated Time:** 25 minutes

## Description
Cria um creative brief completo para produção de anúncios de performance. Define conceito, hooks, formatos, scripts e variações para teste. Projetado para maximizar CTR e conversão em plataformas de tráfego pago.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| product | string | yes | Produto/serviço anunciado |
| platform | string | yes | Plataforma(s) alvo |
| target_audience | string | yes | Público-alvo com dores e desejos |
| objective | string | yes | Objetivo (lead, venda, trial) |
| budget_for_creative | string | no | Budget disponível para produção |
| existing_winners | string | no | Criativos que já performaram bem |

## Steps
1. Define o conceito criativo central baseado na dor/desejo do público
2. Gera 5-7 hooks de abertura (primeiros 3 segundos) para vídeo ou primeira frase para estático
3. Estrutura scripts para cada formato (UGC, talking head, slide-show, static)
4. Define variações para teste A/B (hook, CTA, angle)
5. Monta o brief com specs técnicas por plataforma

## Output
Creative brief contendo: conceito central, 5-7 hooks rankeados, scripts completos para 3-4 formatos, variações para teste, specs técnicas (tamanho, duração, aspect ratio), referências visuais, e critérios de performance para avaliação.

## Example
**Input:** Produto: app de meditação. Platform: TikTok + Meta. Audience: profissionais 25-40 estressados. Objetivo: trial.
**Output:** Conceito: "A manhã de 5 minutos que muda o dia inteiro". Hooks: (1) "Eu acordava com ansiedade todo dia até...", (2) "5 minutos. É o que separa um dia caótico de um dia intencional.", (3) "Meu terapeuta me recomendou uma coisa que mudou tudo." Formatos: UGC testimonial (60s), talking head educacional (30s), text-on-screen (15s). 12 variações para teste.
