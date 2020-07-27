import styled from 'styled-components';

const configs = {
  bg: '#242526',
  bgAccent: '#484a4d',
  textColor: '#dadce1',
  navSize: '57px',
};

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 3rem;
  position: ${({ fixed }) => fixed && `fixed`};
  width: 100%;
  top: 0;
  background-color: ${({ backgroundColor }) => backgroundColor || configs.bg};
  color: ${({ color }) => color || configs.textColor};
  height: ${({ height }) => height || configs.navSize};
  box-shadow: -1px 3px 10px -5px rgba(0, 0, 0, 0.67);
`;
