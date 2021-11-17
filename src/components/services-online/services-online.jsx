import React from 'react';
import {
  Container,
  Slogan,
  List,
  ListItem,
  Button,
} from '../services-item/services-item';
import './services-online.scss';

const ServicesOnline = () => (
  <Container className='services-online'>
    <Slogan className='services-online__slogan'>
      Лига Банк — это огромное количество онлайн-сервисов для вашего удобства
    </Slogan>
    <List>
      <ListItem>
        Мобильный банк,
        <br />
        который всегда под рукой
      </ListItem>
      <ListItem className='services-online__list-item'>Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</ListItem>
    </List>
    <Button>Узнать подробнее</Button>
  </Container>
);

export default ServicesOnline;
