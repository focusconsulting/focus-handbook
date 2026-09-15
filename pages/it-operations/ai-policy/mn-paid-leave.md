# AI Policy Addendum — MN Paid Leave DEED

_Project-specific companion to the [Focus AI Policy](./). Nava prime; DEED end client._

This addendum is the project-specific companion to the Focus AI Policy. The company policy always applies; this document records how it is *tightened* or made concrete for an engagement.

> **This addendum cannot loosen or override the company policy.**

| Field | Value |
| --- | --- |
| Project / Client | MN Paid Leave / Nava (subcontract; DEED end client) |
| Responsible team member | [Marissa McHugh](mailto:marissa.mchugh@focusconsulting.io), [Michael Kalish](mailto:michael.kalish@focusconsulting.io) |
| Date created | Aug 6, 2026 |
| Last reviewed | Aug 6, 2026 |
| Source of client rules | [GitHub Copilot Usage Guidelines](https://mnpaidleave.atlassian.net/wiki/spaces/pb/pages/1640202313/Github+Copilot+Usage+Guidelines+-+AI); [State of Minnesota enterprise security policies and standards](https://mn.gov/mnit/government/policies/security/); [State of Minnesota Artificial Intelligence Personal Productivity Security Standard](https://mn.gov/mnit/assets/Public%20Artificial%20Intelligence%20Services%20Security%20Standard_tcm38-760826.pdf) |

---

## 1. Client AI Posture

- **Client's stated position on AI use:** We can only use tools that have been explicitly approved by MNIT with client data. You do not have permission to use AI tools on this project with the exception of MN-managed GitHub Copilot. This is not permission to use other AI coding tools for delivery work. If you want permission for other tooling, talk to Ellery Royston. Do not use AI tools or AI services on this project without prior written consent by your Program Manager.
- **Disclosure expectations (does the client require notice when AI is used in a deliverable?):** Yes — if used for code, be sure to select the "USED_AI" checkbox in the template for your pull request.
- **Contractual / regulatory constraints:** MN Paid Leave claimant and employer data, official agency data, and internals are protected.
- **Client contact for AI questions:** Contract Lead (escalation path for data-classification and posture questions).

## 2. Tooling

- **Company-approved tools not permitted on this project:**
  - Only enterprise tools (in the client-approved additions section below) are permitted for official use.
  - Unofficially, Focus permits its employees to use Claude (Focus-managed) for generic coding questions or generic documentation scaffolding.
- **Client-approved additions:**
  - GitHub Copilot — MNIT-managed
- **Environment constraints:**
  - Only trigger Copilot reviews on your own PRs. You are permitted to suggest to the engineer that owns the PR that a Copilot review may be beneficial, but it is up to them to decide.
  - MN GitHub Copilot credits are limited. Monitor your own usage and specifically avoid higher-cost models like Opus 5.

## 3. Sensitive Data & What Agents May Touch

### Data classification for this project

- **What is considered sensitive / CUI / client-proprietary here:**
  - Claimant & employment data / PII (SSNs, IRS data, benefit amounts, employer info)
  - Secrets and credentials (API keys, passwords, env vars, certificates, tokens)
  - Production data (real database records, production logs with user data)
  - Research data with claimant detail (raw transcripts, recordings, contact info, anything tying a quote to an identifiable claimant)
- **Is CUI permitted in any AI tool on this project?** **No** for all categories above — this data is kept out of all AI instances to protect claimant, MN, and Nava data. When in doubt, assume the data is sensitive and keep it out of AI tools entirely. You're also always encouraged to ask a Contract Lead.
- **Data that must never touch an AI tool under any circumstance:** all of the above.

### What AI tools and agents may access (read side)

- **Systems / repos / data stores an approved tool or agent may read or connect to:** GitHub Copilot (MNIT-managed) is approved for use with the MN Paid Leave repo.
- **Systems / data an agent may not touch:** production systems, real claimant data.
- **Credentials or secrets an agent may use:** none.

## 4. Security Context

- **Where does this work run:** Client environment.
- **Production vs. non-production boundaries relevant to AI/agent use:** AI is permitted to be used only in code generation, documentation, and review activities. It should never be used within any environments, especially not production.
- **Logging / audit requirements:** Self-report any AI usage for PRs within the PR template.
- **Known constraints from the client's security control plan:** PII and secrets must not leak into any AI tool or context.

## 5. Additional Agent Restrictions

- **Additional agent restrictions for this project:** No agent operates against real claimant data or environments.
- **Per-agent human owners on this engagement:** You are responsible for everything you ship, even when AI helps.

## 6. Additional Rules or Policies

**The rule to rule them all:** You are responsible for everything you ship, even when AI helps. Private and sensitive information stays out of AI tools. You understand what you ship — code, docs, diagrams — before it goes to a reviewer or stakeholder. You do the thinking.

**AI use incidents:** All engineers must promptly report security incidents.

**Engineering / PR guidelines:** Treat AI-generated code as if written by a junior developer — review ruthlessly against expectations and current patterns. Keep PRs human-readable in size; if not, split them or walk the team through it at a team meeting.

**Attribution caution (Product & Design):** be especially careful with anything that quotes or attributes MN stakeholders or claimants. Read every quote against the source and be diligent about attribution, or remove it. AI synthesis tends to smooth over outliers and produce confident-but-ungrounded findings; if you can't point to the underlying evidence, it isn't a finding.

**Stay up to date on policies:** How we work with AI is an ever-changing landscape — be sure you're keeping up with new policies and announcements related to AI. Review all links listed in the "Source of client rules" section in the table above. Watch for updates in All Hands Meetings and Teams or Slack announcements made by Contract Leads.

## 7. Project FAQ (Living)

| Date | Question | Resolution | Resolved by |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |

---

## Sign-off

| Role | Name | Date |
| --- | --- | --- |
| Responsible Team Member | [Marissa McHugh](mailto:marissa.mchugh@focusconsulting.io) | 8/6/2026 |
| CTO | [Michael Kalish](mailto:michael.kalish@focusconsulting.io) | 8/7/2026 |
