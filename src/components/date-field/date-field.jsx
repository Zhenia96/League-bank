import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { DateFormat } from '../../constants';
import { formatDate } from '../../utils';
import './date-field.scss';

const DATE_RANGE = 7;

const DateField = ({
  parentName, date, isDisabled, onDateChange,
}) => {
  const currentDate = dayjs();
  const maxRangeDate = formatDate(currentDate, DateFormat.DEFAULT);
  const minRangeDate = formatDate(currentDate.subtract(DATE_RANGE, 'day'), DateFormat.DEFAULT);

  const handleDateChange = (evt) => {
    onDateChange(evt.target.value);
  };

  return (
    <p className={`date-field ${parentName}__date-field`}>
      <label className='visually-hidden' htmlFor='date'>Выберите дету курса</label>
      <input className='date-field__date-picker' onChange={handleDateChange} type='date' name='date' id='date' min={minRangeDate} max={maxRangeDate} value={date} disabled={isDisabled} required />
    </p>
  );
};

DateField.propTypes = {
  parentName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DateField;
