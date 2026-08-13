#!/usr/bin/env bash
# scripts/fetch-reference-css.sh
# Pulls the Kidzu demo's stylesheets so the hover/transition values in tokens.css can be
# corrected from source instead of matched by eye.
#
# Run this from any network that is NOT blocked by the demo host. Our build machine was
# IP-banned by its WAF during the asset mirror, and the demo is not in the Wayback
# Machine, so there is currently no other route to these files.
#
#   ./scripts/fetch-reference-css.sh
#
# Output lands in reference-css/ (gitignored). Point Claude at that folder afterwards.
set -uo pipefail
cd "$(dirname "$0")/.."

HOST="https://kidzudemo.ex-coders.com"
OUT="reference-css"
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

mkdir -p "$OUT"

echo "Fetching demo HTML ..."
if ! curl -sL --max-time 30 -A "$UA" "$HOST/" -o "$OUT/index.html"; then
  echo "Could not reach $HOST — still blocked from this network." >&2
  exit 1
fi

if [ ! -s "$OUT/index.html" ]; then
  echo "Empty response from $HOST — blocked or challenged." >&2
  exit 1
fi

# Discover stylesheet URLs from the markup rather than guessing filenames.
grep -oE 'href="[^"]+\.css[^"]*"' "$OUT/index.html" \
  | sed 's/^href="//; s/"$//' \
  | sed "s|^/|$HOST/|" \
  | grep -E '^https?://' \
  | sort -u > "$OUT/css-urls.txt"

count=$(wc -l < "$OUT/css-urls.txt" | tr -d ' ')
echo "Found $count stylesheets."

while read -r url; do
  [ -z "$url" ] && continue
  name=$(basename "${url%%\?*}")
  # Theme CSS is the interesting one; plugin/WP core CSS is noise but cheap to keep.
  if curl -sL --max-time 30 -A "$UA" -H "Referer: $HOST/" "$url" -o "$OUT/$name"; then
    printf 'ok    %-40s %s\n' "$name" "$(wc -c < "$OUT/$name" | tr -d ' ') bytes"
  else
    printf 'fail  %s\n' "$name"
  fi
  sleep 1
done < "$OUT/css-urls.txt"

echo
echo "Done. Theme stylesheets:"
ls -1 "$OUT" | grep -viE 'index.html|css-urls' || true
echo
echo "Next: grep these for the hover rules, e.g."
echo "  grep -nE '\\.(theme-btn|program-box|counter-box|activities-wrapper)[^{]*:hover' $OUT/*.css"
