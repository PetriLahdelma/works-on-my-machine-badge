# Status Mapping

Accepted states and their normalized output:

| Input | Normalized | Suggested color |
| --- | --- | --- |
| `success`, `pass` | `pass` | `green` |
| `failure`, `fail`, `error`, `timed_out`, `timed-out` | `fail` | `red` |
| `neutral`, `cancelled`, `canceled`, `skipped` | `neutral` | `lightgrey` |

The action does not auto-select colors; pass `color` or map it in your workflow.
Unrecognized states error out to prevent bad badges.
