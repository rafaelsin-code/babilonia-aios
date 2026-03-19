# Task: Generate Headlines

**Command:** `*generate-headlines`
**Agent:** Cyrus + David Ogilvy + Joe Sugarman
**Estimated Time:** 20 minutes

## Description
Gera um pacote de headlines de alta conversão para qualquer peça de copy — sales pages, emails, anúncios, blog posts. Combina a metodologia de Ogilvy (80% do resultado da copy está na headline) com a curiosidade magnética de Sugarman. Entrega headlines testáveis organizadas por tipo e abordagem.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| product_or_topic | string | yes | Produto, serviço ou tema da peça |
| target_audience | string | yes | Quem vai ler |
| key_benefit | string | yes | O principal benefício ou transformação |
| context | string | no | Onde a headline será usada (ad, email, landing page) |
| tone | string | no | Tom desejado |

## Steps
1. Cyrus define a estratégia: qual tipo de headline é mais eficaz para o contexto
2. David Ogilvy gera headlines baseadas em benefício direto, curiosidade e news angle
3. Joe Sugarman gera headlines focadas em criar "slippery slide" — curiosidade irresistível
4. Cyrus seleciona e organiza as melhores por tipo (benefit, curiosity, question, how-to, social proof)
5. Entrega pacote final com notas de quando usar cada tipo

## Output
Pacote de 15-20 headlines organizadas em 5 categorias: Benefit-driven (5), Curiosity-driven (4), Question-based (3), How-to (3), Social proof (3-5). Cada headline com nota sobre quando/onde usar.

## Example
**Input:** Produto: SaaS de automação de email. Audience: E-commerce owners. Benefício: recuperar 30% dos carrinhos abandonados.
**Output:** 18 headlines incluindo — Benefit: "Recupere 30% Dos Carrinhos Abandonados Sem Levantar Um Dedo", Curiosity: "A Razão Oculta Pela Qual 70% Dos Seus Clientes Desistem No Checkout", Question: "E Se Cada Carrinho Abandonado Voltasse Sozinho?", How-to: "Como 847 Lojas Recuperaram R$2.3M Em Vendas Perdidas Em 90 Dias".
