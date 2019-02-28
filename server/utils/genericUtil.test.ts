import Test from 'ava';
import {slugify} from './genericUtil';

Test('slugify will return a string', t => {
  const title = 'a new title';
  const output = slugify(title);
  t.truthy(output);
});
