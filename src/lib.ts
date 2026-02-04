export function normalizeState(state: string): "pass" | "fail" | "neutral" {
  const s = (state || "").toLowerCase();
  if (s === "success" || s === "pass") return "pass";
  if (s === "failure" || s === "fail") return "fail";
  return "neutral";
}
