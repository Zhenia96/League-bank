import React from 'react';
import {
  Container,
  Slogan,
  List,
  ListItem,
  Text,
} from '../services-item/services-item';
import './services-credit.scss';

const ServicesCredit = () => (
  <Container className='services-credit'>
    <Slogan>
      Лига Банк выдает кредиты
      <br />
      под любые цели
    </Slogan>
    <List>
      <ListItem>Ипотечный кредит</ListItem>
      <ListItem>Автокредит</ListItem>
      <ListItem>Потребительский кредит</ListItem>
    </List>
    <Text>
      Рассчитайте ежемесячный платеж
      <br />
      и ставку по кредиту воспользовавшись
      <br />
      нашим
      {' '}
      <a className='services-credit__link' href='/#'> кредитным калькулятором</a>
    </Text>
  </Container>
);

export default ServicesCredit;
