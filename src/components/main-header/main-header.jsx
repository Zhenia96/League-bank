import React, { useState } from 'react';
import Logo from '../logo/logo';
import loginIcon from '../../img/icons/login.svg';
import './main-header.scss';

const OPENED_MENU_CLASS = 'main-header--opened';

const MainHeader = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleOpenMenuButtonClick = () => {
    setIsMenuOpened((prev) => !prev);
  };

  const handleCloseMenuButtonClick = () => {
    setIsMenuOpened((prev) => !prev);
  };

  return (
    <header className={`main-header ${isMenuOpened ? OPENED_MENU_CLASS : ''}`}>
      <nav className='main-header__navigation wrapper'>
        <Logo className='main-header__logo' />
        <ul className='main-header__main-menu'>
          <li className='main-header__main-menu-item'><a className='main-header__main-menu-link link' href='/#'>Услуги</a></li>
          <li className='main-header__main-menu-item'><a className='main-header__main-menu-link link' href='/#'>Рассчитать кредит</a></li>
          <li className='main-header__main-menu-item'><a className='main-header__main-menu-link link' href='/#'>Конвертер валют</a></li>
          <li className='main-header__main-menu-item'><a className='main-header__main-menu-link link' href='/#'>Контакты</a></li>
        </ul>
        <ul className='main-header__user-menu'>
          <li className='main-header__user-menu-item'>
            <a className='main-header__user-login link' href='/#'>
              <img className='main-header__user-login-icon' src={loginIcon} alt='Логин' />
              <span className='main-header__user-login-text'>Войти в Интернет-банк</span>
            </a>
          </li>
        </ul>
      </nav>

      <button onClick={handleOpenMenuButtonClick} className='main-header__open-menu-button' type='button' aria-label='Открыть меню' />
      <button onClick={handleCloseMenuButtonClick} className='main-header__close-menu-button' type='button' aria-label='Закрыть меню' />

    </header>
  );
};

export default MainHeader;
