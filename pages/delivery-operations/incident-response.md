# Program Incident Response

_How Focus responds to incidents on any client engagement, whatever the contract structure._

This SOP applies to all Focus delivery engagements (subcontract, prime, and joint venture). It sits alongside the general [Compliance](compliance.md) baseline.

**What's changing:** Focus now documents every qualifying incident in a written **incident report** and runs a **formal investigation** for serious ones. The goal is a consistent record of what happened, what we did, and what we changed, so we learn from incidents and can answer for them if a client or prime asks.

---

## What Counts as a Program Incident

Report anything on this list. When you are unsure whether something qualifies, report it and let the Delivery Lead decide.

- **Security and data:** a suspected or confirmed breach, a lost or stolen device, exposure of client or government data, credential compromise, malware
- **Conduct:** harassment, discrimination, or any serious violation of the code of conduct involving program staff
- **Delivery:** a major delivery failure, a production outage, or a data-integrity problem affecting the client
- **Client relationship:** a serious client complaint, or a client escalation that could threaten the contract
- **Compliance:** unauthorized work, timekeeping falsification, working abroad without approval, or unapproved AI tool use on program content

## Severity Levels

| Severity | Examples | Notify | Report filed within |
| --- | --- | --- | --- |
| **Sev-1 — Critical** | Confirmed data breach, security compromise, credible safety or harassment concern, client threatening the contract | Delivery Lead **and** CDO immediately (within 1 hour) | 24 hours |
| **Sev-2 — Major** | Suspected breach, significant delivery failure or outage, repeated conduct issues, client complaint with contractual risk | Delivery Lead within 4 hours; CDO same day | 24 hours |
| **Sev-3 — Minor** | Near-miss, isolated process lapse, minor complaint with no contractual risk | Delivery Lead within 1 business day | 2 business days |

When severity is unclear, treat it as the higher tier until the Delivery Lead confirms otherwise.

## Immediate Response

Before writing anything up, take the first steps that limit harm:

1. **Contain it.** Stop the ongoing harm where you safely can: secure the affected system, disable the exposed credential, take the device offline.
2. **Preserve evidence.** Do not delete logs, messages, or files related to the incident. Do not wipe a device suspected of being breached.
3. **Notify** per the severity table above.
4. **Keep it need-to-know.** Discuss the incident only with the people handling it.
5. **Do not notify the client or prime yourself.** Prime and client notification windows still apply (for example, the 24-hour device-breach notification on Nava subcontracts), but the Delivery Lead or CDO coordinates that communication. Flag the deadline; do not send the notice on your own.

## Filing an Incident Report

