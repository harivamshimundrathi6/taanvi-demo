with open('d:/taanvi demo/scripts/row_nishorama.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# find actual CDN shopify links or any links containing NAVRATRI_1
for line in html.splitlines():
    if 'NAVRATRI_1' in line or 'ISHQ_1' in line or 'HERO_BANNER' in line:
        print(line.strip())
