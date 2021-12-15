import React from 'react';
import Preview from '../preview/preview';
import Services from '../services/services';
import Location from '../location/location';

function MainContent() {
  return (
    <main>
      <h1 className='visually-hidden'>Главная страница</h1>
      <Preview />
      <Services />
      <Location />
    </main>
  );
}

export default MainContent;
