import React from 'react';
import Forma from '../../componets/Form/Form';
import PriceList from '../../componets/PriceList/PriceList';
import styled from 'styled-components';

const CardPage = styled.div`
  display: flex;
  justify-content:center;
`;

const ShoppingCart = () => {
  return (
    <CardPage>
      <Forma />
      <PriceList />
    </CardPage>
  );
};

export default ShoppingCart;