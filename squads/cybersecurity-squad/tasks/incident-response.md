# Task: Incident Response

**Command:** `*incident-response`
**Agent:** Incident Responder + Sec Chief
**Estimated Time:** 30 minutes (initial), ongoing

## Description
Ativa protocolo de resposta a incidentes de segurança. Classifica severidade, executa containment imediato, conduz investigação, e guia a empresa através das fases de detecção, contenção, erradicação, recuperação e pós-incidente.

## Inputs
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| incident_type | string | yes | Tipo: data breach, ransomware, unauthorized access, phishing, DDoS, other |
| discovery_method | string | yes | Como foi descoberto (alert, user report, external notification) |
| affected_systems | string | yes | Sistemas/dados impactados |
| timeline | string | yes | Quando começou e quando foi detectado |
| current_status | string | yes | Status atual: ongoing, contained, under investigation |
| business_impact | string | no | Impacto no negócio (operações paradas, dados expostos) |

## Steps
1. Incident Responder classifica severidade (Sev 1-4) e ativa protocolo correspondente
2. Executa containment imediato: isolamento, revogação de credenciais, preservação de evidência
3. Conduz investigação: timeline de eventos, scope assessment, root cause analysis
4. Define e executa erradicação e recuperação
5. Gera relatório pós-incidente com lessons learned e melhorias

## Output
Resposta estruturada contendo: classificação de severidade, ações de containment imediatas (checklist), plano de investigação, communication templates (técnico, executivo, externo), timeline de eventos reconstruída, root cause analysis, remediation actions, e post-mortem report com lessons learned.

## Example
**Input:** Tipo: unauthorized access. Descoberta: alerta de login suspeito em admin panel. Sistema: backoffice com dados de clientes. Timeline: detectado há 2 horas. Status: ongoing.
**Output:** Sev 2 (High). Containment imediato: (1) Reset senha admin + force MFA, (2) Revogar sessions ativas, (3) Isolar backoffice da rede pública. Investigação: revisar auth logs últimas 72h, identificar IP origem, verificar se dados foram acessados/exfiltrados. Communication: template para CEO (5 linhas), template para jurídico (checklist LGPD 72h). Post-mortem em 48h após resolução.
