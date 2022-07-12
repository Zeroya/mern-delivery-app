import React from 'react';
import Cards from '../../componets/Cards/Cards';
import Shops from '../../componets/Shops/Shops';
import styled from 'styled-components';

const CardPage = styled.div`
  display: flex;
  justify-content:center;
`;

const Shop = () => {
  return (
    <CardPage>
      <Shops />
      <Cards />
    </CardPage>
  );
};

export default Shop;