import React from 'react';
import PropTypes from 'prop-types';
import './slogan.scss';

const Slogan = ({ children, className }) => (
  <p className={`service-slogan ${className}`}>
    {children}
  </p>
);

Slogan.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Slogan.defaultProps = {
  className: '',
};

export default Slogan;
