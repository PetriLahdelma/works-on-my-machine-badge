# Example Workflow

```yaml
- name: Update badge status
  permissions:
    contents: write
    pull-requests: write
  uses: PetriLahdelma/works-on-my-machine-badge@v0
  with:
    state: ${{ job.status }}
    comment-on-pr: true
```
