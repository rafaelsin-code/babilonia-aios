# Task: SEO Audit

**Command:** `*seo-audit`
**Agent:** SEO Architect
**Estimated Time:** 45 minutes

## Description
Realiza uma auditoria completa de SEO em 5 categorias: Technical, Content, On-Page, Off-Page e UX. Usa o framework de 100 pontos para avaliar a saúde do site e identifica quick-wins e melhorias estratégicas.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| website_url | string | yes | URL do site a auditar |
| primary_keywords | string | yes | 5-10 keywords prioritárias |
| competitors | string | yes | 3-5 concorrentes em search |
| current_traffic | string | no | Tráfego orgânico atual |
| search_console_data | string | no | Dados do Google Search Console |
| business_goals | string | yes | Objetivos do site (leads, vendas, awareness) |

## Steps
1. Technical audit: crawlability, indexation, site speed, Core Web Vitals, mobile, structured data
2. Content audit: quality, intent match, gaps, cannibalization, freshness
3. On-Page audit: titles, headings, internal linking, URL structure
4. Off-Page audit: backlink profile, domain authority, brand mentions
5. UX audit: engagement metrics, Core Web Vitals, mobile experience

## Output
Relatório de auditoria contendo: SEO Health Score (0-100), breakdown por categoria (Technical, Content, On-Page, Off-Page, UX), top 10 issues ordenados por impacto, quick-wins (implementáveis em 1 semana), content gaps vs. competidores, backlink gap analysis, e roadmap SEO 30/60/90 dias.

## Example
**Input:** URL: saas-example.com. Keywords: "project management software", "team collaboration tool". Concorrentes: Monday, Asana, Trello.
**Output:** SEO Score: 52/100. Technical: 18/30 (Core Web Vitals failing, 200 pages not indexed). Content: 12/25 (thin content, no blog, keyword cannibalization em 3 clusters). On-Page: 10/20 (missing H1s on 40% of pages, no internal linking strategy). Off-Page: 7/15 (DA 25 vs competitors DA 70+). UX: 5/10 (LCP 4.2s). Quick-wins: fix canonical tags (+5pts), add H1s (+3pts), compress images (+4pts). Roadmap: technical fixes month 1, content cluster strategy month 2, link building month 3.
