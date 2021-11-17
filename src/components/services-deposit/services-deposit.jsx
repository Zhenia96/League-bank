import React from 'react';
import {
  Container,
  Slogan,
  List,
  ListItem,
  Button,
} from '../services-item/services-item';
import './services-deposit.scss';

const ServicesDeposit = () => (
  <Container className='services-deposit'>
    <Slogan>
      Вклады Лига Банка – это выгодная
      <br />
      инвестиция в свое будущее
    </Slogan>
    <List>
      <ListItem>Проценты по вкладам до 7%</ListItem>
      <ListItem>Разнообразные условия</ListItem>
      <ListItem className='services-deposit__list-item'>
        Возможность ежемесячной капитализации
        или вывод процентов на банковскую карту
      </ListItem>
    </List>
    <Button>Узнать подробнее</Button>
  </Container>
);

export default ServicesDeposit;
