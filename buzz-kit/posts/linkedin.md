I just shipped works-on-my-machine-badge, a GitHub Action that updates a repo-based badge JSON from CI status. No external services required.

Quickstart:
```yaml
- uses: PetriLahdelma/works-on-my-machine-badge@v0
  with:
    state: ${{ job.status }}
```

If you use README badges, I would love feedback.
