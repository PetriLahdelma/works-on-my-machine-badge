import core from "@actions/core";
import github from "@actions/github";

function normalizeState(state) {
  const s = (state || "").toLowerCase();
  if (s === "success" || s === "pass") return "pass";
  if (s === "failure" || s === "fail") return "fail";
  return "neutral";
}

async function run() {
  const stateInput = core.getInput("state");
  const statusFile = core.getInput("status-file") || "badge/status.json";
  const label = core.getInput("label") || "works on my machine";
  const message = core.getInput("message") || "apparently";
  const color = core.getInput("color") || "green";
  const commentOnPr = (core.getInput("comment-on-pr") || "false") === "true";
  const commitMessage = core.getInput("commit-message") || "chore: update badge status";

  const token = core.getInput("github-token") || process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN is required");

  const octokit = github.getOctokit(token);
  const { owner, repo } = github.context.repo;
  const state = normalizeState(stateInput);

  const payload = {
    schemaVersion: 1,
    label,
    message,
    color,
    state,
    updated: new Date().toISOString(),
    runId: github.context.runId,
    runUrl: `https://github.com/${owner}/${repo}/actions/runs/${github.context.runId}`
  };

  let sha;
  try {
    const existing = await octokit.rest.repos.getContent({ owner, repo, path: statusFile });
    if (!Array.isArray(existing.data) && existing.data.sha) sha = existing.data.sha;
  } catch {}

  const content = Buffer.from(JSON.stringify(payload, null, 2)).toString("base64");
  await octokit.rest.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: statusFile,
    message: commitMessage,
    content,
    sha
  });

  if (commentOnPr && github.context.payload.pull_request?.number) {
    const number = github.context.payload.pull_request.number;
    const body = `Badge updated to **${state.toUpperCase()}**.\n${payload.runUrl}`;
    await octokit.rest.issues.createComment({ owner, repo, issue_number: number, body });
  }
}

run().catch(err => {
  core.setFailed(err?.message || String(err));
});
