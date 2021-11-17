import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ServicesDeposit from '../services-deposit/services-deposit';
import ServicesCredit from '../services-credit/services-credit';
import ServicesInsurance from '../services-insurance/services-insurance';
import ServicesOnline from '../services-online/services-online';
import './services-tabs.scss';

const Tab = {
  DEPOSIT: 'deposit',
  CREDIT: 'credit',
  INSURANCE: 'insurance',
  ONLINE_SERVICES: 'online services',
};

const DEFAULT_TAB_VALUE = Tab.DEPOSIT;

const getActiveTabClassName = (activeTab, tab) => (activeTab === tab
  ? 'tabs__link--active'
  : '');

function ServicesTabs({ className }) {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB_VALUE);

  const handleTabsFocus = (evt) => {
    evt.preventDefault();
    const currentTab = evt.target;
    if (activeTab !== currentTab.dataset.value) {
      setActiveTab(currentTab.dataset.value);
    }
  };

  const handleTabsClick = (evt) => {
    evt.preventDefault();
    const currentTab = evt.target;
    if (activeTab !== currentTab.dataset.value) {
      setActiveTab(currentTab.dataset.value);
    }
  };

  return (
    <div className={`${className} tabs`}>
      <ul className='tabs__link-list' onFocus={handleTabsFocus} onClick={handleTabsClick}>
        <li className='tabs__item'>
          <a className={`tabs__link ${getActiveTabClassName(activeTab, Tab.DEPOSIT)}`} data-value={Tab.DEPOSIT} href='./#'><span className='tabs__name tabs__name--deposit'>Вклады</span></a>
        </li>
        <li className='tabs__item'>
          <a className={`tabs__link ${getActiveTabClassName(activeTab, Tab.CREDIT)}`} data-value={Tab.CREDIT} href='./#'><span className='tabs__name tabs__name--credit'>Кредиты</span></a>
        </li>
        <li className='tabs__item'>
          <a className={`tabs__link ${getActiveTabClassName(activeTab, Tab.INSURANCE)}`} data-value={Tab.INSURANCE} href='./#'><span className='tabs__name tabs__name--insurance'>Страхование</span></a>
        </li>
        <li className='tabs__item'>
          <a className={`tabs__link ${getActiveTabClassName(activeTab, Tab.ONLINE_SERVICES)}`} data-value={Tab.ONLINE_SERVICES} href='./#'><span className='tabs__name tabs__name--service'>Онлайн-сервисы</span></a>
        </li>
      </ul>
      {Tab.DEPOSIT === activeTab ? <ServicesDeposit /> : null}
      {Tab.CREDIT === activeTab ? <ServicesCredit /> : null}
      {Tab.INSURANCE === activeTab ? <ServicesInsurance /> : null}
      {Tab.ONLINE_SERVICES === activeTab ? <ServicesOnline /> : null}
    </div>
  );
}

ServicesTabs.propTypes = {
  className: PropTypes.string,
};

ServicesTabs.defaultProps = {
  className: '',
};

export default ServicesTabs;
