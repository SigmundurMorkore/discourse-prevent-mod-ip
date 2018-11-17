import { acceptance } from "helpers/qunit-helpers";

acceptance("DiscoursePreventModIP", { loggedIn: true });

test("DiscoursePreventModIP works", async assert => {
  await visit("/admin/plugins/discourse-prevent-mod-ip");

  assert.ok(false, "it shows the DiscoursePreventModIP button");
});
