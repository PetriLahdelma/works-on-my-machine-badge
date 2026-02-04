import assert from "node:assert/strict";
import { normalizeState } from "../dist/lib.js";

assert.equal(normalizeState("success"), "pass");
assert.equal(normalizeState("failure"), "fail");
assert.equal(normalizeState("whatever"), "neutral");
console.log("lib.test.js ok");
