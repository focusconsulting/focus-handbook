# AI Policy Addendum — NJ UI

_Project-specific companion to the [Focus AI Policy](./). Nava prime; NJDOL end client._

This addendum is the project-specific companion to the Focus AI Policy. The company policy always applies; this document records how it is *tightened* or made concrete for an engagement.

> **This addendum cannot loosen or override the company policy.**

| Field | Value |
| --- | --- |
| Project / Client | NJ UI / Nava (subcontract; NJDOL end client) |
| Responsible team member | Lowell Wood, Michael Kalish |
| Date created | May 21, 2026 |
| Last reviewed | August 3, 2026 |
| Source of client rules | [Nava Confluence — AI Tool Use Policy](https://navasage.atlassian.net/wiki/spaces/NJUI/pages/3145793596/NJ+UI+AI+Policy); NJDOL AI Coding Rules of Conduct |

---

## 1. Client AI Posture

- **Client's stated position on AI use:** NJ (NJDOL) leadership has approved AI use on the program. The SMEs Focus works with day to day are still becoming familiar with what that means in practice, so the working posture is "approved, but actively build trust with NJ staff."
- **Disclosure expectations:** Not a formal disclosure regime — no per-artifact tagging or prompt logging. Norm: if AI was *meaningfully involved* in something an NJ teammate will review, build on, or rely on, say so in a short note. No note needed when AI didn't shape the artifact (summarizing your own notes, catching a typo, spotting a bug). Working test: *would the NJ teammate feel caught off guard if they learned about the AI use later?* If NJ staff raise questions, take them seriously and explain what AI did and didn't do — do not fall back on "leadership approved this."
- **Contractual / regulatory constraints:** Unemployment-insurance claimant data, IRS data, and NJDOL legacy-system internals are protected; see §3. Work runs under Nava's enterprise tooling and accounts.
- **Client contact for AI questions:** Contract Lead (escalation path for data-classification and posture questions).

## 2. Tooling

- **Company-approved tools not permitted on this project:** For any work where an LLM accesses existing NJDOL code, only enterprise tools (below) are permitted.
- **Client-approved additions:**
  - GitHub Copilot CLI — org-managed licenses via GitHub
  - Amazon Transform
  - Claude Code
  - Figma Make
  - Dovetail
- **Environment constraints:**
  - Existing NJDOL code: only the enterprise tools above.
  - New / greenfield work (prototyping a new idea before it goes to the client or into a codebase): any AI tool that serves the purpose is acceptable, provided it runs against **greenfield code (not NJDOL) and synthetic data only**. The majority of AI work should still route through the approved tools.
  - Subcontractors are approved to use their own company's AI tools.

## 3. Sensitive Data & What Agents May Touch

### Data classification for this project

- **What is considered sensitive / CUI / client-proprietary here:**
  - PII and claimant data (SSNs, IRS data, benefit amounts, employer info)
  - Secrets and credentials (API keys, passwords, env vars, certificates, tokens)
  - Production data (real database records, production logs with user data)
  - Legacy system internals (LOOPS COBOL source, mainframe configs, anything carrying embedded claimant data or business rules tied to PII)
  - Research data with claimant detail (raw transcripts, recordings, contact info, anything tying a quote to an identifiable claimant)
- **Is CUI / sensitive data permitted in any AI tool on this project?** **No** for all categories above — this data is kept out of all AI instances to protect claimant, NJ, and Nava data. The table covers the obvious cases; use judgment on transcripts with names, internal artifacts that reference real data, and screenshots from systems that might contain real records. When in doubt, ask the Contract Lead.
- **Data that must never touch an AI tool under any circumstance:** all of the above.

### What AI tools and agents may access (read side)

- **May read / connect to:** greenfield (non-NJDOL) code and synthetic data for prototyping. NJDOL repos may be worked in only with the nj-ui-ai-starter scaffold installed (Git hooks/configs that scan for sensitive information before it leaves the machine).
- **May not touch:** production systems, real claimant data, legacy mainframe internals (see §3 classification).
- **Credentials or secrets an agent may use:** none.

## 4. Security Context

- **Where this work runs:** modern (greenfield) system for prototyping and build-out; legacy mainframe integration handled separately and later. Prototypes run on synthetic data / greenfield code only.
- **Production vs. non-production boundaries:** prototypes do not touch NJDOL code or real claimant data. Anything touching NJDOL code requires the scanning scaffold.
- **Logging / audit requirements:** nj-ui-ai-starter Git hooks scan for sensitive info pre-egress; .claude directories carry hooks to lint, do light debugging, and search for PII/secrets.
- **Known constraints from the client's security control plan:** PII and secrets must not leak into any AI tool or context; scanning is the enforcing control.

## 5. Additional Agent Restrictions

- **Additional agent restrictions for this project:** agents/tools operating against NJDOL repos must run behind the nj-ui-ai-starter PII/secret scanning hooks. No agent operates against real claimant data, production systems, or the legacy mainframe.
- **Per-agent human owners:** you are responsible for everything you ship, even when AI helps. A PR must be reviewed by another human before merge; use co-authored-by to note which AI tool was used.

## 6. Additional Rules or Policies

**The rule to rule them all:** You are responsible for everything you ship, even when AI helps. Private and sensitive information stays out of AI tools. You understand what you ship — code, docs, diagrams — before it goes to a reviewer or stakeholder. You do the thinking.

**NJ UI AI values:** Be judicious (just because you can doesn't mean you should). Be curious. Build on what we know (don't amplify what's already broken). Be kind (don't ask teammates to read code or words you haven't read yourself).

**Engineering / PR guidelines:** Treat AI-generated code as if written by a junior developer — review ruthlessly against expectations and current patterns. Keep PRs human-readable in size; if not, split them or walk the team through it at eng sync. A second AI tool may support code review but does not replace human review or your own review. Human review before merge to main is required. Set up the nj-ui-ai-starter scaffold in any NJDOL repo you work in.

**Known AI failure modes to watch for on this project:** hallucinated APIs/functions/file paths (verify against codebase or vendor docs — "if you can't find it, it doesn't exist"); plausible-but-wrong tests and tests that over-couple to internals; confident misreadings of legacy NJDOL/COBOL code (verify against the file and with SMEs). Share caught failures in Eng Sync or #nj-ui-engineering-shared.

**Attribution caution (Product & Design):** be especially careful with anything that quotes or attributes NJ stakeholders or claimants. Read every quote against the source and be diligent about attribution, or remove it. AI synthesis tends to smooth over outliers and produce confident-but-ungrounded findings; if you can't point to the underlying evidence, it isn't a finding.

## 7. Project FAQ (Living)

| Date | Question | Resolution | Resolved by |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |

---

## Sign-off

| Role | Name | Date |
| --- | --- | --- |
| Responsible Team Member | Lowell Wood | 8/3/2026 |
| CTO | Michael Kalish | 8/3/2026 |
