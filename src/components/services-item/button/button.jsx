import React from 'react';
import PropTypes from 'prop-types';
import MainButton from '../../main-button/main-button';
import './button.scss';

const Button = ({ children, className, href }) => (
  <MainButton className={`service-button ${className}`} href={href}>
    {children}
  </MainButton>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  href: '/#',
};

export default Button;
