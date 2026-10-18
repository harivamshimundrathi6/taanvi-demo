with open('d:/taanvi demo/scripts/row_nishorama.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# find <header tag or class="header"
matches = re.finditer(r'<header[^>]*>.*?</header>', html, re.DOTALL)
for m in matches:
    print("Found <header>: len", len(m.group(0)))
    with open('d:/taanvi demo/scripts/real_header.html', 'w', encoding='utf-8') as out:
        out.write(m.group(0))
    print("Saved real_header.html")
