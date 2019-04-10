import anyTest, {TestInterface} from 'ava';
import * as moment from 'moment';
import {standardDate, DATE_STANDARD_FORMAT} from './dateTimeUtil';

const test = anyTest as TestInterface<{}>;

test('standardDate will correctly format given dates', t => {
  const now = new Date();
  const standard = standardDate(now);
  const expected = moment(now).format(DATE_STANDARD_FORMAT);

  t.deepEqual(standard, expected);
});
