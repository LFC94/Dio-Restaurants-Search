import React from 'react';
import ReactStars from 'react-rating-stars-component';

import imgRestaurante from '../../assets/restaurante-fake.png';

import theme from '../../theme';

import { Address, Restaurante, RestauranteInfo, Title, Photo, MultPhoto } from './style';

const RestauranteCard = ({ restaurant }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 30,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
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
      {restaurant.photos ? (
        <MultPhoto {...settings}>
          {restaurant.photos.map((photo) => (
            <Photo src={photo.getUrl()} alt="Foto" />
          ))}
        </MultPhoto>
      ) : (
        <Photo src={imgRestaurante} alt="Foto" />
      )}
    </Restaurante>
  );
};

export default RestauranteCard;
