import React from 'react';
import { useQuery } from '@apollo/client';
import * as queries from '../graphql/queries/queries';
import { Link, withRouter } from 'react-router-dom';
import ProductsList from '../components/ui/ProductsList';

const ProductPage = ({ history }) => {
  const lat = localStorage.getItem('lat');
  const lng = localStorage.getItem('lng');
  const date = localStorage.getItem('date');
  console.log(date);
  const { loading, error, data } = useQuery(queries.POC, {
    variables: {
      algorithm: 'NEAREST',
      lat: lat,
      long: lng,
      now: date,
    },
  });

  if (loading && error && !data) {
    return null;
  }

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { pocSearch } = data;
  const handleClick = () => {
    history.push('/');
  };

  if (!data && pocSearch && pocSearch[0]) {
    return null;
  }

  return <ProductsList id={pocSearch[0].id} />;
};

export default withRouter(ProductPage);
