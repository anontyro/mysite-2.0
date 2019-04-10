import anyTest, {TestInterface} from 'ava';
import {setAuthor} from './blogUtil';

const test = anyTest as TestInterface<{}>;

test('setAuthor will correctly set 3 to Alex', t => {
  const author = setAuthor(3);
  t.deepEqual(author, 'Alex');
});

test('setAuthor will default to guest', t => {
  const author = setAuthor();
  t.deepEqual(author, 'Guest');
});
