// htmlfeedback/*.html → src/data/masterTastingStructured.ts (mevcut slug’larla birleşir).
// Run: node scripts/build-master-tasting-from-html.mjs
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const feedbackRoot = join(root, 'src', 'htmlfeedback');
const masterPath = join(root, 'src', 'data', 'venezuelaCoffeeMaster.ts');
const outPath = join(root, 'src', 'data', 'masterTastingStructured.ts');

const RAW_TITLES = [
  ['baskın notalar', 'dominantNotes'],
  ['destekleyici notalar', 'supportingNotes'],
  ['vücut ve çıkış', 'bodyFinish'],
  ['gövde ve bitiş', 'bodyFinish'],
  ['karakter', 'character'],
  ['tatlılık', 'sweetness'],
  ['genel profil', 'generalProfile'],
  ['bitiş', 'finish'],
  ['gövde', 'body'],
  ['asidite', 'acidity'],
  ['yapı', 'structure'],
  ['not', 'note'],
  ['işlem', 'process'],
  ['deneyim', 'experience'],
  ['asidite / gövde', 'acidityBody'],
  ['meyvemsi dokunuşlar', 'fruityTouch'],
  ['aromatik karakter', 'aromaticCharacter'],
  ['kullanım alanı', 'usageArea'],
];

function norm(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const titleToKey = Object.fromEntries(RAW_TITLES.map(([k, v]) => [norm(k), v]));

function toAscii(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseMasterItems() {
  const src = readFileSync(masterPath, 'utf8');
  const re =
    /\{\s*segment:\s*'([^']+)',\s*uretici:\s*'([^']*)',\s*ciftlik:\s*'([^']*)',\s*bolge:\s*'([^']*)',\s*cesit:\s*'([^']*)',\s*cupping_score:\s*'([^']*)',\s*ticari_segment:\s*'([^']*)'\s*\}/g;
  const items = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    items.push({
      segment: m[1],
      uretici: m[2],
      ciftlik: m[3],
      bolge: m[4],
      cesit: m[5],
      cupping_score: m[6],
      ticari_segment: m[7],
    });
  }
  return items;
}

function masterSlug(item, index) {
  return `${toAscii(item.cesit)}-${toAscii(item.bolge)}-${index + 1}`;
}

function extractTech(html, label) {
  const re = new RegExp(
    `<span class="tech-label">${label}:</span>\\s*<span class="tech-value">([^<]*(?:<[^/][^>]*>[^<]*)*)</span>`,
    'i',
  );
  const m = html.match(re);
  if (!m) return '';
  return m[1]
    .replace(/<span[^>]*>[^<]*<\/span>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, name.name);
    if (name.isDirectory()) out.push(...walk(p));
    else if (name.name.endsWith('.html')) out.push(p);
  }
  return out;
}

function parseHtmlFile(path) {
  const html = readFileSync(path, 'utf8');
  const farm = extractTech(html, 'Farm');
  const region = extractTech(html, 'Region');
  const sorte = extractTech(html, 'Sorte') || extractTech(html, 'Blend');
  const producer = extractTech(html, 'Producer');

  const rows = [];
  const panelMatch = html.match(/<h3>TADIM ÖZELLİKLERİ<\/h3>([\s\S]*?)(?:<\/div>\s*<\/div>\s*<div class="validation-box"|<div class="validation-box")/i);
  const block = panelMatch ? panelMatch[1] : html;
  const sectionRe = /<div class="tasting-title">([^<]+)<\/div>\s*<ul class="tasting-list">([\s\S]*?)<\/ul>/gi;
  let m;
  while ((m = sectionRe.exec(block)) !== null) {
    const key = titleToKey[norm(m[1].trim())];
    const lis = [...m[2].matchAll(/<li>([^<]*)<\/li>/gi)].map((x) => x[1].trim()).filter(Boolean);
    if (key && lis.length) {
      rows.push({ labelKey: key, value: lis.join(', ') });
    }
  }

  return {
    file: path.replace(feedbackRoot + '/', ''),
    farm,
    region,
    sorte,
    producer,
    rows,
  };
}

function farmLoose(db, html) {
  const a = norm(db);
  const b = norm(html);
  if (!a || !b) return false;
  if (a === b) return true;
  const strip = (x) => x.replace(/^las\s+/, '').replace(/^finca\s+/, '').replace(/^fundo\s+/, '');
  if (strip(a) === strip(b)) return true;
  if (a.includes(b) || b.includes(a)) return true;
  return false;
}

function regionLoose(db, html) {
  return norm(db) === norm(html);
}

function varietyLoose(db, html) {
  const a = norm(db).replace(/\s*\/\s*/g, ' ').replace(/\+/g, ' ');
  const b = norm(html).replace(/\s*\/\s*/g, ' ').replace(/\+/g, ' ').replace(/\bblend\b/g, '').trim();
  if (a === b) return true;
  const tokens = (s) => s.split(/\s+/).filter((t) => t.length > 2);
  const ta = tokens(a);
  const tb = tokens(b);
  if (ta.length && tb.length) {
    const overlap = ta.filter((t) => tb.some((u) => u.includes(t) || t.includes(u)));
    if (overlap.length >= Math.min(ta.length, tb.length)) return true;
  }
  if (b.includes('colombia') && b.includes('castill') && a.includes('colombia') && a.includes('castill')) return true;
  if (b.includes('castillo') && b.includes('naranjal') && a.includes('castillo') && a.includes('naranjal')) return true;
  if (b.includes('caturra') && b.includes('roja') && a.includes('caturra') && a.includes('roja')) return true;
  if (b.includes('caturra') && b.includes('amarillo') && a.includes('caturra') && a.includes('amarillo')) return true;
  return false;
}

