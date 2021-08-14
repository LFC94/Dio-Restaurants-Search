import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.foto});
  background-size: cover;
  padding: 5px;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  color: #ffffff;
`;

const ImageCard = ({ foto, titulo = 'Restaurante' }) => (
  <Card foto={foto}>
    <Title>{titulo}</Title>
  </Card>
);

export default ImageCard;
