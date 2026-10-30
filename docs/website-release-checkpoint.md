# Website release checkpoint — 29 October 2026

## Latest release readiness — 29 October 2026

**This section supersedes the earlier `Release dependencies` list below where the earlier text describes work that is now complete. Preserve the original list as historical context, not current instructions.**

### Verified: test implementation works

- **PR #5** (branch `compliance/legal-footer-privacy-20261029`) is an **OPEN DRAFT**, not merged into `main`; deployment to live production has NOT been authorized.
- On 29 October, a user-submitted synthetic enquiry on the **hosted Netlify Deploy Preview #5** displayed "Inquiry sent!". Independent SQL confirmed the exact row (`id=14`) in Supabase website project `bfsjmuhztzajiftwcwec`. That synthetic row was deleted with exact-field predicates, and follow-up SQL verified zero matching rows.
- `netlify.toml` now contains build-time **public** Supabase URL and matching publishable key for `deploy-preview` and `production` contexts. The production block exists **only in the unmerged PR**; production settings have not changed. Public client credentials do not confer administrative permissions.
- Netlify and Vercel commit statuses were successful for the subsequent docs-only commit, and Supabase reported zero current security advisor lints. A green build/security advisor is **not** proof of deployment security, spam resilience or regulatory compliance.
- The *real* `napiva.com` is already delivered by Netlify site `stately-frangipane-d35677` (site ID `51f8826d-c911-45ed-bdee-015b562223b6`), currently published deploy `6a872b29679d65fe295cd891`, based on `main` commit `a52c1b1f...` from **20 August**. Production has not yet received PR #5.
- The actual Netlify site is reachable by exact site/deploy ID for **read-only metadata** but is missing from both connected account project inventories. Forms management returned 404. **Read-only access is not enough to perform or roll back a safe production release.**
- The **Napiva Free** team (slug `haakonnordvikkvam-blip`) is confirmed owner-access for its own listed sites; it also contains an **empty** new test project `napiva-website-review` created while investigating. That empty site is not a replacement or a successful alternate deploy.
- Netlify billing email dated 8 October explicitly says **all 300 monthly credits were exhausted** in the 4 October–3 November cycle, blocking *production* deploys but allowing PR previews. Support ticket `#1157230` has no substantive response yet. A check for restored credit access is scheduled for 4 November, and an independent support-response watch exists.

### Unresolved release gates — MUST NOT merge/deploy until handled

1. **Hosting control:** establish administrator ability to deploy **and roll back** the live `stately-frangipane-d35677` site; or instead build and verify a separate owned Netlify site and have an explicit approved DNS cutover/rollback plan. A passing PR preview is not proof the connected account controls production.
2. **Billing:** verify production deploys are permitted by Netlify after reset or support action; do not purchase an upgrade without explicit owner approval.
3. **Production data/reliability:** target restored site `bfsjmuhztzajiftwcwec` (Free), acknowledge that low user activity can cause automatic pausing and form outages; monitored daily, but no uptime guarantee. Decide whether this risk with the visible email fallback is acceptable, or separately prove a compliant no-cost replacement before retiring Supabase.
4. **Privacy & security:** establish actual provider/account relationship and applicable agreements, international transfer and email handling, and that manual monthly retention reviews will occur. Ensure the privacy notice matches the **actually** published configuration. A browser honeypot + database field validation **do not stop repeated valid spam requests**; either implement and test an anti-bypass solution or explicitly record a proportionate acceptance/monitoring decision. Consider enforcing MFA on the owned Netlify account, currently reported disabled.
5. **User approval:** owner must see exact final preview, PR head commit, deploy target and rollback instructions, then **explicitly authorize the production release**. No merge, production deploy, DNS changes or paid service just because build checks are green.

### Production release / rollback checklist (PLAN, not performed)

- [ ] Confirm target Netlify project owner/admin, Git linkage, billing permission, deployment history, and an actual tested rollback control.
- [ ] Confirm final PR diff, all dependencies/tests, correct public env vars for the **production** build context, and that no private keys, patient records or tracking were introduced.
- [ ] Obtain explicit release approval identifying repository, PR commit, target site and acceptable fallback plan.
- [ ] Merge/deploy through the authorized, controllable site; confirm target is ready before any domain operation. Do not switch DNS when deploying to the same existing site; for a separate new site, switch only after all preliminary verification and explicit approval.
- [ ] On `napiva.com` after release: test homepage, legal pages, mobile, headers and the inquiry flow with **synthetic** data only. Verify exact row in intended database, public read denial and scoped test deletion; confirm email fallback visible if backend fails.
- [ ] If production test fails, **revert to the known previous working deployment** through a verified rollback mechanism; never assume the above deploy ID can be restored by a team without ownership rights.
- [ ] Record exact production commit, deployment ID, dates, tests, privacy decisions and any residual risk in Napiva Master Log.
- [ ] Maintain the manual monthly inquiry review and daily Supabase status watch; do not claim monitoring prevents Free-plan pausing.

