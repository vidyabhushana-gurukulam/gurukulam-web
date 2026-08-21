#!/usr/bin/env bash
#
# frontend/scripts/optimize-images.sh
# Converts the repository's master photography and child cutouts into web-sized WebP under public/images/.
# Masters live outside the frontend (repo-root images/) so they never ship raw; rerun this after adding or replacing a master.
#
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$HERE/../../../images"
OUT="$HERE/../public/images"

command -v cwebp >/dev/null || { echo "cwebp not found — install with: brew install webp"; exit 1; }

mkdir -p "$OUT/school-life" "$OUT/children" "$HERE/../public/brand"

# Wide scene photography. 1600px is twice the largest slot any homepage panel renders it at.
photo() {
  cwebp -quiet -q 78 -resize "$3" 0 "$SRC/school-life/$1" -o "$OUT/school-life/$2.webp"
  echo "  school-life/$2.webp"
}

# Same, but crops the master first: "$3" is a cwebp crop box of "x y width height".
# Used where the subject is off-centre in the master and the frame is wider than the
# source, so object-cover has no horizontal overflow left to shift with object-position.
photo_crop() {
  cwebp -quiet -q 80 -crop $3 "$SRC/school-life/$1" -o "$OUT/school-life/$2.webp"
  echo "  school-life/$2.webp (cropped $3)"
}

# Transparent cutouts. -alpha_q keeps the hair edges clean at a smaller file size.
cutout() {
  cwebp -quiet -q 82 -alpha_q 90 -resize 640 0 "$SRC/children/generated/$1" -o "$OUT/children/$2.webp"
  echo "  children/$2.webp"
}

# The crest is re-cut from the 6000px colour master rather than a downstream export,
# so the gold filigree and the Sanskrit line stay crisp on high-density screens.
echo "Brand:"
cwebp -quiet -q 90 -alpha_q 95 -resize 1100 0 "$SRC/../document/logo/logo-color.png" -o "$HERE/../public/brand/vidyabhushana-crest.webp"
echo "  brand/vidyabhushana-crest.webp"

echo "Scene photography:"
photo "indoor-classroom-discussion-16x9.png"      "classroom-discussion"   1600
photo "outdoor-discussion-class-16x9.png"         "outdoor-discussion"     1600
photo "indoor-abacus-maths-class-16x9.png"        "abacus-maths"           1600
photo "indoor-geometry-construction-class-16x9.png" "geometry-class"       1600
photo "outdoor-yoga-class-4x3.png"                "yoga-class"             1400
photo "outdoor-nature-study-4x5.png"              "nature-study"           1200
photo "gurukulam.png"                             "hands-on-learning"      1500
# The four children sit at ~55% of the master's width, so the hero crop drops 144px
# from the left to centre the group, and trims to 7:5 leaving air above heads and below feet.
photo_crop "ChatGPT Image Aug 20, 2026, 05_47_20 PM.png" "courtyard-walk" "144 120 1304 931"

echo "Child cutouts:"
cutout "boy-reading-raised-hand-v1.webp"       "boy-reading-raised-hand"
cutout "floral-girl-watering-sapling-v1.webp"  "girl-watering-sapling"
cutout "girl-kirtan-kartals-v1.webp"           "girl-kirtan-kartals"
cutout "girl-nritya-pose-v1.webp"              "girl-nritya-pose"
cutout "yellow-boy-abacus-v1.webp"             "boy-abacus"
cutout "mint-boy-reading-book-v1.webp"         "boy-reading-book"
cutout "glasses-boy-writing-notebook-v1.webp"  "boy-writing-notebook"
cutout "blue-girl-geometry-model-v1.webp"      "girl-geometry-model"

echo
echo "Done. $(du -sh "$OUT" | cut -f1) in $OUT"
