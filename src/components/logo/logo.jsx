import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoIcon from '../../img/icons/logo.svg';
import { Path } from '../../constants';
import './logo.scss';

const Logo = ({ className }) => (
  <Link className={`${className ?? ''} logo`} to={Path.MAIN}>
    <img className='logo__icon' src={logoIcon} alt='Логотип Лига Банка' />
    ЛИГА Банк
  </Link>
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
