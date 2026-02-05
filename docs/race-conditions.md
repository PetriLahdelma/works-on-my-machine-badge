# Race Conditions

When multiple jobs update the same JSON file, the last job wins.

**Mitigations**
- Write to per-workflow JSON files and point your badge at the one you want.
- Add a finalizer job that runs after all jobs complete.
