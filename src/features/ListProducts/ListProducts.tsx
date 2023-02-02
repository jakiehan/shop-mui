import React from 'react';
import { Card } from 'components/Card';
import { Preloader } from 'components/Preloader';
import { RequestMessage } from 'components/RequestMessage';
import { useListProducts } from './useListProducts';
import { ListItemStyled, Grid } from './ListProducts.styled';

export const ListProducts = () => {

  const [products, { loading, loaded, error }] = useListProducts();
  const hasProducts = products.length !== 0;

  return (
    <>
      {error && <RequestMessage msg={error} />}
      {loading && <Preloader />}
      {loaded && !error &&
        (hasProducts ? (
          <Grid
            container
            gap={2}
            wrap="wrap"
            justifyContent="center"
            component="ul"
            padding="0"
            item
          >
            {hasProducts &&
              products.map(product => (
                <ListItemStyled key={product.id} disablePadding>
                  <Card cardInfo={product} />
                </ListItemStyled>
              ))}
          </Grid>
        ) : (
          <RequestMessage msg="nothing found" />
        ))}
    </>
  );
};
