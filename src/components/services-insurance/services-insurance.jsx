import React from 'react';
import {
  Container,
  Slogan,
  List,
  ListItem,
  Button,
} from '../services-item/services-item';
import './services-insurance.scss';

const ServicesInsurance = () => (
  <Container className='services-insurance'>
    <Slogan>
      Лига Страхование — застрахуем
      <br />
      все что захотите
    </Slogan>
    <List>
      <ListItem>Автомобильное страхование</ListItem>
      <ListItem>Страхование жизни и здоровья</ListItem>
      <ListItem>Страхование недвижимости</ListItem>
    </List>
    <Button>Узнать подробнее</Button>
  </Container>
);

export default ServicesInsurance;
