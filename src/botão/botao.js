import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import * as queries from '../graphql/queries/queries';

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export const Botao = () => {
  const { loading, error, data } = useQuery(queries.POC, {
    variables: {
      algorithm: 'NEAREST',
      lat: '-23.632919',
      long: '-46.699453',
      now: '2017-08-01T20:00:00.000Z',
    },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <div>
      <Button>Olá</Button>
    </div>
  );
};
