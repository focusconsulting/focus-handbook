# AI Policy Addendum — [PROJECT / CLIENT NAME]

_Project-specific companion to the [Focus AI Policy](./). Copy this template to create a new engagement's addendum._

This addendum is the project-specific companion to the Focus AI Policy. The company policy always applies; this document records how it is *tightened* or made concrete for an engagement.

> **This addendum cannot loosen or override the company policy.**

| Field | Value |
| --- | --- |
| Project / Client |  |
| Responsible team member |  |
| Date created |  |
| Last reviewed |  |
| Source of client rules (if available) |  |

---

## 1. Client AI Posture

_The client's own stance on AI use, in their words where possible. This frames everything below. If the client has a written AI policy, link or cite it here and note its authority level._

- Client's stated position on AI use:
- Disclosure expectations (does the client require notice when AI is used in a deliverable?):
- Any contractual or regulatory constraints that bind AI use on this engagement (e.g., FedRAMP boundary, CUI handling, ITAR, StateRAMP):
- Client contact for AI questions (if any):

## 2. Tooling

_This section records the specific tooling allowed, including which Focus-approved tools can be used and what client-specific tooling is in use on the project._

- Company-approved tools not permitted on this project:
- Client-approved additions:
- Environment constraints:

## 3. Sensitive Data & What Agents May Touch

_Define what counts as sensitive on THIS engagement, and what any AI tool or agent is allowed to read, access, or be exposed to._

### Data classification for this project

- What is considered sensitive / CUI / client-proprietary here:
- Is CUI permitted in any AI tool on this project? **[No / Yes — if yes, cite the client's explicit, documented permission and the exact authorized boundary]**
- Data that must never touch an AI tool under any circumstance:

### What AI tools and agents may access (read side)

- Systems / repos / data stores an approved tool or agent may read or connect to:
- Systems / data an agent may not touch:
- Credentials or secrets an agent may use (default: none without named approval):

## 4. Security Context

_The environment this work runs in, so an engineer knows the blast radius before acting._

- Where does this work run (local, Focus cloud, client environment, isolated enclave)?
- Production vs. non-production boundaries relevant to AI/agent use:
- Logging / audit requirements for AI or agent activity on this engagement:
- Known constraints from the client's security control plan:

## 5. Additional Agent Restrictions

_As captured in the company policy, autonomous AI agents present a unique risk for clients and their systems. This section must capture what additional restrictions must be placed on operating an autonomous agent (e.g., no access to production systems)._

- Additional agent restrictions for this project:
- Agent actions this client explicitly prohibits:
- Per-agent human owners on this engagement:

## 6. Additional Rules or Policies

_This section should capture any additional details that do not fit into the sections above. For example, a policy stating that usage of Claude Code is allowed, but only for those participating in a client pilot._

-

## 7. Project FAQ (Living)

_As noted in the company policy, as team members encounter specific questions in a project context they are escalated to their people manager to help track down a resolution. The resolution should be captured in this section._

| Date | Question | Resolution | Resolved by |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |

---

## Sign-off

| Role | Name | Date |
| --- | --- | --- |
| Responsible Team Member |  |  |
| CTO |  |  |
