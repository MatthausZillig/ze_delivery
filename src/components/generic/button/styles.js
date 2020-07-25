import styled from 'styled-components';

const configs = {
  width: '75px',
  height: '35px',
  backgroundColor: '#FFC500',
};

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border-radius: 3px;
  width: ${({ sizeW }) => sizeW || configs.width};
  height: ${({ sizeH }) => sizeH || configs.height};
  background: ${({ backgroundColor }) => backgroundColor || configs.backgroundColor};
  border: 1px solid #ffc500;
  cursor: pointer;
  color: #000;
  text-transform: uppercase;
  box-shadow: 0px 4px 11px -5px rgba(0, 0, 0, 0.76);
  transition: all 450ms;
  :hover {
    background: transparent;
    color: #ffc500;
    width: 76px;
  }
`;
