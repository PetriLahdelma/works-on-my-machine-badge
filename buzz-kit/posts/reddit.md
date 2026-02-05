Title: Show: works-on-my-machine-badge — repo-only CI truth badge

Body:
I built works-on-my-machine-badge, a GitHub Action that writes `badge/status.json` from CI status so your README badge reflects reality. No external services.

Quickstart:
```yaml
- uses: PetriLahdelma/works-on-my-machine-badge@v0
  with:
    state: ${{ job.status }}
```

Feedback welcome, especially on permissions and defaults.
