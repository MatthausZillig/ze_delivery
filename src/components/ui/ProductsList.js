import React from 'react';
import { useQuery } from '@apollo/client';
import * as queries from '../../graphql/queries/queries';
import Helpers from '../helpers';
import { path } from 'ramda';
import { Container } from '../generic/grid/grid';
import { Card } from './CardProduct';

const ProductsList = ({ id }) => {
  console.log(id);
  const { loading, error, data } = useQuery(queries.PRODS, {
    variables: {
      id: id,
      search: '',
      categoryId: null,
    },
  });

  if (loading && error && !data) {
    return null;
  }

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  let products = path(['poc', 'products'], data);
  console.log(products);

  Helpers.formatMoney(2.09, 2, ',', '.', 'R$');

  return (
    <Container margin="64px 0px">
      {data &&
        products &&
        products.map((product, index) => {
          let price = path(['productVariants', '0', 'price'], product);
          return (
            <Card
              key={index}
              image={product.images[0].url}
              title={product.title}
              price={price}
              index={index}
            />
          );
        })}
    </Container>
  );
};

export default ProductsList;
