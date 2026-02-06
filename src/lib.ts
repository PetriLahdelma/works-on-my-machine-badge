export type NormalizedState = "pass" | "fail" | "neutral";

const PASS = new Set(["success", "pass"]);
const FAIL = new Set(["failure", "fail", "error", "timed_out", "timed-out"]);
const NEUTRAL = new Set(["neutral", "cancelled", "canceled", "skipped"]);

export function normalizeState(
  state: string
): { state: NormalizedState; recognized: boolean } {
  const s = (state || "").toLowerCase();
  if (PASS.has(s)) return { state: "pass", recognized: true };
  if (FAIL.has(s)) return { state: "fail", recognized: true };
  if (NEUTRAL.has(s)) return { state: "neutral", recognized: true };
  return { state: "neutral", recognized: false };
}

export function defaultColorForState(state: NormalizedState): string {
  if (state === "pass") return "green";
  if (state === "fail") return "red";
  return "lightgrey";
}
