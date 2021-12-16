import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { DateFormat } from '../../constants';
import { addHistory } from '../../store/action';
import { reverseNumber, formatDate } from '../../utils';
import getCourse from '../../api';
import DateField from '../date-field/date-field';
import CurrencyField from '../currency-field/currency-field';
import './converter.scss';

const NUMBER_COUNT_AFTER_DOT = 4;
const DEFAULT_COURSE = 0.0131234;
const DEFAULT_FROM_CURRENCY_NAME = 'RUB';
const DEFAULT_FROM_CURRENCY_AMOUNT = '1000';
const DEFAULT_TO_CURRENCY_NAME = 'USD';
const DEFAULT_TO_CURRENCY_AMOUNT = DEFAULT_FROM_CURRENCY_AMOUNT * DEFAULT_COURSE;

const Converter = () => {
  const [fromCurrencyName, setFromCurrencyName] = useState(DEFAULT_FROM_CURRENCY_NAME);
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(DEFAULT_FROM_CURRENCY_AMOUNT);
  const [toCurrencyName, setToCurrencyName] = useState(DEFAULT_TO_CURRENCY_NAME);
  const [toCurrencyAmount, setToCurrencyAmount] = useState(DEFAULT_TO_CURRENCY_AMOUNT);
  const [isLoaded, setIsLoaded] = useState(true);
  const [date, setDate] = useState(formatDate(dayjs(), DateFormat.DEFAULT));
  const [course, setCourse] = useState(DEFAULT_COURSE);

  const dispatch = useDispatch();

  useEffect(
    () => {
      setIsLoaded(false);

      getCourse(fromCurrencyName, toCurrencyName, date)
        .then((currentCourse) => setCourse(currentCourse))
        .finally(() => setIsLoaded(true));
    },
    [fromCurrencyName, toCurrencyName, date],
  );

  useEffect(
    () => {
      if (!isLoaded) {
        setToCurrencyAmount((fromCurrencyAmount * course).toFixed(NUMBER_COUNT_AFTER_DOT));
      }
    },
    [course, fromCurrencyAmount, isLoaded, setToCurrencyAmount],
  );

  const handleFromCurrencyAmountInput = (amount) => {
    setFromCurrencyAmount(amount);
    setToCurrencyAmount((amount * course).toFixed(NUMBER_COUNT_AFTER_DOT));
  };

  const handleToCurrencyAmountInput = (amount) => {
    const reversedCourse = reverseNumber(course);

    setFromCurrencyAmount((amount * reversedCourse).toFixed(NUMBER_COUNT_AFTER_DOT));
    setToCurrencyAmount(amount);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const historyItem = {
      from: {
        name: fromCurrencyName,
        amount: fromCurrencyAmount,
      },
      to: {
        name: toCurrencyName,
        amount: toCurrencyAmount,
      },
      date,
    };

    dispatch(addHistory(historyItem));
  };

  return (
    <section className='converter'>
      <h2 className='converter__title'>Конвертер валют</h2>
      <form className='converter__form' action='/' method='post' onSubmit={handleSubmit}>
        <CurrencyField
          parentName='converter'
          title='У меня есть'
          postfix='from'
          amount={String(fromCurrencyAmount)}
          amountLable='Сумма конвертации'
          name={fromCurrencyName}
          onAmountInput={handleFromCurrencyAmountInput}
          onNameChange={setFromCurrencyName}
          isDisabled={!isLoaded}
        />
        <CurrencyField
          parentName='converter'
          title='Хочу приобрести'
          postfix='to'
          amount={String(toCurrencyAmount)}
          amountLable='Результат конвертации'
          name={toCurrencyName}
          onAmountInput={handleToCurrencyAmountInput}
          onNameChange={setToCurrencyName}
          isDisabled={!isLoaded}
        />
        <DateField
          parentName='converter'
          date={date}
          onDateChange={setDate}
          isDisabled={!isLoaded}
        />
        <button className='converter__submit' type='submit' disabled={!isLoaded}>Сохранить результат</button>
      </form>
    </section>
  );
};

export default Converter;
