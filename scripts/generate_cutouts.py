import os
from PIL import Image
from rembg import remove

slides = [
    ("public/images/banners/hero_ishq_desktop.png", "public/images/banners/hero_ishq_foreground.png"),
    ("public/images/banners/hero_aabh_desktop.png", "public/images/banners/hero_aabh_foreground.png")
]

for src, dest in slides:
    if os.path.exists(src):
        print(f"Processing cutout for {src} -> {dest}...")
        img = Image.open(src)
        output = remove(img)
        output.save(dest, "PNG")
        print(f"Successfully generated cutout: {dest} ({os.path.getsize(dest)} bytes)")
    else:
        print(f"File not found: {src}")