function producerLoose(db, html) {
  const a = norm(db);
  const b = norm(html);
  if (!a || !b) return false;
  if (a === b) return true;
  const short = (x) => x.split(/\s+/).slice(0, 3).join(' ');
  return short(a) === short(b);
}

function matchMaster(parsed, items) {
  const { farm, region, sorte, producer } = parsed;
  let candidates = items.filter(
    (it) =>
      regionLoose(it.bolge, region) &&
      varietyLoose(it.cesit, sorte) &&
      farmLoose(it.ciftlik, farm),
  );
  if (candidates.length > 1 && producer) {
    const withProd = candidates.filter((it) => producerLoose(it.uretici, producer));
    if (withProd.length === 1) candidates = withProd;
  }
  if (candidates.length > 1 && producer) {
    const withProd = candidates.filter((it) => producerLoose(it.uretici, producer));
    if (withProd.length) candidates = withProd;
  }
  if (candidates.length !== 1) {
    candidates = items.filter(
      (it) => regionLoose(it.bolge, region) && varietyLoose(it.cesit, sorte) && producer && producerLoose(it.uretici, producer),
    );
  }
  if (candidates.length !== 1) return null;
  const idx = items.indexOf(candidates[0]);
  return masterSlug(candidates[0], idx);
}

function escapeTs(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function unescapeTs(s) {
  return s.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
}

function rowsToTs(rows) {
  return rows.map((r) => `    { labelKey: '${r.labelKey}', value: '${escapeTs(r.value)}' }`).join(',\n');
}

/** Mevcut masterTastingStructured.ts içeriğini okuyup slug → satırlar (yeniden üretimde veri kaybını önlemek için). */
function parseExistingMasterTsFile() {
  let src;
  try {
    src = readFileSync(outPath, 'utf8');
  } catch {
    return {};
  }
  const record = {};
  const entryRe = /'([a-z0-9-]+)':\s*\[([\s\S]*?)\r?\n  \],/g;
  let m;
  while ((m = entryRe.exec(src)) !== null) {
    const slug = m[1];
    const body = m[2];
    const rows = [];
    const rowRe = /\{\s*labelKey:\s*'([^']*)',\s*value:\s*'((?:[^'\\]|\\.)*)'\s*\}/g;
    let r;
    while ((r = rowRe.exec(body)) !== null) {
      rows.push({ labelKey: r[1], value: unescapeTs(r[2]) });
    }
    if (rows.length) record[slug] = rows;
  }
  return record;
}

const items = parseMasterItems();
const htmlFiles = walk(feedbackRoot).sort();
const bySlug = {};
const usedFiles = [];
const warnings = [];

for (const fp of htmlFiles) {
  const parsed = parseHtmlFile(fp);
  if (!parsed.rows.length) {
    warnings.push(`No tasting rows: ${parsed.file}`);
    continue;
  }
  const slug = matchMaster(parsed, items);
  if (!slug) {
    warnings.push(`No master match: ${parsed.file} (farm=${parsed.farm}, reg=${parsed.region}, sorte=${parsed.sorte})`);
    continue;
  }
  if (bySlug[slug] && JSON.stringify(bySlug[slug]) !== JSON.stringify(parsed.rows)) {
    warnings.push(`Duplicate slug ${slug}: ${parsed.file} overwrites different rows`);
  }
  bySlug[slug] = parsed.rows;
  usedFiles.push({ file: parsed.file, slug });
}

const existing = parseExistingMasterTsFile();
const merged = { ...existing, ...bySlug };

const header = `import type { TastingStructuredRow } from './tastingStructured';

/** Venezuela master ürün tadım satırları (slug → TR metin). htmlfeedback + script ile güncellenir. */
export const masterTastingBySlug: Record<string, TastingStructuredRow[]> = {
`;

const entries = Object.keys(merged)
  .sort()
  .map((slug) => {
    const body = rowsToTs(merged[slug]);
    return `  '${slug}': [\n${body},\n  ],`;
  })
  .join('\n');

const fileContent = `${header}${entries}
};
`;

writeFileSync(outPath, fileContent, 'utf8');
const fromHtml = Object.keys(bySlug).length;
const unchanged = Object.keys(existing).filter((k) => !Object.prototype.hasOwnProperty.call(bySlug, k)).length;
console.error('Wrote', outPath, '| total slugs:', Object.keys(merged).length, '| from HTML this run:', fromHtml, '| unchanged from file:', unchanged);
for (const w of warnings) console.error('WARN:', w);
for (const u of usedFiles) console.error('OK:', u.slug, '<=', u.file);
