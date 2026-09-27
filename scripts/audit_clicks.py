import os

errors = []
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                lines = file.readlines()
                for line_no, line in enumerate(lines, 1):
                    if 'href="#"' in line or "href='#'" in line:
                        errors.append((path, line_no, f'Dead link href="#": {line.strip()}'))
                    if '→' in line and '<span' in line:
                        # Check surrounding lines to see if it is wrapped in Link or button
                        ctx = ''.join(lines[max(0, line_no - 4):min(len(lines), line_no + 3)])
                        if 'Link' not in ctx and 'button' not in ctx and 'onClick' not in ctx:
                            errors.append((path, line_no, f'Possible unclickable span with arrow: {line.strip()}'))

print(f'Total issues found: {len(errors)}')
for path, line_no, msg in errors:
    print(f'{path}:{line_no} -> {msg.encode("ascii", "replace").decode("ascii")}')

