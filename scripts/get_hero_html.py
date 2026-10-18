import urllib.request
import re

url = "https://row.nishorama.com/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print(f"Downloaded {len(html)} bytes from row.nishorama.com")
        
        # Save HTML for analysis
        with open("d:/taanvi demo/scripts/row_nishorama.html", "w", encoding="utf-8") as f:
            f.write(html)
            
        imgs = set(re.findall(r'//[^"\'<>\s]+?\.(?:jpg|png|webp|avif)', html))
        for img in sorted(imgs):
            if any(k in img.lower() for k in ['nishotsav', 'hero', 'banner', 'slideshow']):
                print("HERO CANDIDATE:", img)
except Exception as e:
    print("Error:", e)
