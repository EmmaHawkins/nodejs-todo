import { Selector } from "testcafe";

fixture `Check to Do list functionality`
  .page(`localhost:3000`);

test('Can navigate to the Home Page', async t => {
  const header = Selector('h2').withExactText(' A Simple ToDo List App ');
  await t
    .expect(header).ok("Header not visible");
});