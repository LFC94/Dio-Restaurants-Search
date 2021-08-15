import styled from 'styled-components';
import Slider from 'react-slick';

export const Restaurante = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  align-items: center;
  :hover {
    border-left-color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const RestauranteInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 149px;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  line-height: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 19px;
  object-fit: cover;
`;

export const MultPhoto = styled(Slider)`
  width: 100px;
  height: 100px;
  border-radius: 19px;
`;
