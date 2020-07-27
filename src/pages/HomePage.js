import React from 'react';
import { isMobile } from 'react-device-detect';
import { Link, withRouter } from 'react-router-dom';
import { AutocompleteSearchPoc } from '../components/blocs/AutocompleteSearchPoc';
import { Paragraph } from '../components/generic/text/text';
import { Image } from '../components/generic/image/Img';
import { BannerAppZe } from '../components/ui/AppZe';
import { BannerHero } from '../components/ui/BannerHero';
import { Grid, Item } from '../components/generic/grid/grid';

const Home = ({ history }) => {
  const goToProductPage = () => {
    history.push('/produtos');
  };
  return (
    <Grid
      paddingLeft="0px"
      paddingRight="0px"
      columns={'1fr'}
      space="16px"
      rows={'454px 450px'}
      areas={['BannerHero', 'BannerAppZe']}
      mobileAreas={['BannerHero', 'InfosAppZe', 'BannerAppZe']}
      mobileRows={'454px 260px 450px'}
    >
      <Item area="BannerHero">
        <BannerHero>
          <AutocompleteSearchPoc goToProductPage={goToProductPage} />
        </BannerHero>
      </Item>
      {isMobile && (
        <Item area="InfosAppZe" flexDirection="column" grid>
          <Item flexDirection="column" sizeW="320px" alignSelf="center" margin="0 auto">
            <Paragraph size="33px" weight="500" align="left" margin="8px 0px">
              Já baixou o app?
            </Paragraph>
            <Paragraph align="left" margin="8px 0px">
              Entregamos onde estiver, através de nosso parceiro mais próximo de você.
            </Paragraph>
          </Item>
          <Item sizeW flexDirection="column" margin="0 auto" alignSelf="center">
            <Image
              sizeW="190px"
              sizeH="56px"
              src="https://courier-images-web.imgix.net/static/img/play_store_badge.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png"
              margin="10px 0px 10px 0px"
            />
            <Image
              sizeW="190px"
              sizeH="56px"
              src="https://courier-images-web.imgix.net/static/img/apple_store_badge.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png"
            />
          </Item>
        </Item>
      )}
      <Item area="BannerAppZe">
        <BannerAppZe>
          {!isMobile && (
            <Item flexDirection="column" sizeW="470px">
              <Paragraph size="33px" weight="500" align="left" margin="8px 0px">
                Já baixou o app?
              </Paragraph>
              <Paragraph align="left" margin="8px 0px">
                Entregamos onde estiver, através de nosso parceiro mais próximo de você.
              </Paragraph>
              <Item sizeW margin="8px 0px">
                <Image
                  sizeW="190px"
                  sizeH="56px"
                  src="https://courier-images-web.imgix.net/static/img/play_store_badge.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png"
                  margin="0px 23px 0px 0px"
                />
                <Image
                  sizeW="190px"
                  sizeH="56px"
                  src="https://courier-images-web.imgix.net/static/img/apple_store_badge.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png"
                />
              </Item>
            </Item>
          )}
        </BannerAppZe>
      </Item>
    </Grid>
  );
};

export default withRouter(Home);
