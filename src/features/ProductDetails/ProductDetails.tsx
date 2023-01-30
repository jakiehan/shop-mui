import React from 'react';
import { Like } from 'components/Like';
import { AddBtn } from 'components/Button/Add';
import { Description } from 'components/Description';
import { RequestMessage } from 'components/RequestMessage';
import { Preloader } from 'components/Preloader';
import { BASE_URL } from 'utils/constants';
import { useProductDetails } from './useProductDetails';
import { PriceCounter } from '../PriceCounter';
import { ProductDetailsStyled, ProductAboutStyled, ProductInfoStyled, BtnWrapperStyled, ActionWrapperStyled, ImageStyled } from './ProductDetails.styled';

interface ProductDetailsProps {
  id?: string
}

export const ProductDetails = ({ id }: ProductDetailsProps) => {

  const { currentProduct, loading, error } = useProductDetails(id);

  return (
    <>
      {error && <RequestMessage msg={error} />}
      {loading && <Preloader />}
      {currentProduct && (
        <ProductDetailsStyled component="section">
          <ImageStyled
            component="img"
            src={`${BASE_URL}${currentProduct.picture.path}`}
            alt={currentProduct.name}
          />
          <ProductInfoStyled>
            <ProductAboutStyled>
              <Description
                textTitle={currentProduct.name}
                textDescription={currentProduct.info}
              />
              <Description
                textTitle={currentProduct.description}
                textDescription={currentProduct.details}
                type="h3"
              />
            </ProductAboutStyled>
            <ActionWrapperStyled>
              <PriceCounter price={currentProduct.price} />
              <BtnWrapperStyled>
                <Like
                  isActive={currentProduct.like}
                />
                <AddBtn />
              </BtnWrapperStyled>
            </ActionWrapperStyled>
          </ProductInfoStyled>
        </ProductDetailsStyled>
      )}
    </>
  );
}
