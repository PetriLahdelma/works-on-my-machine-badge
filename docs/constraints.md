# Constraints & Limitations

- Last writer wins: parallel jobs can overwrite the same JSON file.
- Requires `contents: write` permission in the workflow.
- Forked PRs need extra care; see `docs/fork-prs.md`.

Performance notes: dominated by GitHub API latency (one read + one write).
