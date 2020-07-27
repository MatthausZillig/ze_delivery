import styled from 'styled-components';
import { device } from './breakpoints';

const formatAreas = (areas) => areas.map((area) => `"${area}"`).join(' ');
const formatMobileAreas = (mobileAreas) =>
  mobileAreas.map((mobileArea) => `"${mobileArea}"`).join(' ');

export const Grid = styled.main`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  grid-gap: ${({ space }) => space};
  padding-left: ${({ paddingLeft }) => paddingLeft || '64px'};
  padding-right: ${({ paddingRight }) => paddingRight || '64px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '24px'};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
  height: ${({ height }) => height || 'auto'};

  @media ${device.tablet} {
    ${({ mobileAreas }) => mobileAreas && `grid-template-areas: ${formatMobileAreas(mobileAreas)}`};
    grid-template-rows: ${({ mobileRows }) => mobileRows};
    padding-left: ${({ paddingLeft }) => paddingLeft || '16px'};
    padding-right: ${({ paddingRight }) => paddingRight || '16px'};
    margin-bottom: ${({ marginBottom }) => marginBottom || '16px'};
    ${({ responsive }) =>
      responsive && `grid-template-columns: repeat( auto-fit, minmax(320px, 1fr) )`}
  }
`;

export const Container = styled.section`
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  padding-left: ${({ paddingLeft }) => paddingLeft || '64px'};
  padding-right: ${({ paddingRight }) => paddingRight || '64px'};
  margin: ${({ margin }) => margin || '0px'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  @media ${device.tablet} {
    padding-left: 4px;
    padding-right: 4px;
    margin: 16px;
  }
`;

export const Item = styled.div`
  display: ${({ grid }) => (grid ? 'grid' : 'flex')};
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ test }) => test && 'background-color: #ccc'};
  ${({ test }) => test && 'width: 100%'};
  ${({ test }) => test && 'border-radius: 7px'};
  ${({ test }) => test && 'height: 100%'};
  width: ${({ sizeW }) => sizeW || '100%'};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  order: ${({ order }) => order};
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
  ${({ area }) => area && `grid-area: ${area}`};
  justify-self: ${(props) => props.justifySelf};
  align-self: ${(props) => props.alignSelf};
  margin: ${({ margin }) => margin || '0px'};
`;
