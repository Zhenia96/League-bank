import React from 'react';
import MainHeader from '../main-header/main-header';
import Preview from '../preview/preview';
import Services from '../services/services';

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Preview />
        <Services />
      </main>
    </>
  );
}

export default App;
