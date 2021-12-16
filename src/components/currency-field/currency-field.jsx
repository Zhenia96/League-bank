import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './currency-field.scss';

const AMOUNT_REGULAR_EXPRESSION = /^(\d{0,13})([.]\d{0,4})?$/;

const isAmountValid = (number) => AMOUNT_REGULAR_EXPRESSION.test(number);

const CurrencyField = ({
  name, parentName, title, postfix, isDisabled, amountLable, onAmountInput, onNameChange, amount,
}) => {
  const nameRef = useRef(null);
  const amountRef = useRef(null);

  if (nameRef.current && amountRef.current) {
    nameRef.current.value = name;
    amountRef.current.value = amount;
  }

  const handleAmountInput = (evt) => {
    const { value } = evt.target;

    if (isAmountValid(value)) {
      onAmountInput(value);
    }
  };

  const handleNameChange = (evt) => {
    const { value } = evt.target;

    onNameChange(value);
  };

  return (
    <fieldset className={`currency ${parentName}__currency ${parentName}__currency--${postfix}`} disabled={isDisabled}>
      <legend className='currency__title'>{title}</legend>
      <p className='currency__wrapper currency__wrapper--amount'>
        <label className='visually-hidden' htmlFor={`value-${postfix}`}>{amountLable}</label>
        <input className='currency__amount' ref={amountRef} onInput={handleAmountInput} type='text' name={`value-${postfix}`} id={`value-${postfix}`} pattern='^(\d{0,13})([.]\d{0,4})?$' value={`${amount}`} required />
      </p>
      <p className='currency__wrapper'>
        <label className='currency__name-label'>
          <select className='currency__name' ref={nameRef} onChange={handleNameChange} name={`currency-${postfix}`} value={`${name}`} required>
            <option value='RUB'>RUB</option>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
            <option value='CNY'>CNY</option>
          </select>
        </label>
      </p>
    </fieldset>
  );
};

CurrencyField.propTypes = {
  parentName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postfix: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  amountLable: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onAmountInput: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
};

export default CurrencyField;
