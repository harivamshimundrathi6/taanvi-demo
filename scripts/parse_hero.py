with open('d:/taanvi demo/scripts/row_nishorama.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# Search for nishotsav in html
for m in re.finditer(r'.{0,100}NISHOTSAV.{0,200}', html, re.IGNORECASE):
    print("NISHOTSAV match:", m.group(0).replace('\n', ' '))

# Also search for the first <section or slideshow
body_pos = html.find('<main')
if body_pos != -1:
    snippet = html[body_pos:body_pos+15000]
    # find images in this snippet
    for img in re.finditer(r'<img[^>]+src=[\'"]([^\'"]+)[\'"][^>]*>', snippet):
        print("MAIN IMAGE:", img.group(0)[:250])
