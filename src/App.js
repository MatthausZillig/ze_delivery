import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Client from './graphql/Client';
import Home from './pages/HomePage';
import { Navbar } from './components/generic/navbar/navbar';
import { Footer } from './components/generic/footer/Footer';
import { Image } from './components/generic/image/Img';
import { Button } from './components/generic/button/button';
import ProductPage from './pages/ProductPage';
import { ApolloProvider } from '@apollo/client';

const App = () => {
  return (
    <ApolloProvider client={Client}>
      <div>
        <Navbar>
          <Image
            sizeW="121px"
            sizeH="40px"
            src="https://courier-images-web.imgix.net/static/img/white-logo.png?auto=compress,format&amp;fit=max&amp;w=undefined&amp;h=undefined&amp;dpr=2&amp;fm=png"
            alt="Zé delivery logo"
          />
          <Button>Entrar</Button>
        </Navbar>
        <Footer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/produtos" component={ProductPage} />
        </Switch>
      </div>
    </ApolloProvider>
  );
};

export default App;
