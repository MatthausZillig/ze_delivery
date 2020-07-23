import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import * as queries from '../graphql/queries/queries';

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

  return <button>Boão</button>;
};
