"""Export the Ledger's exact masthead as white print-ready PNG artwork.

Source: site/masthead.png (the existing site logo).
Output: merch/east-lakeview-ledger-white-logo-print.png
White ink pixels only; everything else fully transparent.
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "site" / "masthead.png"
OUTPUT = ROOT / "merch" / "east-lakeview-ledger-white-logo-print.png"
TARGET_WIDTH = 3300  # 11 inches at 300 DPI, adjustable inside Fourthwall

source = Image.open(SOURCE).convert("RGB")
# Use luminance as the alpha mask, keeping the original letterforms and
# anti-aliased edges. Suppress nearly white background pixels entirely.
gray = ImageOps.grayscale(source)
alpha = ImageOps.invert(gray)
alpha = alpha.point(lambda value: 0 if value < 22 else round((value - 22) * 255 / 233))

bbox = alpha.getbbox()
if not bbox:
    raise ValueError("No lettering found in masthead")
alpha = alpha.crop(bbox)
height = round(alpha.height * TARGET_WIDTH / alpha.width)
alpha = alpha.resize((TARGET_WIDTH, height), Image.Resampling.LANCZOS)

art = Image.new("RGBA", alpha.size, (255, 255, 255, 0))
art.putalpha(alpha)
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
art.save(OUTPUT, dpi=(300, 300), optimize=True)
print(f"Created {OUTPUT}, {art.width} x {art.height}, RGBA, 300 DPI")
