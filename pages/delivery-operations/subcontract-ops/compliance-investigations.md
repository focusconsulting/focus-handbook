# SOP: Compliance Investigations & Data Calls

_How Focus responds when a prime contractor or client initiates an investigation or data call involving a Focus team member — including overseas IP flags, AI tool use, and alleged contract non-compliance._
**Scope** All prime subcontracts (Nava, eSimplicity, Accenture, and others) · **Version** 1.0 · **Owners** Delivery Lead, CDO

**Key principle** Focus cooperates with legitimate investigations — but cooperation does not mean unconditional compliance. Every request deserves scope, legal basis, and proportionality before Focus hands anything over.

## Purpose

Establish a clear process for how Focus receives, evaluates, and responds to compliance investigations or data calls initiated by a prime contractor or client. This covers the most common triggers — overseas IP activity, AI tool use flags, and allegations of conduct violations — and includes a framework for pushing back on requests that are overbroad, technically invasive, or inconsistent with Focus's culture and obligations to its staff.

## Background

These requests currently arrive via email and Slack, typically directed to the CDO. As Focus matures, the intent is to pass this workstream to Delivery Leads, with the CDO serving as an escalation point rather than the first responder. This SOP is written to enable that transition: Delivery Leads should be able to receive, triage, and respond to most requests without CDO involvement, escalating only when the request is ambiguous, contested, or legally significant.

A recurring tension on engineering-heavy programs: some compliance requests (keystroke logging, continuous screen capture, invasive device monitoring) conflict with how Focus builds trust with its technical staff. This SOP includes guidance on how to push back thoughtfully without damaging the prime relationship.

## Contracts Team on All Prime Communications

All written communications with primes related to a compliance investigation or data call — including the initial acknowledgment, scope clarification exchanges, and any formal response — must CC **contracts@focusconsulting.io**. This applies from the first response, not only once the situation escalates.

## Common Investigation Triggers

| Trigger | Typical Source | Notes |
| --- | --- | --- |
| Overseas IP detected on client systems | Prime contracts team or client security | Often a VPN, travel, or home-network issue — not inherently a violation |
| AI tool use flagged on client network | Client IT or prime compliance | Policy varies widely; clarify which policy applies before assuming a violation |
| Alleged conduct, attendance, or overemployment violation | Prime PM or contracts team | Nava-specific: should come to Focus Delivery Lead, not program-side staff |
| General data call (audit, record request) | Prime or client contracting officer | May be routine compliance, not an investigation — clarify before treating it as one |

## Process Steps

### Step 1: Receive and Log

When a compliance request or investigation notice arrives — via email, Slack, or any channel — the Delivery Lead (or CDO, until that transition occurs) logs it immediately:

- Date and time received
- Channel (email, Slack, call)
- Sender name and role
- Nature of the request as described
- Any deadline stated

Do not begin gathering information or contacting the affected team member until Step 2 is complete. Acting before internal alignment creates inconsistent stories and can inadvertently waive Focus's right to push back.

### Step 2: Internal Alignment

Before any external response, the Delivery Lead and CDO align on:

- What exactly is being requested
- Whether the request is routine (audit, documentation) or investigative (allegations, potential violations)
- Whether legal or HR involvement is warranted at this stage
- Who the single Focus point of contact will be for the external response

If the request involves potential termination, legal exposure, or HR action, the CDO loops in legal counsel before responding. Do not estimate legal exposure internally and proceed on that estimate.

### Step 3: Request Clarification and Scope

Before complying, Focus asks the prime to confirm in writing:

- The specific contractual or policy basis for the request
- The precise scope (which systems, which time window, which data types)
- The intended use of the information gathered
- The timeline and format expected

This is not obstruction — it is standard practice. A well-scoped request protects the prime as much as it protects Focus. Any request that cannot be scoped in writing should be treated as a signal to slow down and involve the CDO and, if needed, legal counsel.

### Step 4: Evaluate the Request Against Focus Obligations

Before gathering or sharing anything, evaluate the request against three questions:

**Is it proportionate?** A foreign IP flag from a team member who traveled to Canada does not warrant full device imaging. Match the response to what the facts actually support.

**Is it consistent with Focus's obligations to its staff?** Focus has duties to its employees and contractors: privacy, due process, and protection from retaliation. Requests that would require Focus to surveil staff without their knowledge, access personal data unrelated to the contract, or bypass Focus's own HR process require the CDO to sign off before proceeding.

**Does it conflict with Focus's engineering culture?** Some clients and primes request monitoring tools or access methods that Focus's engineering staff would experience as surveillance rather than compliance. Before agreeing to implement any persistent monitoring on Focus-owned devices or accounts, escalate to the CDO. Focus's default position is to propose less invasive alternatives (audit logs, access records, output review) and to ask for the specific risk the prime is trying to mitigate before agreeing to the monitoring approach they've proposed.

### Step 5: Pushing Back Thoughtfully

When a request is overbroad, technically invasive, or inconsistent with Focus culture, the Delivery Lead can push back without damaging the relationship. Useful approaches:

- **Ask what problem they're trying to solve.** "Help us understand the underlying concern so we can propose the most targeted response." This often surfaces that the prime is satisfying a client ask they also find excessive, and opens room to propose an alternative together.
- **Propose a scoped alternative.** "We can pull access logs for that account for the dates in question — would that address the concern?" Offering something specific is more productive than a flat no.
- **Put the ask in context.** "We want to cooperate fully — before we proceed, can you confirm which policy or contract clause this falls under?" A request that can't be tied to a specific obligation is easier to narrow.
- **Involve the CDO visibly.** For requests that are legitimately hard to push back on alone, the CDO can be the one to have the conversation with the prime's contracts team. This protects the Delivery Lead's working relationship with the Nava PM.

### Step 6: Notify the Affected Team Member

Before gathering any information about a specific Focus team member, that person is notified by the Delivery Lead:

- What has been alleged or flagged
- What Focus has been asked to provide
- What Focus's response will be
- What the person should and should not do (e.g., preserve relevant records, do not delete communications)

Focus does not conduct covert investigations of its own staff on behalf of a prime contractor. If the prime requests that the team member not be notified, the CDO determines whether that request is legally supportable before agreeing.

### Step 7: Gather and Share Information

Once scope is confirmed and the affected team member is notified, the Delivery Lead gathers the requested information per the agreed scope. All information shared externally is:

- Reviewed internally before transmission
- Transmitted via documented channel (email with a clear subject, not Slack)
- Logged with date, recipient, and what was shared

### Step 8: Close the Loop

Once the investigation or data call is resolved, the Delivery Lead documents the outcome and communicates it to the affected team member and relevant Focus leadership. If the outcome includes a contractual or personnel action, the CDO confirms whether follow-on documentation is required.

## Escalation to CDO

The Delivery Lead escalates to the CDO when:

- The request involves potential legal exposure for Focus or a Focus team member
- The prime is requesting access to Focus-owned systems, devices, or accounts beyond documented audit logs
- The request conflicts with Focus's HR process or obligations to staff
- The prime has indicated the investigation may result in removal of a Focus team member
- The Delivery Lead and prime cannot agree on scope after one round of clarification
