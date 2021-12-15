import React from 'react';
import Preview from '../preview/preview';
import Services from '../services/services';
import Location from '../location/location';

function MainContent() {
  return (
    <main>
      <Preview />
      <Services />
      <Location />
    </main>
  );
}

export default MainContent;
