import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon/dist/index';
import Slider from 'react-slick';

import { Wrapper, Container, CarouselTitle, Search, Logo, Mapa } from './styles';
import { ImageCard } from '../../components';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = useState();
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Site" />
          <TextField
            label="Pesquisar Restaurante"
            outlined
            // onTrailingIconSelect={() => this.setState({ value: '' })}
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua Area</CarouselTitle>
          <Slider {...settings}>
            <ImageCard foto={restaurante} titulo="" />
            <ImageCard foto={restaurante} />
          </Slider>
        </Search>
      </Container>
      <Mapa />
    </Wrapper>
  );
};

export default Home;
