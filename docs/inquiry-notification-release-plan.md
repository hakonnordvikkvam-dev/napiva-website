# Website inquiry notification — release plan

Status: **PLANNED — no notification integration deployed**  
Reviewed: 29 October 2026

## What is verified

The current `/start-project` page sends ordinary business inquiry data straight to Supabase `public.project_inquiries`. A hosted Netlify preview submitted a synthetic record, database storage was verified, and the exact synthetic record was removed.

The inquiry table has **no custom trigger** and the website Supabase project has **no deployed Edge Functions**. No automatic per-inquiry email delivery has been independently verified. The displayed success confirmation means that a database insert completed; it does not prove that an internal notification was sent.

The existing automated Supabase status check monitors project **health**, not new inquiries. The monthly privacy reminder relates to **retention and deletion**, not sales follow-up.

## Interim handling without new integrations

Until notification delivery is tested, the authorized person handling Napiva inquiries must check the designated website Supabase dashboard each business day and follow up on new ordinary business inquiries. Avoid copying inquiry personal data into separate unmanaged lists or support chats.

The fallback address `haakon@napiva.com` is visible when the website form fails. A harmless test email was sent to this address, but its delivery to the actual destination inbox has **not** been verified. An email-sending confirmation is not enough to claim this fallback works.

## Preferred technical path to evaluate, not implement blindly

Supabase supports Database Webhooks on `INSERT` events using asynchronous `pg_net` requests. One possible design is a dedicated backend notification handler with tightly scoped authentication and an approved email-delivery provider. The website's own public form should not need a privileged key.

**Privacy/security requirements:**

- Do not send full patient, medical, or other unexpected sensitive free-text data through notification emails.
- Prefer a minimal alert containing no contact details or full inquiry contents: for example, “New website inquiry received — open the authorized Supabase dashboard.”
- Keep backend service credentials out of public code and out of SQL migration source; use approved secret storage and provider verification.
- Reject unauthenticated forged events; document retries, duplicate events, failure handling and monitoring.
- Do not assume this fixes spam. Public direct database inserts may still be abused; treat throttling or challenge verification as a separate problem.
- Confirm the actual owner of the target notification inbox and the processing terms of any additional provider before using real data.

## Verification criteria before calling it live

1. Approve the notification destination and provider, and confirm the sender/receiver account access. No paid plan changes without authorization.
2. Submit **one clearly synthetic** inquiry in a nonproduction environment. Verify the exact database row and the minimal notification at the actual destination inbox.
3. Prove the handler rejects requests without correct credentials, and that no secret appears in browser bundles or response payloads.
4. Verify a duplicate or failed delivery cannot silently result in misleading success claims. Keep a visible/manual recovery path.
5. Delete only the exact synthetic database record and verify deletion; avoid reading or changing unrelated customer data.
6. Record the proven results and residual risks in the Napiva Master Log. Only after explicit owner approval should the architecture be applied to production.

**Not suitable as a quick workaround:** a raw public webhook to an unverified inbox, a notification handler accepting anonymous requests without authentication, or copying all form fields into an additional unapproved datastore.

References:
- https://supabase.com/docs/guides/database/webhooks
- https://supabase.com/docs/guides/database/extensions/pg_net

This is a design and test plan. It does **not** represent a deployed notification feature.
