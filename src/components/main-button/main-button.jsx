import React from 'react';
import PropTypes from 'prop-types';
import './main-button.scss';

const MainButton = ({ children, className, href }) => (
  <a className={`${className ?? ''} main-button`} href={href}>
    {children}
  </a>
);

MainButton.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
};

MainButton.defaultProps = {
  className: '',
  href: '/#',
};

export default MainButton;
