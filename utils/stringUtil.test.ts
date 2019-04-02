import anyTest, {TestInterface} from 'ava';
import {createBlurb} from './stringUtil';

const test = anyTest as TestInterface<{}>;

test('createBlurb will return a string that is the same if below the threashold', t => {
  const text = 'this is some text';
  const output = createBlurb(text);

  t.deepEqual(text, output);
});

test('createBlurb will shorten a long string and add ellipsis', t => {
  const text =
    'this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text this is more text';
  const output = createBlurb(text);
  const expected = `${text.substr(0, 50)}...`;
  t.deepEqual(output, expected);
});
