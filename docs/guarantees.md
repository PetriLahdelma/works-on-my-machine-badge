# Guarantees & Non-Goals

**Guarantees**
- Writes a JSON badge payload to the repo on every run.
- Uses GitHub's API only; no third-party services.
- Optional PR comment includes a link to the run.

**Non-Goals**
- Not a replacement for CI status checks.
- Does not aggregate multiple jobs without custom workflow logic.
- Does not host or render the badge itself.