**Source of truth:** the Napiva Master Log. This checkpoint is engineering release guidance; it is not a legal certification.


## Verified

- Original three local legal changes were inspected and preserved. Original diff backed up outside the repository.
- Current public DNS already points to Netlify: `www.napiva.com` CNAME `stately-frangipane-d35677.netlify.app`, apex `75.2.60.5`. Both public requests returned Netlify headers. No DNS changed.
- Public deployed JavaScript contains `https://lngpcmqmyqsuvvvzsqhn.supabase.co`; this actual hostname returns ENOTFOUND. Earlier handoff transcription with `myas` was incorrect. The inaccessible project's status/ownership is unknown.
- Intended restored website project `bfsjmuhztzajiftwcwec` is ACTIVE_HEALTHY, Ireland. RLS is enabled; three pre-existing enquiries were preserved without reading their contents. Approval-dev was untouched.
- Local browser form with matching existing modern publishable key inserted synthetic rows, displayed success, and independent exact-row SQL verified storage. Tests covered desktop and 390px mobile, including optional company.
- Anonymous REST reads returned HTTP 401 / SQLSTATE 42501. Two scoped test rows were deleted, independently restoring baseline three rows and zero test rows.
- Deliberately invalid local public key produced the generic error, preserved field values and reenabled Submit; no row was stored. Correct local configuration restored immediately.
- Database migrations `restrict_website_inquiry_public_privileges` and `validate_anonymous_website_inquiries` removed unnecessary public privileges and enforce required fields, field lengths, email shape and source in RLS. Direct API oversized/empty/wrong-source inserts were rejected. Advisor returned no warnings afterward.
- Production build passed, including built-in TypeScript validation after removing ignoreBuildErrors. Separate TypeScript check passed. Lint: zero errors, six existing UI-helper warnings; hook/purity rules are downgraded only on the listed pre-existing files, not globally. ESLint 9 is pinned for compatibility with Next 16.2.4 plugins; it currently emits a maintenance/deprecation notice. ESLint 10 was not retained because the matching plugins declare incompatible peers.
- Home, privacy, terms and contact pages inspected locally on mobile. Optional Vercel Analytics removed from layout. Form client disables auth persistence, refresh and URL-session detection; no private credential is used.

### Security dependency follow-up

- Updated Next.js and matching lint config to 16.4.3; removed unused Zod/resolvers and the unused analytics package. Applied narrow compatible transitive overrides for lodash, ws, browserslist and baseline-browser-mapping.
- Initial production audit: 5 critical / 29 high / 19 moderate / 3 low advisory findings. Final production audit: **zero findings at every severity**. This is package-audit evidence, not a guarantee of application security.
- Rebuilt after the final lockfile changes: production build including TypeScript passed; lint still 0 errors / 6 documented pre-existing warnings. Final built browser chunks contain the correct restored Supabase hostname, no old dead hostname and no Vercel Insights path.

## Compliance assessment and remaining evidence

- Controller name/org number match the user-provided registration details: NAPIVA KVAM, 938 698 465. Fresh registry API lookup was unavailable; do not label that lookup independently verified.
- Existing legitimate-interest assessment remains conditional on actual practice. Company is now optional; patient-data warning, rights, purpose and retention criteria preserved. Monthly manual review is the owner's previously stated commitment, not an automated deletion job or evidence of past monthly execution.
- Public Netlify DPA dated 9 June 2026 incorporates into self-serve agreements; Supabase DPA dated 1 August 2026 incorporates into service agreements. These establish published contractual terms, not identity/authority of the holder of the inaccessible hosting account or a separately signed Napiva agreement.
- Providers may process technical logs/support data outside the EEA despite EU database storage. Account-specific provider identity, applicable agreements, transfer assessment and email-provider arrangements must be completed before claiming full compliance.
- Client honeypot and browser limits can be bypassed. Database RLS now enforces data shape/size, but does not prevent repeated valid spam. Durable rate limiting or server-verified CAPTCHA remains open; no claim of complete abuse prevention.
- No new marketing use, patient processing, paid plan, production deploy, merge, DNS change or unrelated resource modification.

## Release dependencies

1. Connect the Netlify account owning **stately-frangipane-d35677** and verify its team, Free plan, Git connection, currently published deployment and operational-credit status. Two connections are now available: Napis/haakongrimsbu and owner-access Napiva/haakonnordvikkvam-blip (Free). Napiva inventory contains napiva-approval-dev, two objection sites and old napivaai (Vite build from 2025); neither account lists stately-frangipane-d35677. Browser fallback reaches sign-in. Correct-team access is verified; ownership of the active domain target and deploy-credit status remain unresolved. Do not duplicate/import or repoint DNS blindly.
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
