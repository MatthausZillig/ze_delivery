import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/images/homeBackground.jpg';

const BannerContainer = styled.section`
  height: calc(100vh - 57px);
  background-image: url(${Img});
  background-size: cover;
`;

export const BannerHero = ({ children }) => {
  return <BannerContainer>{children}</BannerContainer>;
};
