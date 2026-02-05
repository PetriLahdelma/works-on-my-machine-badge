# Inputs

| Input | Required | Default | Description |
| --- | --- | --- | --- |
| `state` | yes | - | `success` \| `failure` \| `cancelled` \| `skipped` \| `neutral` \| `pass` \| `fail` |
| `status-file` | no | `badge/status.json` | Repo path for the badge JSON |
| `label` | no | `works on my machine` | Badge label |
| `message` | no | `apparently` | Badge message |
| `color` | no | `green` | Badge color |
| `comment-on-pr` | no | `false` | Comment on PR with the result |
| `github-token` | no | `GITHUB_TOKEN` | GitHub token used to commit |
| `commit-message` | no | `chore: update badge status` | Commit message |
