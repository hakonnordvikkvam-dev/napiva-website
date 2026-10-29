# Website release checkpoint — 29 October 2026

## Verified

- Original three local legal changes were inspected and preserved. Original diff backed up outside the repository.
- Current public DNS already points to Netlify: `www.napiva.com` CNAME `stately-frangipane-d35677.netlify.app`, apex `75.2.60.5`. Both public requests returned Netlify headers. No DNS changed.
- Public deployed JavaScript contains `https://lngpcmqmyqsuvvvzsqhn.supabase.co`; this actual hostname returns ENOTFOUND. Earlier handoff transcription with `myas` was incorrect. The inaccessible project's status/ownership is unknown.
- Intended restored website project `bfsjmuhztzajiftwcwec` is ACTIVE_HEALTHY, Ireland. RLS is enabled; three pre-existing enquiries were preserved without reading their contents. Approval-dev was untouched.
- Local browser form with matching existing modern publishable key inserted synthetic rows, displayed success, and independent exact-row SQL verified storage. Tests covered desktop and 390px mobile, including optional company.
- Anonymous REST reads returned HTTP 401 / SQLSTATE 42501. Two scoped test rows were deleted, independently restoring baseline three rows and zero test rows.
- Deliberately invalid local public key produced the generic error, preserved field values and reenabled Submit; no row was stored. Correct local configuration restored immediately.
- Database migrations `restrict_website_inquiry_public_privileges` and `validate_anonymous_website_inquiries` removed unnecessary public privileges and enforce required fields, field lengths, email shape and source in RLS. Direct API oversized/empty/wrong-source inserts were rejected. Advisor returned no warnings afterward.
- Production build passed, including built-in TypeScript validation after removing ignoreBuildErrors. Separate TypeScript check passed. Lint: zero errors, six existing UI-helper warnings; hook/purity rules are downgraded only on the listed pre-existing files, not globally. ESLint 9 is pinned for compatibility with Next 16.2.4 plugins; it currently emits a maintenance/deprecation notice. Toolchain upgrade is separate work.
- Home, privacy, terms and contact pages inspected locally on mobile. Optional Vercel Analytics removed from layout. Form client disables auth persistence, refresh and URL-session detection; no private credential is used.

## Compliance assessment and remaining evidence

- Controller name/org number match the user-provided registration details: NAPIVA KVAM, 938 698 465. Fresh registry API lookup was unavailable; do not label that lookup independently verified.
- Existing legitimate-interest assessment remains conditional on actual practice. Company is now optional; patient-data warning, rights, purpose and retention criteria preserved. Monthly manual review is the owner's previously stated commitment, not an automated deletion job or evidence of past monthly execution.
- Public Netlify DPA dated 9 June 2026 incorporates into self-serve agreements; Supabase DPA dated 1 August 2026 incorporates into service agreements. These establish published contractual terms, not identity/authority of the holder of the inaccessible hosting account or a separately signed Napiva agreement.
- Providers may process technical logs/support data outside the EEA despite EU database storage. Account-specific provider identity, applicable agreements, transfer assessment and email-provider arrangements must be completed before claiming full compliance.
- Client honeypot and browser limits can be bypassed. Database RLS now enforces data shape/size, but does not prevent repeated valid spam. Durable rate limiting or server-verified CAPTCHA remains open; no claim of complete abuse prevention.
- No new marketing use, patient processing, paid plan, production deploy, merge, DNS change or unrelated resource modification.

## Release dependencies

1. Connect the Netlify account owning **stately-frangipane-d35677** and verify its team, Free plan, Git connection, currently published deployment and operational-credit status. Current connector exposes only Napis/haakongrimsbu and unrelated illustrious-flan-aba15c; browser fallback reaches sign-in. Do not duplicate/import or repoint DNS blindly.
2. Gmail ticket #1157230 has only acknowledgement and user's Yes! reply, no resolution observed. Existing daily reminder was not duplicated.
3. On correct site, configure preview-context `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` from the existing intended project. Key is public by design; never use secret/service-role/database credentials. Values need **Builds** scope and a rebuild. `.env.local` is ignored and must never be committed.
4. Deploy this branch to an isolated temporary URL, confirm emitted backend URL and no analytics script; repeat bounded synthetic submission, SQL readback, public read denial and scoped cleanup there. Verify headers/mobile/legal pages and finish abuse/provider decisions.
5. Present exact preview, commit and release plan for explicit owner approval before merge or production deployment. Domain already points to Netlify; no DNS switch is currently indicated. Preserve current hosting until replacement works. Retire Vercel only after correct production release and rollback/recovery plan are verified.

## Sources

- https://www.netlify.com/gdpr-ccpa/
- https://www.netlify.com/pdf/netlify-dpa.pdf
- https://www.netlify.com/legal/self-serve-subscription-agreement/
- https://www.netlify.com/blog/introducing-netlify-free-plan/
- https://supabase.com/legal/customer-resources/data-processing-addendum
- https://supabase.com/docs/guides/getting-started/api-keys
- https://www.helsedirektoratet.no/normen/formal-og-behandlingsgrunnlag-faktaark-56/alminnelig-behandlingsgrunnlag/berettiget-interesse
