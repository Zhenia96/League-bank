import React from 'react';
import PropTypes from 'prop-types';
import './container.scss';

const Container = ({ children, className }) => (
  <article className={`service-container ${className}`}>
    {children}
  </article>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: '',
};

export default Container;
