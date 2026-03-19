# Task: UI Component

**Command:** `*ui-component`
**Agent:** UI Designer
**Estimated Time:** 30 minutes

## Description
Projeta um componente de UI específico com todas as variantes, estados e especificações necessárias para implementação. Inclui design rationale, accessibility specs e implementation notes.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| component_name | string | yes | Nome do componente (ex: DataTable, Modal, Stepper) |
| use_case | string | yes | Contexto de uso e requisitos funcionais |
| design_system | string | no | Design system existente para seguir |
| variants_needed | string | yes | Variantes necessárias (sizes, types, states) |
| platform | string | yes | Web, iOS, Android |

## Steps
1. Analisa requisitos funcionais e contexto de uso
2. Define anatomia do componente (partes constitutivas)
3. Projeta todas as variantes e estados (default, hover, active, focus, disabled, error, loading)
4. Especifica spacing, sizing e responsive behavior
5. Documenta accessibility (ARIA roles, keyboard navigation, screen reader)

## Output
Spec do componente contendo: anatomia com nomenclatura, todas as variantes visuais, todos os estados com specs, spacing e sizing em design tokens, responsive behavior, accessibility specs (ARIA, keyboard, screen reader), interaction patterns, e implementation notes para devs.

## Example
**Input:** Componente: Multi-select dropdown. Use case: filtro de relatório com 50+ opções. Variantes: default, small, com search, com groups.
**Output:** Spec completa: 4 variantes × 6 estados = 24 combinações. Anatomia: trigger, dropdown panel, search input, option list, group headers, selected chips, clear all. Keyboard: Arrow keys para navegar, Enter para selecionar, Esc para fechar, Type-ahead para filtrar. ARIA: role=combobox, aria-expanded, aria-multiselectable. Max-height: 320px com scroll. Chip overflow: +N counter.
