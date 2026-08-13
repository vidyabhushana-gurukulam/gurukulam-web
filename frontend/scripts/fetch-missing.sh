#!/usr/bin/env bash
# scripts/fetch-missing.sh
# Slow sequential retry for assets the parallel mirror could not get. The demo host
# rate-limits bursts, so this waits between requests and retries the whole list.
# Companion to fetch-assets.mjs — routing logic there, patience here.
set -uo pipefail
cd "$(dirname "$0")/.."

LIST=scripts/missing.txt
DELAY=4
ROUNDS=6

route() {
  case "$1" in
    *shape*|*hero-line*|*vec-*|*cloud*|*wave*|*top-bar*|*line-*|*star*) echo "shapes" ;;
    */icon/*|*icon-*|*arrow*|*logo*|*flag*|*phone*|*telephone*)         echo "icons" ;;
    *hero*)                                                            echo "images/hero" ;;
    *about*)                                                           echo "images/about" ;;
    *program*|*course*|*class*)                                        echo "images/programs" ;;
    *team*|*teacher*|*instructor*)                                     echo "images/teachers" ;;
    *blog*|*news*|*post*)                                              echo "images/blog" ;;
    *testimonial*|*avatar*)                                            echo "images/testimonials" ;;
    *brand*|*partner*)                                                 echo "images/brands" ;;
    *instagram*|*gallery*|*activit*|*choose*|*counter*|*faq*|*cta*)    echo "images/sections" ;;
    *)                                                                 echo "images/misc" ;;
  esac
}

for round in $(seq 1 $ROUNDS); do
  remaining=0
  while read -r url; do
    [ -z "$url" ] && continue
    name="${url##*/}"; name="${name%%\?*}"
    dir="public/assets/$(route "$url")"
    [ -f "$dir/$name" ] && continue

    mkdir -p "$dir"
    code=$(curl -sL --max-time 25 -w '%{http_code}' \
      -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' \
      -H 'Accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8' \
      -H 'Referer: https://kidzudemo.ex-coders.com/' \
      -o "$dir/$name" "$url")

    if [ "$code" = "200" ] && [ -s "$dir/$name" ]; then
      echo "ok    $name"
    else
      rm -f "$dir/$name"
      echo "retry $name ($code)"
      remaining=$((remaining + 1))
    fi
    sleep "$DELAY"
  done < "$LIST"

  echo "--- round $round done, $remaining still missing ---"
  [ "$remaining" -eq 0 ] && break
  sleep 30
done

echo "TOTAL FILES: $(find public/assets -type f | wc -l | tr -d ' ')"
