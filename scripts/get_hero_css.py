import urllib.request

url = "https://www.nishorama.com/cdn/shop/t/231/assets/cust-gallery-hero.css?v=90739482643005912161788759055"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req) as resp:
        css = resp.read().decode('utf-8', errors='ignore')
        print(f"Downloaded {len(css)} bytes of CSS")
        with open("d:/taanvi demo/scripts/cust-gallery-hero.css", "w", encoding="utf-8") as f:
            f.write(css)
        print("CSS preview:")
        print(css[:1000])
except Exception as e:
    print("Error:", e)
