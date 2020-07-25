import styled from 'styled-components';

const configs = {
  width: '100%',
  height: '100%',
};

export const Img = styled.img`
  width: ${({ sizeW }) => sizeW || configs.width};
  height: ${({ sizeH }) => sizeH || configs.height};
`;
