# Task: Security Audit

**Command:** `*security-audit`
**Agent:** Sec Chief + Blue Team Lead + AppSec Engineer
**Estimated Time:** 50 minutes

## Description
Realiza uma auditoria completa de postura de segurança avaliando 6 domínios: Identity & Access Management, Data Protection, Network Security, Application Security, Incident Response e Security Culture. Entrega scorecard e roadmap de melhoria.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| company_type | string | yes | Tipo de empresa e setor |
| size | string | yes | Número de funcionários e scale |
| infrastructure | string | yes | Cloud (AWS/GCP/Azure), on-prem, hybrid |
| compliance_needs | string | no | Regulações aplicáveis (SOC2, LGPD, HIPAA, PCI-DSS) |
| current_controls | string | yes | Controles de segurança já implementados |
| past_incidents | string | no | Incidentes anteriores |

## Steps
1. Sec Chief aplica o Security Posture Assessment nos 6 domínios
2. Blue Team Lead avalia monitoramento, detecção e capacidade de resposta
3. AppSec Engineer avalia segurança das aplicações e DevSecOps maturity
4. Cada domínio é classificado de 1 (inexistente) a 5 (otimizado)
5. Gera roadmap priorizado por risco e compliance requirements

## Output
Relatório de auditoria contendo: Security Posture Scorecard (6 domínios com score 1-5), gap analysis contra compliance framework aplicável, top 10 risks ordenados por impacto × probabilidade, quick-wins (implementáveis em 2 semanas), roadmap 30/60/90 dias, budget estimado para remediação, e benchmark contra empresas do mesmo porte/setor.

## Example
**Input:** Fintech, 80 funcionários, AWS, SOC2 Type II necessário, MFA implementado, sem SIEM.
**Output:** Scorecard: IAM 3/5, Data Protection 2/5, Network 3/5, AppSec 2/5, Incident Response 1/5, Culture 2/5. Score geral: 2.2/5. Top risks: sem capacidade de detecção (no SIEM), data encryption gaps, no incident response plan. Quick-wins: implementar AWS GuardDuty (2 dias), encryption at rest no RDS (1 dia), criar IR plan template (3 dias). SOC2 readiness: 4-6 meses com roadmap proposto.
