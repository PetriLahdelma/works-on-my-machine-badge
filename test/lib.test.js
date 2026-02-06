import assert from "node:assert/strict";
import { defaultColorForState, normalizeState } from "../dist/lib.js";

assert.deepEqual(normalizeState("success"), { state: "pass", recognized: true });
assert.deepEqual(normalizeState("failure"), { state: "fail", recognized: true });
assert.deepEqual(normalizeState("cancelled"), { state: "neutral", recognized: true });
assert.deepEqual(normalizeState("whatever"), { state: "neutral", recognized: false });
assert.equal(defaultColorForState("pass"), "green");
assert.equal(defaultColorForState("fail"), "red");
assert.equal(defaultColorForState("neutral"), "lightgrey");
console.log("lib.test.js ok");
