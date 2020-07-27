import React from 'react';
import styled from 'styled-components';

const SuggestionsContainer = styled.ul`
  width: 600px;
  height: 100%100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 0px 31px -19px rgba(0, 0, 0, 0.62);
  background-color: #fff;
  border-radius: 3px;
  margin: 10px;
  position: relative;
  padding: 10px;

  li {
    height: 40px;
    padding: 5px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const Suggestions = ({ children }) => {
  return <SuggestionsContainer>{children}</SuggestionsContainer>;
};
