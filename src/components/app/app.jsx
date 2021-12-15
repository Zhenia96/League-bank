import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainHeader from '../main-header/main-header';
import MainContent from '../main-content/main-content';
import MainFooter from '../main-footer/main-footer';
import { Path } from '../../constants';

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route
          exact
          path={Path.MAIN}
          element={<MainContent />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path={Path.CONVERTER}
          element={<div>Конвертер</div>}
        />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
