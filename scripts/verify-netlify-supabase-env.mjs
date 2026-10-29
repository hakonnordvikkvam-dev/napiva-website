// Guard against the exact wrong-Supabase-hostname outage detected in October 2026.
// Values checked here are public browser configuration; never print any credential.
const context = process.env.CONTEXT;
if (!['production', 'deploy-preview'].includes(context)) {
  console.log('Skipping Napiva Supabase build check outside Netlify production/preview.');
  process.exit(0);
}

const expected = 'https://bfsjmuhztzajiftwcwec.supabase.co';
const actual = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const publishable = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

if (actual !== expected || !/^sb_publishable_[A-Za-z0-9_-]+$/.test(publishable ?? '')) {
  console.error(
    'Napiva build stopped: the public Supabase project URL or publishable key is missing/incorrect for the Netlify ' +
      context + ' context. Check netlify.toml and the approved website project.',
  );
  process.exit(1);
}

console.log('Napiva public Supabase build configuration matches approved project for ' + context + '.');
