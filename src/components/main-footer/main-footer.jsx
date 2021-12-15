import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import InstagramIcon from '../../img/icons/insta.svg';
import FacebookIcon from '../../img/icons/fb.svg';
import TwitterIcon from '../../img/icons/twitter.svg';
import YoutubeIcon from '../../img/icons/youtube.svg';
import { Path } from '../../constants';
import './main-footer.scss';

export default function MainFooter() {
  return (
    <footer className='main-footer'>
      <div className='wrapper main-footer__grid'>
        <div className='main-footer__cell main-footer__cell--logo'>
          <Logo className='main-footer__logo' />
        </div>
        <div className='main-footer__cell main-footer__cell--address'>
          <address className='main-footer__address'>
            150015, г. Москва, ул. Московская, д. 32
            <br />
            Генеральная лицензия Банка России №1050
            <br />
            Ⓒ Лига Банк, 2019
          </address>
        </div>
        <div className='main-footer__cell main-footer__cell--navigation'>
          <ul className='main-footer__navigation-list'>
            <li className='main-footer__navigation-item'>
              <a className='link main-footer__navigation-link' href='/'>
                Услуги
              </a>
            </li>
            <li className='main-footer__navigation-item'>
              <Link className='link main-footer__navigation-link' to={Path.MAIN}>
                Рассчитать кредит
              </Link>
            </li>
            <li className='main-footer__navigation-item'>
              <a className='link main-footer__navigation-link' href='/'>
                Контакты
              </a>
            </li>
            <li className='main-footer__navigation-item'>
              <a className='link main-footer__navigation-link' href='/'>
                Задать вопрос
              </a>
            </li>
          </ul>
        </div>
        <div className='main-footer__cell main-footer__cell--phone-short'>
          <div className='main-footer__phone-container main-footer__phone-container--short'>
            <a className='link main-footer__phone' href='tel:*0904'>*0904</a>
            <p className='main-footer__phone-description'>
              Бесплатно для абонентов
              <br />
              МТС, Билайн, Мегафон, Теле2
            </p>
          </div>
        </div>
        <div className='main-footer__cell main-footer__cell--phone-long'>
          <div className='main-footer__phone-container main-footer__phone-container--long'>
            <a className='link main-footer__phone' href='tel:88001112233'>8 800 111 22 33</a>
            <p className='main-footer__phone-description'>
              Бесплатный для всех
              <br />
              {' '}
              городов России
            </p>
          </div>
        </div>
        <div className='main-footer__cell'>
          <ul className='main-footer__social'>
            <li className='main-footer__social-item'>
              <a className='main-footer__social-link' href='https://www.facebook.com/'>
                <img className='main-footer__social-icon' src={FacebookIcon} width='9' height='16' alt='Facebook' />
              </a>
            </li>
            <li className='main-footer__social-item'>
              <a className='main-footer__social-link' href='https://www.instagram.com/'>
                <img className='main-footer__social-icon' src={InstagramIcon} width='16' height='16' alt='Twitter' />
              </a>
            </li>
            <li className='main-footer__social-item'>
              <a className='main-footer__social-link' href='https://www.twitter.com/'>
                <img className='main-footer__social-icon' src={TwitterIcon} width='16' height='13' alt='Instagram' />
              </a>
            </li>
            <li className='main-footer__social-item'>
              <a className='main-footer__social-link' href='https://www.youtube.com/'>
                <img className='main-footer__social-icon' src={YoutubeIcon} width='16' height='13' alt='Youtube' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
