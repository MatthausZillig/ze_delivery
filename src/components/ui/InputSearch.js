import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 31px -19px rgba(0, 0, 0, 0.62);
  margin: 10px;

  input {
    width: 100%;
    height: 48px;
    font-weight: lighter;
    color: rgb(51, 51, 51);
    background-color: rgb(255, 255, 255);
    line-height: 23px;
    padding-right: 16px;
    z-index: 1;
    padding-left: 56px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    margin: auto;
    outline: none;
  }
`;

export const InputSearch = ({ placeholder, value, callback }) => {
  return (
    <InputContainer>
      <input
        id="inputSearch"
        type="text"
        name="input-search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => callback(e)}
      ></input>
    </InputContainer>
  );
};
