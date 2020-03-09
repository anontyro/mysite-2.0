import anyTest, {TestInterface} from 'ava';
import {slugify, REGEX_LIST, randomIntFromInterval} from './genericUtil';

const test = anyTest as TestInterface<{}>;

test('slugify will return a string with no spaces', t => {
  const title = 'a new title';
  const slug = slugify(title);
  const whiteSpaceMatch = slug.match(' ');

  t.falsy(whiteSpaceMatch);
});

test('slugify will return only one hyphen between words', t => {
  const title = 'a new title    then    thid';
  const slug = slugify(title);
  const extraHyphen = slug.match(REGEX_LIST.REMOVE_EXTRA_HYPHEN);

  t.falsy(extraHyphen);
});

test('slugify will remove all none alphabetical and numeric characters', t => {
  const title = 'a new title    then    thid #$@#$ @$@#$ @$@#$ then )(*&Y^TR';
  const slug = slugify(title);
  const extraHyphen = slug.match(REGEX_LIST.REMOVE_EXTRA_HYPHEN);
  const whiteSpaceMatch = slug.match(' ');

  t.falsy(whiteSpaceMatch);
  t.falsy(extraHyphen);
});

test('randomInFromInterval will return random numbers within the range', t => {
  let num = randomIntFromInterval(1, 2);
  t.true(num === 1 || num === 2);

  num = randomIntFromInterval(1, 2);
  t.true(num === 1 || num === 2);

  num = randomIntFromInterval(1, 2);
  t.true(num === 1 || num === 2);

  num = randomIntFromInterval(1, 2);
  t.true(num === 1 || num === 2);

  num = randomIntFromInterval(1, 2);
  t.true(num === 1 || num === 2);

  num = randomIntFromInterval(1, 2);
  t.true(num === 1 || num === 2);
});
