# Contribuindo para o Babilônia AIOS

Obrigado pelo interesse em contribuir! Este guia explica como contribuir de forma eficiente.

## Como contribuir

### 1. Reportar bugs

Abra uma [issue](https://github.com/rafaelsin-code/babilonia-aios/issues/new/choose) usando o template de **Bug Report**. Inclua:

- Passos para reproduzir
- Comportamento esperado vs. observado
- Screenshots quando relevante
- Versão do Node.js e sistema operacional

### 2. Sugerir melhorias

Abra uma issue com o template de **Feature Request**. Explique:

- O problema que a melhoria resolve
- A solução proposta
- Alternativas consideradas

### 3. Adicionar um novo agente

Esse é o tipo de contribuição mais valiosa. Para adicionar um agente:

1. **Identifique o squad correto** em `squads/` (ou proponha um novo)
2. **Crie o system prompt** em `squads/<squad>/agents/<agent-id>.md` seguindo o template dos agentes existentes:
   - Identity (persona completa)
   - Core Principles (5-8 princípios)
   - Frameworks (metodologias)
   - Communication Style
   - When to Use
   - Example Interaction
3. **Adicione os dados** em `src/data/squads.ts` seguindo a interface `Agent`
4. **Teste localmente** com `npm run dev`

### 4. Pull Requests

1. Fork o repositório
2. Crie uma branch descritiva: `git checkout -b feat/nome-da-feature`
3. Siga o padrão de commits (veja abaixo)
4. Garanta que o build passa: `npm run build`
5. Garanta que não há vulnerabilidades: `npm audit`
6. Abra o PR usando o template

## Padrão de commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona agente Gary Halbert ao copy-squad
fix: corrige contagem de agentes na sidebar
docs: atualiza README com nova seção de deploy
refactor: extrai lógica de busca para util
chore: atualiza dependências
ci: adiciona job de type-check
```

Tipos aceitos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`, `perf`.

## Setup local

```bash
git clone https://github.com/rafaelsin-code/babilonia-aios.git
cd babilonia-aios
npm install
npm run dev
```

Requisitos:
- Node.js 20.9+
- Git
- Claude Code (opcional, para testar os slash commands)

## Checklist antes de abrir PR

- [ ] `npm run build` passa sem erros
- [ ] `npm audit` mostra 0 vulnerabilidades
- [ ] Código segue as convenções do projeto
- [ ] Acentos em português corretos (NÃO enviar copy sem acento)
- [ ] Sem `console.log` esquecidos
- [ ] Sem arquivos `.env` ou credenciais
- [ ] Commit seguindo Conventional Commits

## Código de Conduta

Este projeto segue o [Contributor Covenant](CODE_OF_CONDUCT.md). Ao participar, você concorda em respeitá-lo.

## Licença

Suas contribuições serão licenciadas sob a [MIT License](LICENSE).
