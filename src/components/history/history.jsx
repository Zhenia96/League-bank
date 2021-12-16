import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getHistory from '../../store/history/selectors';
import { clearHistory } from '../../store/action';
import HistoryItem from '../history-item/history-item';
import './history.scss';

const History = () => {
  const histories = useSelector(getHistory);
  const dispatch = useDispatch();

  const handleClearButtonClick = () => {
    dispatch(clearHistory());
  };

  return (
    <section className='history'>
      <h2 className='history__title'>История конвертация</h2>
      <ul className='history__list'>
        {histories.map((item) => <HistoryItem history={item} />)}
      </ul>
      <button onClick={handleClearButtonClick} className='history__clear-button' type='button'>Очистить историю</button>
    </section>
  );
};

export default History;
