import anyTest, {TestInterface} from 'ava';
import {createBlurb, MAX_BLURB_LEN} from './stringUtil';

const test = anyTest as TestInterface<{}>;

test('createBlurb will return a string that is the same if below the threashold', t => {
  const text = 'this is some text';
  const output = createBlurb(text);

  t.deepEqual(text, output);
});

test('createBlurb will shorten a long string and add ellipsis', t => {
  const text =
    'this is more text this is ffffmore text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text';
  const output = createBlurb(text);

  let expected = text.substr(0, MAX_BLURB_LEN);
  const lastSpace = expected.lastIndexOf(' ');
  expected = `${expected.substr(0, lastSpace)}...`;

  t.true(output.length <= MAX_BLURB_LEN);
  t.deepEqual(output, expected);
});
