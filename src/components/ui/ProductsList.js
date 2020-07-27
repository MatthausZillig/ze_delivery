import React from 'react';
import { useQuery } from '@apollo/client';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from '../../lotties/empty-and-lost.json';
import * as queries from '../../graphql/queries/queries';
import { path } from 'ramda';
import { Container } from '../generic/grid/grid';
import { Loading } from '../generic/loading';
import { Card } from './CardProduct';

const ProductsList = ({ id }) => {
  // Lottie props
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
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

  if (loading) return <Loading />;
  if (error) {
    return (
      <Container margin="64px 0px" flexDirection="column">
        <Lottie options={defaultOptions} height={400} width={320} />
        <Link to="/">
          <p>Ocorreu algum erro, tente novamente...</p>
        </Link>
      </Container>
    );
  }
  let products = path(['poc', 'products'], data);

  return (
    <Container margin="64px 0px">
      {loading && <Loading />}

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
      {error && <di>Nenhum produto encontrado!</di>}
    </Container>
  );
};

export default ProductsList;
