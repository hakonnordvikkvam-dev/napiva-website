# Napiva website inquiry data: operating procedure

**Owner:** NAPIVA KVAM (organisation number 938 698 465)  
**Scope:** ordinary business enquiries submitted via `/start-project`, **not patient data**  
**Status:** documented operating procedure; execution and vendor/account checks are not thereby verified  
**Last reviewed:** 29 October 2026

## System and access

- The website submits ordinary business enquiries to the `public.project_inquiries` table in the designated Supabase website project (`bfsjmuhztzajiftwcwec`, EU/Ireland region).
- The web client uses a **publishable** Supabase key. Do not use a database password or service-role key in browser code.
- Current database controls have been independently tested: RLS enabled; anonymous role can INSERT only; it cannot SELECT, UPDATE or DELETE. The RLS policy validates basic field shapes and lengths.
- Anyone with appropriate Supabase dashboard privileges can still see enquiry contents. Limit dashboard membership to people who genuinely handle these enquiries, use MFA, and do not send exports or screenshots containing personal information to support chats.
- No clinical/medical details should be solicited or used in this workflow. If received unexpectedly, restrict disclosure and determine prompt appropriate deletion or escalation.

## Monthly review and deletion

The public privacy policy says enquiries are reviewed **at least once per month**. This is an actual task, **not** an automated deletion feature.

At least monthly, the person responsible must:

1. Open the designated Supabase project and view the website enquiry table through an authenticated, authorized dashboard session.
2. Determine for each enquiry whether it is awaiting a reply, needed for a specific ongoing proposal/follow-up, or no longer needed.
3. Respond to open business enquiries using the contact details provided for that purpose only. Do not add people to marketing lists from form submissions.
4. Delete enquiries no longer needed. Record the **review date, count reviewed, count deleted and reason categories** in a private operating log — not the enquiries' personal details.
5. If there is a documented legal obligation or dispute requiring retention, keep only what is necessary, document the basis and re-review it later.

No blanket retention deadline is asserted here. The privacy policy currently describes a necessity-based retention criterion and monthly manual review. Review and update the public policy if actual handling changes.

## Requests by individuals

After draft PR #5 is authorized and deployed, requests for access, correction, erasure, objection or restriction can arrive at `haakon.nordvik.kvam@gmail.com`. Production contact routing may still use the original address until that release is complete.

- Confirm you are dealing with the relevant person without requesting unnecessary extra information.
- Identify which enquiry record(s) relate to the request; do not disclose any other person's data.
- Assess the applicable GDPR right and exceptions. Record only minimum metadata needed for the request's audit trail.
- Respond within the applicable legal deadline and explain any lawful extension or refusal. Escalate uncertain cases for qualified advice.

## Provider and transfer verification before production sign-off

Public documentation exists for Netlify and Supabase DPAs and transfer safeguards. **Published terms alone do not verify Napiva's account identity, which entity controls an inaccessible Netlify site, email-provider arrangements, or that all relevant contractual and transfer checks are complete.**

Confirm and record:
- Which account and legal entity operates the currently live `stately-frangipane-d35677` Netlify site, and who can control its production deployments, billing and data.
- Which Netlify and Supabase DPA terms are applicable to Napiva's actual accounts, their current subprocessor disclosures, transfer mechanisms and available safeguards.
- Email service providers handling contact messages, their data-handling terms, and whether email copies are retained after database records are deleted.
- Whether the actual website uses optional analytics, marketing tracking or cookies; update the public policy only after verified changes.

Relevant public references:
- https://supabase.com/legal/customer-resources/data-processing-addendum
- https://supabase.com/legal/privacy-resources/data-residency-and-transfers-faq
- https://www.netlify.com/gdpr-ccpa/
- https://www.helsedirektoratet.no/normen/formal-og-behandlingsgrunnlag-faktaark-56/alminnelig-behandlingsgrunnlag/berettiget-interesse

## Anti-abuse controls and remaining exposure

Currently verified: form/browser field limits, a basic honeypot, database field validation and least-privilege anonymous access. These stop certain invalid submissions but **do not prevent repeated valid automated INSERT requests** to Supabase's public API.

Netlify Free supports path-based code rate limits for Netlify functions/edge functions/redirects, but **those do not automatically cover direct browser-to-Supabase calls**. Do not claim rate limiting is implemented merely because Netlify offers it.

For stronger protection, design and separately test a server-verified challenge or an authenticated/rate-limited submission endpoint **with no secret key in the browser**. Ensure direct unauthenticated database INSERT cannot bypass whatever control is chosen. This needs a controlled architecture change and appropriate private server configuration; no such protection is represented as already implemented.

Until then, monitor for anomalous volume, review platform quota alerts, and avoid claiming guaranteed spam protection.

## Release and incident safeguards

- Release only with written approval after checking the final Git commit, hosted preview, contact form submission/readback/cleanup, correct site ownership, build-time config and rollback plan.
- Do not merge a PR or modify DNS merely because preview checks are green; merges may trigger production deployments.
- If the enquiry form fails, show the existing email fallback and investigate network/build configuration without exposing personal data or secrets.
- For suspected unauthorized access or a data incident, limit access, retain operational evidence safely, assess statutory notification duties and get qualified advice when necessary.
- Record whether controls are **VERIFIED**, **USER-REPORTED** or **PLANNED** in the Napiva Master Log.

This document is an operating checklist, not a certification of GDPR compliance or a substitute for professional legal advice.
