**A) Positioning**
Hooks:
- Badges should reflect reality, not hope.
- Make "works on my machine" a CI truth badge.
- Update your badge straight from CI.
- Repo-only status badge, no external services.
- The honest badge for your README.
Tagline: A badge that reports the truth from CI.
One-breath: works-on-my-machine-badge is a GitHub Action that writes a repo-based badge JSON reflecting CI status.
Use-cases:
- Keep a README badge aligned with the latest CI run.
- Publish a shields.io endpoint badge without extra services.
- Optionally comment status on PRs.
Differentiator: Repo-only badge updates via CI, no external service dependency.

**B) Repo Structure**
Recommended minimal tree additions:
- `buzz-kit/` for launch assets and copy.
- `badge/status.json` as the default badge endpoint.
- `docs/` for badge usage examples.
Try in 10 seconds command flow:
1. Add the action step to your workflow.
2. Let CI write `badge/status.json`.
3. Point a shields.io endpoint badge at the raw JSON.
Trust & safety notes:
- Commits a status file to your repo using `GITHUB_TOKEN`.
- Review workflow permissions and the `status-file` path.

**C) README**
Above-the-fold block inserted:
````md
# works-on-my-machine-badge
A badge that reports the truth from CI.

- Updates a repo-based `badge/status.json` to reflect CI status.
- Repo-only badge with no external services required.
- Optional PR comments plus configurable label, message, and color.

**Copy/paste**
```yaml
- uses: PetriLahdelma/works-on-my-machine-badge@v0
  with:
    state: ${{ job.status }}
```

**Demo**
Record a CI run and show the badge URL updating.

**Trust & safety**
This action commits a status file to your repo using `GITHUB_TOKEN`. Review workflow permissions and the target path.

Star if this saves you time.  
→ Buzz Kit: /buzz-kit
````
Outline recommendations:
- Why this exists
- Quickstart
- Badge URL example
- Inputs and configuration
- CI permissions
- FAQ
- Contributing
- License

**D) Viral Artifacts**
Demo scenarios:
- CI run that flips the badge from red to green.
- Custom label and message update in `status.json`.
- Optional PR comment from the action.
What to record and framing:
- CI log plus the badge URL in a README.
- 15 to 20 seconds for the short, 45 to 60 seconds for the long.
- Frame as "honest badges from CI".
15 to 20 second script:
- "Badges should reflect reality."
- Show the workflow step and a CI run.
- "It updates a repo-based badge JSON automatically." 
45 to 60 second script:
- "This GitHub Action writes `badge/status.json` from CI." 
- "Point shields.io at the raw JSON for a live badge." 
- "You can customize label, message, color, and PR comments." 
Captions:
- "An honest CI badge."
- "Repo-only badge updates from CI."
- "Stop lying with badges." 

**E) Distribution Plan**
Targets:
- r/github
- r/devops
- r/opensource
- r/programming
- r/cicd
- r/node
- Hacker News Show HN
- Lobsters
- Indie Hackers
- dev.to
- Awesome GitHub Actions list
- Awesome CI list
Day 1 launch package:
- Reddit post: "I built works-on-my-machine-badge, a GitHub Action that writes a repo-based badge JSON from CI. No external services. Quickstart: `- uses: PetriLahdelma/works-on-my-machine-badge@v0` with `state: ${{ job.status }}`. It updates `badge/status.json` so shields.io can render it. Feedback welcome."
- HN Show: "Show HN: works-on-my-machine-badge — a repo-only CI truth badge"
- X thread line 1: "1/ Badges should reflect reality, not hope." 
- X thread line 2: "2/ This action writes `badge/status.json` from CI status." 
- X thread line 3: "3/ Shields.io can render it as a live badge." 
- X thread line 4: "4/ Try: `- uses: PetriLahdelma/works-on-my-machine-badge@v0`" 
- X thread line 5: "5/ Repo: PetriLahdelma/works-on-my-machine-badge" 
- LinkedIn post: "Just released works-on-my-machine-badge, a GitHub Action that updates a repo-based badge JSON from CI. No external services required. Add the action step, and shields.io can render the badge from `badge/status.json`. If you use badges, I would love feedback."
2-week cadence plan:
- Day 1: Launch posts + demo short.
- Day 3: Share a badge flip clip.
- Day 5: Post a configuration example.
- Day 7: Share an FAQ on permissions.
- Day 10: Post a PR comment demo.
- Day 14: Recap and collect feature requests.

**F) Curator Outreach**
Press-kit contents:
- `press-kit/one-pager.md`
- `press-kit/demo-script-15s.md`
- `press-kit/demo-script-60s.md`
- `press-kit/screenshots-plan.md`
- `posts/reddit.md`
- `posts/hn.md`
- `posts/x-thread.md`
- `posts/linkedin.md`
- `checklist-14-days.md`
120-word email pitch:
"Hi [Name], I built works-on-my-machine-badge, a GitHub Action that writes a repo-based badge JSON from CI status. It updates `badge/status.json` using `GITHUB_TOKEN`, so you can point shields.io at the raw file and get an honest badge with no external services. Inputs let you customize label, message, and color, plus optional PR comments. If your readers care about CI tooling or GitHub Actions, this could be a useful feature. Happy to share a demo clip or workflow snippet."
280-char DM pitch:
"Built works-on-my-machine-badge: a GitHub Action that writes `badge/status.json` from CI so your badge reflects reality. Repo-only, no external services. Add: `- uses: PetriLahdelma/works-on-my-machine-badge@v0`."
Follow-ups:
- "Quick bump in case you missed this. Happy to send a 15s demo clip or workflow snippet."
- "If this is not a fit, who else covers CI tooling or GitHub Actions?"
Search queries:
- "GitHub Actions newsletter"
- "CI tooling roundup"
- "developer productivity badge"
- "devops newsletter"
- "open source CI tools"
- "awesome GitHub Actions list"
- "CI/CD community"
- "dev tools YouTube CI"
- "engineering productivity podcast"
- "README badges guide"

**G) Execution Checklist**
Day 0: Add the action to a sample repo and confirm status.json updates.
Day 1: Launch posts and 15s demo clip.
Day 2: Share a badge flip clip.
Day 3: Post a configuration example.
Day 4: Share a permissions note and best practices.
Day 5: Post a PR comment demo.
Day 6: Ask for feedback on labels/messages.
Day 7: Publish 60s walkthrough.
Day 8: Share a shields.io endpoint example.
Day 9: Post FAQ on repo-only approach.
Day 10: Ask for integrations.
Day 11: Recap early feedback.
Day 12: Ship minor updates if needed.
Day 13: Share a user example.
Day 14: Publish roadmap and contribution requests.
Metrics to track:
- GitHub stars and clones
- Action usage and forks
- Demo views and completion rate
- Issues opened and feature requests
What to fix if momentum stalls:
- Show the badge update in the first 5 seconds.
- Add a minimal workflow example in the README.
- Clarify required permissions and the status file path.
