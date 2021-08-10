import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.foto});
  background-size: cover;
`;

const ImageCard = ({ foto }) => <Card foto={foto} />;

export default ImageCard;
