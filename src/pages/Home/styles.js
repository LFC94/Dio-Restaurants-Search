import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 300px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  padding-bottom: 16px;
`;

export const Mapa = styled.div`
  background-color: #005500;
  width: 100%;
  height: 100vh;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 40px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.secondary};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
  border-top: 1px solid ${(props) => props.theme.colors.background};
`;

export const ModalTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
  text-transform: none;
  letter-spacing: 0.11px;
`;

export const ModalContent = styled.p`
  ${ModalTitle}
  font-size: 16px;
  font-weight: normal;
  line-height: 19px;
`;
