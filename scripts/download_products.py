import urllib.request
import os
import json
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

BASE_CDN = "https://cdn.shopify.com/s/files/1/0964/1073/0868/files/"

with open(r"d:\taanvi demo\src\data\products.ts", "r", encoding="utf-8") as f:
    code = f.read()

# Extract all images from products.ts
image_urls = re.findall(r'"https://row\.nishorama\.com/cdn/shop/files/([^"]+)"', code)
unique_filenames = list(set([u.split('?')[0] for u in image_urls]))
print(f"Total unique product image files to download: {len(unique_filenames)}")

for fname in unique_filenames:
    dest = os.path.join(r"d:\taanvi demo\public\images\products", fname)
    if os.path.exists(dest) and os.path.getsize(dest) > 5000:
        continue
    url = BASE_CDN + fname
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            if data[:2] == b'\xff\xd8' or data[:4] == b'\x89PNG':
                with open(dest, 'wb') as f:
                    f.write(data)
                print(f"[PROD OK] {fname} ({len(data)} B)")
            else:
                print(f"[PROD INVALID] {fname}")
    except Exception as e:
        print(f"[PROD ERROR] {fname}: {e}")

print("Product images downloaded!")
