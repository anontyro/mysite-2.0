import anyTest, { TestInterface } from "ava";
import { createBlurb } from "./stringUtil";

const test = anyTest as TestInterface<{}>;

test("createBlurb will return a string", t => {
  const text = "this is some text";
  const output = createBlurb(text);

  t.truthy(output);
});
