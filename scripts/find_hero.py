import urllib.request
import re

url = "https://www.nishorama.com/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        matches = set(re.findall(r'https://cdn\.shopify\.com/s/files/[^\s"\'<>]+', html))
        for m in sorted(matches):
            if any(k in m.lower() for k in ['banner', 'hero', 'nishotsav', 'main', 'festive']):
                print(m)
except Exception as e:
    print("Error:", e)
