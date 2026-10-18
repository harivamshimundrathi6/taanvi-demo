with open('d:/taanvi demo/scripts/row_nishorama.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# find cust-gallery-hero css or swiper hero css
m = re.findall(r'<style[^>]*>.*?</style>', html, re.DOTALL)
for s in m:
    if 'cust-gallery-hero' in s or 'gallery-banner-link' in s:
        print("FOUND HERO CSS INLINE:")
        print(s[:1000])

# also look for links
links = re.findall(r'href=[\'"]([^\'"]+cust-gallery-hero[^\'"]*)[\'"]', html)
print("CSS link:", links)
