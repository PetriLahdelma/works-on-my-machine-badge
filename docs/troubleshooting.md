# Troubleshooting

- **Action failed with “Unsupported state”**: Ensure `state` is one of the supported values above.
- **401/403 committing**: Check workflow permissions include `contents: write`.
- **No PR comment**: Ensure workflow runs on `pull_request` and `comment-on-pr` is `true`.
- **Badge not updating**: Confirm `status-file` path and default branch in the URL.
- **Unexpected neutral**: Verify `state` is populated (use `${{ job.status }}`).
