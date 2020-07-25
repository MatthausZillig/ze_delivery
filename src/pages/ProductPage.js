import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProductPage = ({ history }) => {
  const handleClick = () => {
    history.push('/');
  };
  return <button onClick={handleClick}>voltar</button>;
};

export default withRouter(ProductPage);
