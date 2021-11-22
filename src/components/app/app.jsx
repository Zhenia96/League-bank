import React from 'react';
import MainHeader from '../main-header/main-header';
import Preview from '../preview/preview';
import Services from '../services/services';
import Location from '../location/location';
import MainFooter from '../main-footer/main-footer';

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Preview />
        <Services />
        <Location />
        <MainFooter />
      </main>
    </>
  );
}

export default App;
