import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const reverseNumber = (number) => 1 / number;

const formatDate = (date, format) => date.format(format);

export {
  reverseNumber,
  formatDate,
};
