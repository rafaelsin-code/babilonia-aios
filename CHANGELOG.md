# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Adicionado
- Página `/aula` com apresentação interativa scroll-based do framework
- Banner ASCII gigante ao invocar `/babilonia` no Claude Code
- Statusline azul fixa no Claude Code mostrando branding do projeto
- `.editorconfig` para consistência entre editores
- `SECURITY.md` com política de reporte de vulnerabilidades
- `CONTRIBUTING.md` com guia completo de contribuição
- `CODE_OF_CONDUCT.md` baseado em Contributor Covenant 2.1
- Templates de Issue e Pull Request em `.github/`

### Corrigido
- Contagens incorretas nos arquivos (140→87 agentes, 23→7 workflows, 100→36 tasks)
- URLs do GitHub apontando para organização errada
- Instalação falsa `npx babilonia-aios install` removida
- Elementos `<img>` substituídos por `<Image>` do Next.js (4 arquivos)
- Ordem de `@import` no CSS para compatibilidade com Turbopack

### Segurança
- Atualizado Next.js 14.2.35 → 16.2.2 eliminando 6 vulnerabilidades (5 HIGH)
- Atualizado eslint 8 → 9 para compatibilidade com eslint-config-next 16
- Adicionados security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- Pipeline CI com `npm audit --audit-level=high` em cada push

### CI/CD
- Pipeline GitHub Actions com matrix Node.js 20 e 22
- Type-check, build e audit automáticos em push e pull request

## [1.0.0] — 2026-03-22

### Adicionado
- Lançamento inicial do Babilônia AIOS
- 87 agentes distribuídos em 12 squads especializados
- 36 tasks executáveis
- 7 workflows multi-agente
- 17 slash commands nativos para Claude Code
- Site Next.js 14 com páginas: Home, Squads, Agentes, Downloads
- `CLAUDE.md` com instruções de uso do framework
- Licença MIT
