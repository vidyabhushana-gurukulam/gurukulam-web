#!/usr/bin/env python3
"""
frontend/scripts/make-favicons.py
Builds the browser icons from the 6000px colour crest master.

The full crest carries a Sanskrit ring, laurel wreaths, an open book and a banner of text,
none of which survives at 16px. These icons therefore use only the crest's central motif —
the gold lotus around the blue gem — cut as a circle so the crest's cream field and
surrounding detail are excluded, and set on a navy tile with the site's gold hairline.

Run: python3 scripts/make-favicons.py   (needs Pillow)
"""
from pathlib import Path
from PIL import Image, ImageDraw

HERE = Path(__file__).resolve().parent
MASTER = HERE / ".." / ".." / ".." / "document" / "logo" / "logo-color.png"
OUT = HERE / ".." / "public"

NAVY = (27, 48, 87, 255)   # --color-header
GOLD = (201, 162, 39, 255) # --color-theme

# Gem centre and lotus radius, measured off the master.
CX, CY, R = 3000, 2045, 980
SS = 4  # supersample factor, so the rounded corners and gold rim stay clean when downscaled


def motif():
    src = Image.open(MASTER).convert("RGBA")
    cut = src.crop((CX - R, CY - R, CX + R, CY + R))
    mask = Image.new("L", cut.size, 0)
    ImageDraw.Draw(mask).ellipse([0, 0, cut.size[0] - 1, cut.size[1] - 1], fill=255)
    cut.putalpha(mask)
    return cut


def tile(art, size, pad=0.10, radius=0.22):
    big = size * SS
    canvas = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    shape = Image.new("L", (big, big), 0)
    ImageDraw.Draw(shape).rounded_rectangle([0, 0, big - 1, big - 1], radius=int(big * radius), fill=255)
    canvas.paste(Image.new("RGBA", (big, big), NAVY), (0, 0), shape)
    ImageDraw.Draw(canvas).rounded_rectangle(
        [big * 0.02, big * 0.02, big * 0.98, big * 0.98],
        radius=int(big * radius * 0.94), outline=GOLD, width=max(2, int(big * 0.018)),
    )
    inner = int(big * (1 - 2 * pad))
    art_resized = art.resize((inner, inner), Image.LANCZOS)
    canvas.paste(art_resized, ((big - inner) // 2, (big - inner) // 2), art_resized)
    return canvas.resize((size, size), Image.LANCZOS)


art = motif()

# Multi-size .ico covers browsers and the Windows taskbar from one request.
tile(art, 256).save(OUT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
tile(art, 32).save(OUT / "favicon-32.png")
tile(art, 180).save(OUT / "apple-touch-icon.png")
tile(art, 512).save(OUT / "icon-512.png")

for name in ("favicon.ico", "favicon-32.png", "apple-touch-icon.png", "icon-512.png"):
    print(f"  {name}")
