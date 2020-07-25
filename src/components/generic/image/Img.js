import React from 'react';
import { Img } from './styles';

export const Image = ({ sizeW, sizeH, alt, src }) => {
  return <Img src={src} sizeW={sizeW} sizeH={sizeH} alt={alt} />;
};
