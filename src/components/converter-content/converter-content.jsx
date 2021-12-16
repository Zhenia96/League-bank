import React from 'react';
import Preview from '../preview/preview';
import Converter from '../converter/converter';

const ConverterContent = () => (
  <main>
    <h1 className='visually-hidden'>Страница конвертера валют</h1>
    <Preview />
    <Converter />
  </main>
);

export default ConverterContent;
