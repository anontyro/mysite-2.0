import * as moment from 'moment';

export const DATE_STANDARD_FORMAT = 'MMM Do YYYY';

const formatDate = (format: string) => (date: Date) =>
  moment(date).format(format);

const standard = formatDate(DATE_STANDARD_FORMAT);

export const standardDate = (date: Date) => {
  if (!date) {
    return null;
  }
  return standard(date);
};
