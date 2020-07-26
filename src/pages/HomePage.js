import React from 'react';
import { AutocompleteSearchPoc } from '../components/blocs/AutocompleteSearchPoc';
import { BannerHero } from '../components/ui/BannerHero';

const Home = () => {
  return (
    <BannerHero>
      <AutocompleteSearchPoc />
    </BannerHero>
  );
};

export default Home;
