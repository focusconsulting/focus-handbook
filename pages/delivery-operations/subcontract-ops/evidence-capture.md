# SOP: Evidence Capture from Focus Machines

_What to do when a prime contractor requests logs, screenshots, configuration settings, or other data from a Focus-owned device._
**Scope** All prime subcontracts (Nava, eSimplicity, Accenture, and others) · **Version** 1.0 · **Owners** Delivery Lead, CDO, IT Support

**Key principle** Legal review is a hard gate — not a suggestion — before Focus collects or shares any device-level data. Focus reviews everything before it leaves, and no data is transmitted to a prime directly from a team member's machine without that review.

## Purpose

Establish a consistent process for handling requests from prime contractors for data from Focus-owned laptops or accounts — including system logs, browser history, application settings, screenshots, and configuration exports. These requests arise in the context of compliance investigations, security audits, or client-driven data calls.

This SOP applies to all primes, not only Nava. Any prime contractor directing Focus to produce device-level data must go through this process.

## Is This Even Legal?

This is not a rhetorical question. Before Focus collects or shares any device-level data from a Focus-owned machine, the legality must be confirmed. Employee device privacy is governed by state law, and the rules vary significantly across Focus's operating footprint:

- **California** has some of the strongest employee monitoring protections in the country. Employers generally must notify employees of any monitoring, and collecting data from a personally-owned or Focus-owned device without consent raises CCPA and Labor Code issues.
- **New York, Illinois, and other states** Focus operates in have their own notice and consent requirements for electronic monitoring.
- **Federal law** (the Electronic Communications Privacy Act and the Computer Fraud and Abuse Act) may also apply depending on the type of data and the method of collection.

A prime contractor requesting data from a Focus device does not give Focus legal authority to collect it. The prime's contractual relationship is with Focus as an entity — not with individual Focus employees' devices or personal data.

**Legal counsel must be consulted before Focus complies with any request that involves collecting data from a Focus-owned device.** The CDO initiates that consultation. This is a hard gate, not a judgment call the Delivery Lead makes alone.

## Background

Focus team members work on their own machines. Unlike a staffing firm that provisions client-owned hardware, Focus staff use Focus-owned (or personally-owned) laptops, which may also contain personal data, credentials to non-client systems, and confidential information from other Focus engagements. A request for "all logs from that machine" is therefore not equivalent to a request for a client-owned system image, and should not be treated as one.

The goal is to cooperate with legitimate requests while protecting staff privacy, Focus confidentiality across programs, and the integrity of any investigation by maintaining a documented chain of custody.

## Contracts Team on All Prime Communications

All written communications with primes related to an evidence capture request — including the initial response, scope clarification, and transmission confirmation — must CC **contracts@focusconsulting.io**. This applies from the first response, not only once the situation escalates.

## What "Evidence Capture" Covers

- System or application logs (VPN, browser, OS-level activity)
- Screenshots or screen recordings
- Application configuration or settings exports
- Network access records or authentication logs
- Email or Slack exports related to specific communications

Requests for anything beyond these categories — full disk images, keychain exports, password vaults, personal email or personal accounts — require CDO and legal sign-off before Focus responds.

## Process Steps

### Step 1: Receive and Confirm the Request in Writing

All evidence capture requests must be confirmed in writing before Focus takes any action. If the initial request comes via Slack or a phone call, the Delivery Lead asks the prime to follow up with an email that specifies:

- What data is being requested
- Which device(s), account(s), or time window(s) are in scope
- The contractual or policy basis for the request
- The format and delivery method expected
- The deadline

A verbal request with no written follow-up is not a request Focus acts on. The Delivery Lead's written response to the prime must CC contracts@focusconsulting.io.

### Step 2: Open an IT Ticket and Notify Internal Stakeholders

As soon as a written request is received, the Delivery Lead posts to the **#it-support** Slack channel using the code **ECA** (Evidence Capture Action) followed by a sequential number (e.g., `ECA-001`). The public post contains only the code and a note that a request is in process:

> `ECA-001 — request received, details in thread`

