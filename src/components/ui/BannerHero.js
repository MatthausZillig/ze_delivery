﻿import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/images/homeBackground.jpg';

const BannerContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url(${Img});
  background-size: cover;
`;

export const BannerHero = ({ children }) => {
  return <BannerContainer>{children}</BannerContainer>;
};
