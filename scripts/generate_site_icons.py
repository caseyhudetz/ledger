"""Build cross-browser icons from the East Lakeview Ledger monogram."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

SITE = Path(__file__).resolve().parents[1] / "site"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"

def build(filename, size):
    image = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    d = ImageDraw.Draw(image)
    d.rounded_rectangle((0, 0, size - 1, size - 1), radius=round(size * .16), fill=(18, 18, 18, 255))
    font = ImageFont.truetype(FONT, round(size * .47))
    bbox = d.textbbox((0, 0), "EL", font=font)
    x = (size - (bbox[2] - bbox[0])) / 2 - bbox[0]
    y = size * .49 - (bbox[3] + bbox[1]) / 2
    d.text((round(x), round(y)), "EL", fill="white", font=font)
    width = max(1, round(size * .018))
    d.line((round(size*.24),round(size*.79),round(size*.76),round(size*.79)), fill="white", width=width)
    image.save(SITE / filename, optimize=True)
    print(f"{filename}: {size}x{size}")

build("favicon-32.png", 32)
build("apple-touch-icon.png", 180)
