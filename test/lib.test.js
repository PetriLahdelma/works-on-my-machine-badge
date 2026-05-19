import assert from "node:assert/strict";
import { defaultColorForState, normalizeState, normalizeStatusFilePath } from "../dist/lib.js";

assert.deepEqual(normalizeState("success"), { state: "pass", recognized: true });
assert.deepEqual(normalizeState(" success "), { state: "pass", recognized: true });
assert.deepEqual(normalizeState("failure"), { state: "fail", recognized: true });
assert.deepEqual(normalizeState("cancelled"), { state: "neutral", recognized: true });
assert.deepEqual(normalizeState("whatever"), { state: "neutral", recognized: false });
assert.equal(defaultColorForState("pass"), "green");
assert.equal(defaultColorForState("fail"), "red");
assert.equal(defaultColorForState("neutral"), "lightgrey");
assert.equal(normalizeStatusFilePath("badge/status.json"), "badge/status.json");
assert.equal(normalizeStatusFilePath(" badge\\nested\\status.json "), "badge/nested/status.json");
assert.equal(normalizeStatusFilePath(""), "badge/status.json");
assert.throws(() => normalizeStatusFilePath("/tmp/status.json"), /relative repository path/);
assert.throws(() => normalizeStatusFilePath("../status.json"), /relative repository path/);
assert.throws(() => normalizeStatusFilePath("badge/../status.json"), /relative repository path/);
console.log("lib.test.js ok");
