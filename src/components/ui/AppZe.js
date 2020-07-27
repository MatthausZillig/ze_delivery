import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/images/homeBackground.jpg';

const BannerContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  background-image: url('https://courier-images-web.imgix.net/static/img/maluma_baixo_desktop.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png');
  background-size: cover;
`;

export const BannerAppZe = ({ children }) => {
  return <BannerContainer>{children}</BannerContainer>;
};
