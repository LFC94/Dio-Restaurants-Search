import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png';

import theme from '../../theme';

import { Address, Restaurante, RestauranteInfo, Title, Photo } from './style';

const RestauranteCard = () => (
  <Restaurante>
    <RestauranteInfo>
      <Title>Nome</Title>
      <ReactStars count={5} isHalf edit={false} value={4} activeColor={theme.colors.secundary} />
      <Address>ender</Address>
    </RestauranteInfo>
    <Photo src={restaurante} alt="Foto" />
  </Restaurante>
);

export default RestauranteCard;
