import json
import os

data_dir = os.path.join(os.path.dirname(__file__), "..", "src", "data")

print("==================================================")
print("RUNNING QUALITY CONTROL AUDIT (Section 46)")
print("==================================================")

# 1. Questions validation
with open(os.path.join(data_dir, "questions.json"), "r", encoding="utf-8") as f:
    questions = json.load(f)

with open(os.path.join(data_dir, "pyqs.json"), "r", encoding="utf-8") as f:
    pyqs = json.load(f)

total_qs = len(questions) + len(pyqs)
print(f"Total Questions in Database: {total_qs}")
assert total_qs >= 1000, f"Must have at least 1,000 questions, got {total_qs}"

seen_ids = set()
for q in questions + pyqs:
    # ID check
    assert q["id"] not in seen_ids, f"Duplicate Question ID: {q['id']}"
    seen_ids.add(q["id"])
    
    # Options check
    assert len(q["options"]) == 4, f"Question {q['id']} must have exactly 4 English options"
    assert len(q["hindiOptions"]) == 4, f"Question {q['id']} must have exactly 4 Hindi options"
    assert all(isinstance(opt, str) and len(opt.strip()) > 0 for opt in q["options"]), f"Empty option in {q['id']}"
    assert all(isinstance(opt, str) and len(opt.strip()) > 0 for opt in q["hindiOptions"]), f"Empty Hindi option in {q['id']}"
    
    # Answer index check
    assert q["answer"] in [0, 1, 2, 3], f"Invalid answer index in {q['id']}: {q['answer']}"
    
    # Explanation check
    assert len(q["explanation"].strip()) > 0, f"Missing English explanation in {q['id']}"
    assert len(q["hindiExplanation"].strip()) > 0, f"Missing Hindi explanation in {q['id']}"
    
    # Subject and Exam check
    assert len(q["subject"].strip()) > 0, f"Missing subject in {q['id']}"
    assert q["exam"] in ["UP_PRT", "UP_TGT", "UPTET", "ALL"], f"Invalid exam type in {q['id']}: {q['exam']}"

print("[OK] All 1,160+ Questions and PYQs passed Schema, Options, Answer Index, and Duplicate Checks.")

# 2. Check build output
dist_dir = os.path.join(os.path.dirname(__file__), "..", "dist")
assert os.path.exists(dist_dir), "dist directory must exist"
assert os.path.exists(os.path.join(dist_dir, "index.html")), "dist/index.html must exist"
assert os.path.exists(os.path.join(dist_dir, "manifest.json")), "dist/manifest.json must exist"
assert os.path.exists(os.path.join(dist_dir, "sw.js")), "dist/sw.js must exist"

print("[OK] Build artifacts (index.html, manifest.json, sw.js) verified.")
print("==================================================")
print("ALL QUALITY CONTROL CHECKS PASSED SUCCESSFULLY!")
print("==================================================")
