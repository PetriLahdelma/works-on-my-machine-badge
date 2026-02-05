export default {
  name: "works-on-my-machine-badge",
  tagline: "A badge that reports the truth from CI.",
  value: "Repo-only badges that update from real CI results.",
  accent: "#22C55E",
  pills: ["Repo badge","PR comment","No services"],
  demo: ["$ node dist/index.js","Committed badge/status.json","State: success  Color: green","Badge: works on my machine — apparently"],
  callout: "This action commits to your repo using `GITHUB_TOKEN`. Review workflow permissions before enabling on forks.",
  quickstart: "uses: PetriLahdelma/works-on-my-machine-badge@v0",
  hero: { width: 1600, height: 900 },
  heroTitleLines: ["works-on-my","machine-badge"],
  heroTitleSize: 68,
  heroTitleLineHeight: 72,
  socialTitleLines: ["works-on-my","machine-badge"],
  socialTitleSize: 54,
  socialTitleLineHeight: 58,
  icon: {
    inner: `
<rect x="112" y="176" width="288" height="160" rx="80" stroke="{{accent}}" stroke-width="{{stroke}}"/>
<line x1="256" y1="176" x2="256" y2="336" stroke="{{accent}}" stroke-width="{{stroke}}" stroke-linecap="round"/>
<path d="M166 268 L204 306 L254 240" stroke="{{accent}}" stroke-width="{{stroke}}" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="316" y1="228" x2="316" y2="288" stroke="{{accent}}" stroke-width="{{stroke}}" stroke-linecap="round"/>
<circle cx="316" cy="308" r="14" fill="{{accent}}"/>
`
  }
};
