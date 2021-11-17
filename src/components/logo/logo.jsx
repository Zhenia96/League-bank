import React from 'react';
import PropTypes from 'prop-types';
import logoIcon from '../../img/icons/logo.svg';
import './logo.scss';

const Logo = ({ className }) => (
  <a className={`${className ?? ''} logo`} href='/'>
    <img className='logo__icon' src={logoIcon} alt='Логотип Лига Банка' />
    ЛИГА Банк
  </a>
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
