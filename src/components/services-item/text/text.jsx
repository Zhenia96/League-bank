import React from 'react';
import PropTypes from 'prop-types';
import './text.scss';

const Text = ({ children, className }) => (
  <p className={`service-text ${className}`}>
    {children}
  </p>
);

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  className: '',
};

export default Text;
