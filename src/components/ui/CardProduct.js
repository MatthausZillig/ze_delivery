import React from 'react';
import styled from 'styled-components';
import Helpers from '../helpers';
import { Image } from '../generic/image/Img';
import { Paragraph } from '../generic/text/text';
import { Add } from '../generic/icons/Add';
import { Remove } from '../generic/icons/Remove';

const CardContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  margin-top: 4px;
  margin-left: 16px;
  margin-right: 8px;
  margin-bottom: 24px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
  font-size: 14px;
  height: 215px;
  min-width: 128px;
  width: 180px;
  flex-flow: column;
  border-radius: 4px;
  border: 1px solid rgb(250, 250, 250);
  padding: 10px;

  svg {
    fill: #ccc;
  }

  svg:hover {
    fill: #fc5;
  }

  :hover {
    box-shadow: rgba(0, 0, 1, 0.13) 0px 2px 4px 0px;
    border: 1px solid #fc5;
  }

  .product_image {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .product_title {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: left;
    margin-bottom: 1rem;
  }
  .product_price {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-content: flex-start;
  }

  .product_buttons {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 10px;
  }

  @media (max-width: 768px) {
    width: 155px;
    margin-left: 0px;
  }
`;

export const Card = ({ image, title, price, index }) => {
  return (
    <CardContainer key={index}>
      <div className="product_image">
        <Image src={image} sizeW="96px" sizeH="104px" alt="Image do produto" />
      </div>
      <div className="product_title">
        <Paragraph size="14px" align="left">
          {title}
        </Paragraph>
      </div>
      <div className="product_price">
        <Paragraph size="14px" align="left" weight="500">
          {Helpers.formatMoney(price, 2, ',', '.', 'R$')}
        </Paragraph>
        <div className="product_buttons">
          <div>
            <Add />
          </div>
          {/* <div>
            <Remove />
          </div> */}
        </div>
      </div>
    </CardContainer>
  );
};
