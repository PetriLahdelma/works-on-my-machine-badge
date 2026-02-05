Show HN: works-on-my-machine-badge — a repo-only CI truth badge

This GitHub Action writes `badge/status.json` from CI status so a shields.io endpoint badge reflects reality. Quickstart:

```yaml
- uses: PetriLahdelma/works-on-my-machine-badge@v0
  with:
    state: ${{ job.status }}
```

No external services required.
