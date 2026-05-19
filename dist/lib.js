const PASS = new Set(["success", "pass"]);
const FAIL = new Set(["failure", "fail", "error", "timed_out", "timed-out"]);
const NEUTRAL = new Set(["neutral", "cancelled", "canceled", "skipped"]);
export function normalizeState(state) {
    const s = (state || "").trim().toLowerCase();
    if (PASS.has(s))
        return { state: "pass", recognized: true };
    if (FAIL.has(s))
        return { state: "fail", recognized: true };
    if (NEUTRAL.has(s))
        return { state: "neutral", recognized: true };
    return { state: "neutral", recognized: false };
}
export function defaultColorForState(state) {
    if (state === "pass")
        return "green";
    if (state === "fail")
        return "red";
    return "lightgrey";
}
export function normalizeStatusFilePath(input) {
    const normalized = (input || "badge/status.json").trim().replace(/\\/g, "/");
    const parts = normalized.split("/").filter(Boolean);
    if (normalized === "" ||
        normalized.startsWith("/") ||
        normalized.includes("\0") ||
        parts.includes(".") ||
        parts.includes("..")) {
        throw new Error("status-file must be a relative repository path without . or .. segments.");
    }
    return parts.join("/");
}
//# sourceMappingURL=lib.js.map