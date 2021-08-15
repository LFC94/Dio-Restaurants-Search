import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon/dist/index';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

import { Wrapper, Container, CarouselTitle, Search, Logo } from './styles';
import { ImageCard, RestauranteCard, Modal, Map } from '../../components';

import logo from '../../assets/logo.svg';
import imgRestaurante from '../../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = useState();
  const [query, setQuery] = useState();
  const { restaurants } = useSelector((state) => state.restaurants);
  const [modalOpen, setModalOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleChange(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }
  console.log('1', restaurants);
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Site" />
          <TextField
            label="Pesquisar Restaurante"
            floatingLabelClassName="label-pesquisa"
            outlined
            // onTrailingIconSelect={() => this.setState({ value: '' })}
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleChange}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Area</CarouselTitle>
          <Slider {...settings}>
            {restaurants.map((restaurant) => (
              <ImageCard
                key={restaurant.place_id}
                foto={restaurant.photos ? restaurant.photos[0].getUrl() : imgRestaurante}
                titulo={restaurant.name}
              />
            ))}
          </Slider>
        </Search>
        {restaurants.map((restaurant) => (
          <RestauranteCard restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} />
      <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)} />
    </Wrapper>
  );
};

export default Home;
