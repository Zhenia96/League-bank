import React from 'react';
import PropTypes from 'prop-types';
import MainButton from '../main-button/main-button';
import previewItemType from './constant';
import './preview-item.scss';

const PreviewItem = ({ type, slogan, link }) => (
  <article className={`preview-item preview-item--${previewItemType[type]}`}>
    <p className={`preview-item__lead preview-item__lead--${previewItemType[type]}`}>Лига Банк</p>
    <p className={`preview-item__slogan preview-item__slogan--${previewItemType[type]}`}>{slogan}</p>
    {link
      ? (
        <MainButton className={`preview-item__button preview-item__button--${previewItemType[type]}`} href={link.href}>
          {link.text}
        </MainButton>
      )
      : ''}
  </article>
);

PreviewItem.propTypes = {
  type: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  link: PropTypes.shape(
    {
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    },
  ),
};

PreviewItem.defaultProps = {
  link: null,
};

export default PreviewItem;
