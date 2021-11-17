import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';

const List = ({ children, className }) => (
  <ul className={`service-list ${className}`}>
    {children}
  </ul>
);

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

List.defaultProps = {
  className: '',
};

export default List;
