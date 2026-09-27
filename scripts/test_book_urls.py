import urllib.request
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open('src/data/books.ts', 'r', encoding='utf-8') as f:
    content = f.read()

urls = re.findall(r'https?://[^\s\'\"]+', content)
print(f'Testing {len(urls)} total URL occurrences ({len(set(urls))} unique)...')

results = {}
for u in sorted(set(urls)):
    try:
        req = urllib.request.Request(
            u,
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        )
        with urllib.request.urlopen(req, timeout=8, context=ctx) as resp:
            results[u] = ('OK', resp.status)
            print(f'OK [{resp.status}]: {u}')
    except Exception as e:
        results[u] = ('FAIL', str(e))
        print(f'FAIL [{e}]: {u}')

print('\n--- SUMMARY ---')
for u, (st, info) in results.items():
    if st == 'FAIL':
        print(f'BROKEN: {u} -> {info}')
