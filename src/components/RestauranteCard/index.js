import React from 'react';
import ReactStars from 'react-rating-stars-component';
import imgRestaurante from '../../assets/restaurante-fake.png';

import theme from '../../theme';

import { Address, Restaurante, RestauranteInfo, Title, Photo } from './style';

const RestauranteCard = ({ restaurant }) => (
  <Restaurante>
    <RestauranteInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars
        count={5}
        isHalf
        edit={false}
        value={restaurant.rating}
        activeColor={theme.colors.secundary}
      />
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestauranteInfo>
    <Photo src={restaurant.photos ? restaurant.photos[0].getUrl() : imgRestaurante} alt="Foto" />
  </Restaurante>
);

export default RestauranteCard;
