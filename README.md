<picture>
  <source srcset="branding/hero.svg" type="image/svg+xml">
  <img alt="works-on-my-machine-badge hero" src="branding/hero.png" width="100%">
</picture>

# works-on-my-machine-badge
A badge that reports the truth from CI. Repo-only badges that update from real CI results.

![CI](https://github.com/PetriLahdelma/works-on-my-machine-badge/actions/workflows/ci.yml/badge.svg) ![Release](https://img.shields.io/github/v/release/PetriLahdelma/works-on-my-machine-badge) ![License](https://img.shields.io/github/license/PetriLahdelma/works-on-my-machine-badge) ![Stars](https://img.shields.io/github/stars/PetriLahdelma/works-on-my-machine-badge)

> [!IMPORTANT]
> This action commits to your repo using `GITHUB_TOKEN`. Review workflow permissions before enabling on forks.

## Quickstart
```yaml
- name: Update badge status
  permissions:
    contents: write
  uses: PetriLahdelma/works-on-my-machine-badge@v0
  with:
    state: ${{ job.status }}
```

## Demo
![Terminal Demo](branding/screenshots/terminal-demo.svg)

```text
https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/OWNER/REPO/main/badge/status.json
```

## Docs
Start here: [Requirements](#requirements) · [Inputs](#inputs) · [Output](#output) · [Permissions](#permissions) · [Example Workflow](#example-workflow) · [Badge URL](#badge-url) · [Troubleshooting](#troubleshooting)

## Contributing
See `CONTRIBUTING.md`.

## Requirements

- Node.js 20+ (GitHub Actions `node20`)
- `contents: write` permission to update `badge/status.json`

## Inputs

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

## Output

`badge/status.json` (shields endpoint format):

```json
{
  "schemaVersion": 1,
  "label": "works on my machine",
  "message": "apparently",
  "color": "green",
  "state": "pass",
  "updated": "2026-02-05T12:34:56.000Z",
  "runId": 123456789,
  "runUrl": "https://github.com/OWNER/REPO/actions/runs/123456789"
}
```

## Permissions

- `contents: write` required to create or update `badge/status.json`.
- `pull-requests: write` required only when `comment-on-pr: true`.

## Example Workflow

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

## Badge URL

```text
https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/OWNER/REPO/main/badge/status.json
```

## Troubleshooting

- **Action failed with “Unsupported state”**: Ensure `state` is one of the supported values above.
- **401/403 committing**: Check workflow permissions include `contents: write`.
- **No PR comment**: Ensure workflow runs on `pull_request` and `comment-on-pr` is `true`.
- **Badge not updating**: Confirm `status-file` path and default branch in the URL.
- **Unexpected neutral**: Verify `state` is populated (use `${{ job.status }}`).

## Exit Codes

- Action fails the job if inputs are invalid or GitHub API calls fail.

## Why This Exists

Badges should reflect reality. This uses CI to update status.json.

## FAQ

- **Is it repo-only?** Yes, no external services.
- **Does it comment on PRs?** Optional.

## License

MIT

