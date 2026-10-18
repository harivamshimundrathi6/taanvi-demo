with open('d:/taanvi demo/scripts/row_nishorama.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# find section with id containing header or header tag
pos = html.find('<!-- END sections: header-group -->')
if pos != -1:
    print("Found header-group end at", pos)
    start = max(0, pos - 4000)
    print(html[start:pos])
