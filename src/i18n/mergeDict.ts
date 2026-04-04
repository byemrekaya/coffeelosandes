type Dict = Record<string, unknown>;

export function deepMergeDict(fallback: Dict, overlay: Dict): Dict {
  const out: Dict = { ...fallback };
  for (const key of Object.keys(overlay)) {
    const o = overlay[key];
    const f = fallback[key];
    if (o === undefined) continue;
    if (Array.isArray(o)) {
      out[key] = o;
      continue;
    }
    if (o && typeof o === 'object' && f && typeof f === 'object' && !Array.isArray(f)) {
      out[key] = deepMergeDict(f as Dict, o as Dict);
    } else {
      out[key] = o;
    }
  }
  return out;
}