- **Who:** the person who identifies the incident, or the Delivery Lead on their behalf
- **When:** within the window in the severity table
- **Where:** the incident register _[link to the register/form — to be added]_. Use the template below for the write-up.
- **What to capture:** use the [Incident Report Template](#incident-report-template).

Write down what you know. Record facts and label anything uncertain as uncertain. Sev-1 and Sev-2 incidents get the full report below; Sev-3 can use a short version (Summary, Impact, Timeline, Action Items).

### Incident Report Template

Adapted from Google SRE's [example postmortem](https://sre.google/sre-book/example-postmortem/). Reports are **blameless**: describe systems and decisions, not individuals at fault. The goal is to fix causes, not assign blame.

```
Incident: <short descriptive title>
ID: <e.g. INC-2026-014>       Severity: <Sev-1 | Sev-2 | Sev-3>
Program / engagement: <account and prime>
Date(s): <when it occurred>   Status: <investigating | resolved | closed>
Report authors: <names>       Owner: <Delivery Lead or CDO>

Summary
  One or two sentences: what happened, impact, and current status.

Impact
  Who and what was affected — client, users, data, delivery, the contract.
  Quantify where possible (records exposed, hours of delay, meetings missed).

Detection
  How and when we found out (alert, client report, teammate, audit).

Trigger
  The specific change or event that set the incident off.

Root cause(s)
  The underlying reason(s). Ask "why" until you reach something we can fix.

Resolution
  What we did to contain and resolve it.

Action Items
  | Action | Type (mitigate / prevent / process) | Owner | Status |
  | ------ | ----------------------------------- | ----- | ------ |
  |        |                                     |       |        |

Lessons Learned
  What went well:
  What went wrong:
  Where we got lucky:

Timeline
  All times in ET.
  HH:MM — event
  HH:MM — event

Supporting information
  Links to logs, screenshots, tickets, and related records.
```

### Worked Example

A short, illustrative Sev-2 report. Names are roles rather than individuals, in keeping with the blameless standard.

```
Incident: Client records emailed to the wrong external recipient
ID: INC-2026-014            Severity: Sev-2
Program / engagement: State benefits portal (prime: [prime])
Date(s): 2026-06-18         Status: closed
Report authors: Delivery Lead    Owner: CDO

Summary
  A weekly status export containing 42 applicant records was sent to an
  outdated distribution list that included one former client contact.
  Contained within 3 hours; no evidence of onward sharing.

Impact
  42 applicant records (name, case ID, status) exposed to one out-of-scope
  external address. No financial or SSN data included. One weekly report
  reissued to the correct list.

Detection
  A teammate noticed the stale address on the sent email and flagged it in
  the program channel within the hour.

Trigger
  A saved distribution list had not been updated after a client staffing
  change three weeks earlier.

Root cause(s)
  No owner or review step for keeping client distribution lists current;
  the export relied on a manually maintained address group.

Resolution
  Recalled where possible; requested deletion from the recipient and
  received written confirmation; corrected the distribution list; notified
  the prime and client per the 24-hour window.

Action Items
  | Action | Type | Owner | Status |
  | ------ | ---- | ----- | ------ |
  | Move status distribution to a client-owned group | prevent | Delivery Lead | done |
  | Add a quarterly distribution-list review | process | Delivery Lead | open |
  | Confirm recipient deletion in writing | mitigate | Delivery Lead | done |

Lessons Learned
  What went well: caught fast; clear notification path to the prime.
  What went wrong: no owner for keeping the distribution list current.
  Where we got lucky: the export happened to exclude SSNs this cycle.

Timeline
  All times in ET.
  09:12 — status export sent to stale list
  09:58 — teammate flags the out-of-scope recipient
  10:20 — Delivery Lead notifies CDO; deletion requested
  12:05 — written deletion confirmation received; prime notified

Supporting information
  Sent-email record, corrected distribution list, prime notification thread.
```

## Investigation

- **When:** every Sev-1 and Sev-2 incident gets a formal investigation. Sev-3 is investigated at the Delivery Lead's discretion.
- **Who runs it:** the Delivery Lead runs most investigations. The CDO owns any investigation involving security, data, conduct, or contractual implications. If the Delivery Lead is involved in the incident, the CDO takes over to keep the investigation independent.
- **Steps:**
  1. Scope the investigation and confirm severity
  2. Gather facts and preserve evidence
  3. Interview the people involved
  4. Determine root cause
  5. Decide corrective actions
  6. Document findings in the incident report
- **Timeline:** target 5 business days to a documented finding for Sev-1 and Sev-2. Give interim updates if it will take longer.
- **Confidentiality and no retaliation:** investigations are confidential. No one is retaliated against for reporting an incident or participating in an investigation, consistent with Focus's open-door policy.

## Corrective Actions and Closure

- Base corrective actions on the root cause, and assign an owner and a due date to each
- Record the resolution in the incident report and close it in the register
- Hold a short post-incident review for every Sev-1 (and Sev-2 when useful): what happened, what we changed, what to watch for
- Recurring incidents and their corrective actions feed into the [quarterly program review](subcontract-ops/#quarterly-program-review)

## Roles

- **Reporter** — anyone who identifies an incident; responsible for containment and prompt notification
- **Delivery Lead** — triages, assigns severity, runs most investigations, coordinates client/prime communication
- **CDO (Phedra Arthur Iruke)** — owns serious investigations and anything with contractual implications
- **CEO** — contract-level disputes and decisions not resolved through the CDO
- **People Operations** — partners on any incident involving conduct or HR matters

## Related

- [Compliance](compliance.md) — the baseline rules an incident often involves
- [On-Program Escalations](subcontract-ops/on-program-escalations.md) — routing delivery concerns on subcontracts
- [Compliance Investigations & Data Calls](subcontract-ops/compliance-investigations.md) — how to respond when a **prime** opens its own investigation or data call

---

> **When in doubt, report it.** A report that turns out to be minor costs little. An unreported incident that surfaces later costs far more.
