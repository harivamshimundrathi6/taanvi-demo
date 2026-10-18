with open('d:/taanvi demo/scripts/row_nishorama.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('NAVRATRI_1.png')
if pos != -1:
    print("Found NAVRATRI_1.png at", pos)
    start = max(0, pos - 1500)
    end = min(len(html), pos + 2500)
    with open('d:/taanvi demo/scripts/hero_section_snippet.html', 'w', encoding='utf-8') as out:
        out.write(html[start:end])
    print("Saved hero_section_snippet.html")