Full context — which prime, what was requested, which team member is affected — is shared in a **private Slack thread or direct message** with the CDO, contracts@focusconsulting.io, and **Kalish** (current IT support owner). Do not include sensitive investigation details in the public channel. This keeps the audit trail intact without broadcasting the situation to the broader team.

The Delivery Lead also forwards the written request to the CDO and contracts@focusconsulting.io at this step.

### Step 3: Legal Review (Hard Gate)

Before any data is gathered, the CDO initiates legal review. Legal counsel confirms:

- Whether Focus is legally permitted to collect the requested data from the device(s) in question
- Which state's law governs, given the staff member's location
- Whether employee consent is required, and in what form
- Whether any data in scope would require separate notice or authorization (e.g., personal data, data from non-contract accounts)

Focus does not proceed to data collection until legal counsel has cleared the request, in writing. If legal counsel cannot be reached within the prime's stated deadline, the Delivery Lead notifies the prime that Focus needs additional time and requests an extension.

### Step 4: Internal Alignment

With legal input in hand, the Delivery Lead and CDO align on:

- Whether to comply, partially comply, or push back
- The exact scope Focus will collect (which may be narrower than what was requested)
- Whether any portion of the request will be declined, and how to communicate that
- Whether the affected team member needs to be notified before capture begins (default: yes, unless legal counsel advises otherwise)

### Step 5: Notify the Affected Team Member

The affected Focus team member is notified before any data is collected from their machine. Notification includes:

- What has been requested and by whom
- What Focus will collect and what it will not
- Whether the team member is expected to assist with the collection or whether Focus will handle it independently
- A reminder not to delete, modify, or move any files or logs that may be relevant

If the prime has requested that the team member not be notified in advance, that request must be cleared by legal counsel before Focus agrees to it.

### Step 6: Collect Only What Was Approved

The Delivery Lead coordinates the collection with the team member and the IT support contact. Collection is limited strictly to the legally approved and agreed scope. If during collection additional potentially relevant data is discovered that was not in scope, do not include it — flag it to the CDO first.

All collected data is stored in a Focus-controlled location (not transmitted to the prime yet) and logged with:

- Date and time of collection
- Who performed the collection
- What was collected and from which device or account
- A hash or file listing to establish what was captured
- The ECA ticket number for cross-reference

### Step 7: Internal Review Before Transmission

Before anything is sent to the prime, the Delivery Lead and CDO review the collected data to confirm:

- It matches the approved scope — nothing more, nothing less
- It does not include credentials, personal data, or confidential information from other engagements
- The format matches what the prime requested

If review reveals out-of-scope sensitive material, it is redacted or excluded, and the prime is notified of the exclusion and the reason.

### Step 8: Transmit via Documented Channel

Evidence is transmitted via a documented, traceable channel — email with a clear subject line, a secure file transfer, or a shared drive with access logging. It is not sent via Slack or informal channels. The transmission email CCs contracts@focusconsulting.io.

The transmission is logged with:

- Date and time sent
- Recipient name and role
- What was included
- Method of transmission
- ECA ticket number

### Step 9: Close the Loop

Focus retains a copy of everything transmitted, labeled with the ECA ticket number, request date, and prime contact. The Delivery Lead notifies the affected team member that the data has been shared, what was included, and with whom. The ECA ticket is marked closed with the outcome noted.

If the request was part of an active investigation, the CDO confirms whether Focus needs to preserve the original data pending any further action.

## What Focus Will Not Do

- Collect or transmit device-level data before legal review is complete
- Transmit data directly from a team member's machine to the prime without internal review
- Provide full disk images, keychain exports, or access to non-contract accounts without CDO and legal approval
- Allow a prime's personnel to access a Focus-owned machine directly, remotely or in person, without CDO authorization
- Act on a verbal request with no written confirmation
- Collect data covertly from a team member's machine without notifying that team member, unless legal counsel has specifically cleared that approach
- Share investigation details in public Slack channels — all sensitive context stays in private threads referenced by ECA ticket number
