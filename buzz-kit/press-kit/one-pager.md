**Overview**
works-on-my-machine-badge is a GitHub Action that updates a repo-based badge JSON to reflect CI status.

**Problem**
Badges often drift from reality or depend on external services.

**What It Does**
- Writes `badge/status.json` from CI status.
- Works as a repo-only badge endpoint.
- Supports custom label, message, color, and optional PR comments.

**Quickstart**
```yaml
- uses: PetriLahdelma/works-on-my-machine-badge@v0
  with:
    state: ${{ job.status }}
```

**Who It Is For**
Teams who want honest README badges without external services.

**Trust & Safety**
Commits a status file to your repo using `GITHUB_TOKEN`. Review workflow permissions and target path.

**Repo**
PetriLahdelma/works-on-my-machine-badge
