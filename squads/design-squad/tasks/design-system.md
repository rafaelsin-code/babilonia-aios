# Task: Design System

**Command:** `*design-system`
**Agent:** Design Chief + UI Designer
**Estimated Time:** 60 minutes

## Description
Cria ou audita um design system completo — desde tokens de design (cores, tipografia, espaçamento) até componentes reutilizáveis e guidelines de uso. Garante consistência visual, eficiência de desenvolvimento e escalabilidade.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| brand_guidelines | string | yes | Cores, tipografia, logo e estilo da marca |
| platform | string | yes | Web, mobile, ou ambos |
| tech_stack | string | yes | Framework de frontend (React, Vue, etc.) |
| existing_components | string | no | Componentes que já existem |
| scale | string | yes | Tamanho do produto (MVP, growth, enterprise) |

## Steps
1. Define design tokens: color palette (primary, secondary, semantic), typography scale, spacing system, elevation/shadow, border radius
2. Cria component inventory: botões, inputs, cards, modals, navigation, tables, alerts
3. Para cada componente: estados (default, hover, active, disabled, error), variantes (size, color), e guidelines de uso
4. Define layout grid e responsive breakpoints
5. Documenta accessibility guidelines (WCAG 2.1 AA mínimo)

## Output
Design system contendo: token reference (cores, typo, spacing, elevation), component library com specs (30+ componentes base), usage guidelines para cada componente, layout grid specs, responsive breakpoints, accessibility checklist, e implementation notes para devs.

## Example
**Input:** Fintech B2B. Stack: React + Tailwind. Plataforma: web. Scale: growth.
**Output:** Design system "Atlas": 5 primary colors + semantic palette, Inter/Mono typography scale (8 sizes), 8-point spacing grid, 35 componentes base (Button em 4 sizes × 5 variants = 20 estados, DataTable com sorting/filtering/pagination, etc.), dark mode support, WCAG AA compliant. Entregue como Figma library + Storybook specs.
