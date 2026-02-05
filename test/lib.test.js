import assert from "node:assert/strict";
import { normalizeState } from "../dist/lib.js";

assert.deepEqual(normalizeState("success"), { state: "pass", recognized: true });
assert.deepEqual(normalizeState("failure"), { state: "fail", recognized: true });
assert.deepEqual(normalizeState("cancelled"), { state: "neutral", recognized: true });
assert.deepEqual(normalizeState("whatever"), { state: "neutral", recognized: false });
console.log("lib.test.js ok");
