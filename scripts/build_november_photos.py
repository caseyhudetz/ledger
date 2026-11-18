"""Crop the five original November photographs from the approved newspaper page.

Input is site/November.png, a user-uploaded 1521x2000 front-page image.
The crops preserve the exact original visuals. No regenerated imagery.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "site" / "November.png"
CROPS = {
    "november-thanksgiving.jpg": (25, 170, 921, 666),
    "november-fountain.jpg": (951, 287, 1510, 666),
    "november-circle-k.jpg": (432, 1005, 922, 1519),
    "november-wonka.jpg": (952, 1006, 1509, 1518),
    "november-scooters.jpg": (435, 1542, 922, 1984),
}

with Image.open(SOURCE) as source:
    if source.size != (1521, 2000):
        raise ValueError(f"Unexpected November front-page dimensions: {source.size}")
    source = source.convert("RGB")
    for name, bounds in CROPS.items():
        crop = source.crop(bounds)
        destination = ROOT / "site" / name
        crop.save(destination, quality=89, optimize=True, subsampling=0)
        print(f"Created {destination}: {crop.size}, {destination.stat().st_size} bytes")
