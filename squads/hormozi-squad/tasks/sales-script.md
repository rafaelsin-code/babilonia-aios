# Task: Sales Script

**Command:** `*sales-script`
**Agent:** Hormozi Chief + Hormozi Closer
**Estimated Time:** 35 minutes

## Description
Cria um script de vendas completo usando a metodologia CLOSER de Hormozi. Projetado para chamadas de vendas consultivas, o script guia o vendedor por cada fase do processo — do rapport ao fechamento — com perguntas específicas, transições naturais e técnicas de objeção handling.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| product | string | yes | Produto/serviço sendo vendido |
| price | string | yes | Preço e condições de pagamento |
| target_audience | string | yes | Perfil do prospect na chamada |
| common_objections | string | yes | 3-5 objeções mais comuns |
| call_duration | string | no | Duração ideal da chamada (default: 30-45 min) |
| guarantee | string | no | Garantia oferecida |

## Steps
1. Hormozi Closer estrutura o script no framework CLOSER: Clarify, Label, Overview, Sell the Vacation, Explain, Reinforce
2. Desenvolve perguntas de diagnóstico que fazem o prospect vender para si mesmo
3. Cria word-for-word rebuttal para cada objeção comum
4. Hormozi Chief revisa fluxo, transições e garante que o script seja conversacional (não robótico)
5. Adiciona notas de tonalidade e timing para cada seção

## Output
Script de vendas completo contendo: abertura e rapport (2-3 min), perguntas de diagnóstico CLOSER (10-15 min), transição para apresentação (2 min), apresentação da oferta com value stack (5-7 min), fechamento com trial close (3-5 min), rebuttal scripts para cada objeção, e notas de tonalidade/coaching para o vendedor.

## Example
**Input:** Produto: mentoria de negócios R$3.000/mês. Audience: founders com R$30-100k MRR. Objeções: "preciso pensar", "está caro", "não é o momento".
**Output:** Script de 30 minutos com: abertura ("O que fez você agendar essa conversa hoje?"), diagnóstico (5 perguntas que revelam dor e custo da inação), transição ("Baseado no que você me disse..."), apresentação de valor (não features), trial close ("Faz sentido pra você?"), e rebuttals word-for-word: "Preciso pensar" → "Claro, me ajuda a entender — pensar sobre o quê especificamente?"
