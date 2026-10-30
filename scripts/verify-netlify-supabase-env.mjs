// Guard against the exact wrong-Supabase-hostname outage detected in October 2026.
import { createHash } from 'node:crypto';
// Values checked here are public browser configuration; never print any credential.
const context = process.env.CONTEXT;
if (!['production', 'deploy-preview'].includes(context)) {
  console.log('Skipping Napiva Supabase build check outside Netlify production/preview.');
  process.exit(0);
}

const expected = 'https://bfsjmuhztzajiftwcwec.supabase.co';
const actual = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const publishable = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();
// Hash pinned from the active PUBLIC publishable key in the approved Supabase project.
// A public-key rotation requires intentionally updating this guard and both build contexts.
const approvedKeyHash = 'cc873e0a213a3d5112c9739f37f83b7911d5527783b3e8370fbd0c684fb2e32a';
const candidateKeyHash = publishable ? createHash('sha256').update(publishable).digest('hex') : '';

if (actual !== expected || !/^sb_publishable_[A-Za-z0-9_-]+$/.test(publishable ?? '') || candidateKeyHash !== approvedKeyHash) {
  console.error(
    'Napiva build stopped: the public Supabase project URL or publishable key is missing/incorrect for the Netlify ' +
      context + ' context. Check netlify.toml and the approved website project.',
  );
  process.exit(1);
}

console.log('Napiva public Supabase build configuration matches approved project for ' + context + '.');
