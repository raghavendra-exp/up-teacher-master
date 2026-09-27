import re

with open('src/data/subjects.ts', encoding='utf-8') as f:
    subs = re.findall(r"id:\s*'([^']+)'", f.read())

with open('src/data/subject-topics.ts', encoding='utf-8') as f:
    content = f.read()
    # Find top level keys in SUBJECT_TOPICS_CATALOG
    tops = re.findall(r'  "([a-z0-9-]+)": \{', content)

missing = [s for s in subs if s not in tops]
print("All subs:", len(subs))
print("Catalog keys:", len(tops))
print("Missing:", missing)
