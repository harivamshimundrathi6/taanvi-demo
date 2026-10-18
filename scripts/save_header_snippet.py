with open('d:/taanvi demo/scripts/row_nishorama.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('<!-- END sections: header-group -->')
if pos != -1:
    start = max(0, pos - 4000)
    with open('d:/taanvi demo/scripts/header_snippet.html', 'w', encoding='utf-8') as out:
        out.write(html[start:pos])
    print("Saved header_snippet.html")
