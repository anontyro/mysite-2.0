import anyTest, {TestInterface} from 'ava';
import {mapDirectory} from './fileUtil';
import {BLOG_IMAGE_DIR, DEFAUlT_IMG} from '../data/serverConsts';

const test = anyTest as TestInterface<{}>;

test('mapDirectory will return directory data', async t => {
  const directory = await mapDirectory(BLOG_IMAGE_DIR);
  t.truthy(directory);
});

test('mapDirectory will return at least the default.png', async t => {
  const directory = await mapDirectory(BLOG_IMAGE_DIR);
  const imgDefault = directory.filter((file: string) => file === DEFAUlT_IMG);
  t.true(imgDefault.length === 1);
});
