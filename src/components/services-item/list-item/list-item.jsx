import React from 'react';
import PropTypes from 'prop-types';
import './list-item.scss';

const ListItem = ({ children, className }) => (
  <li className={`service-list-item ${className}`}>{children}</li>
);

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ListItem.defaultProps = {
  className: '',
};

export default ListItem;
