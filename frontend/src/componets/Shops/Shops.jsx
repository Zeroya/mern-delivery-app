import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from 'react-bootstrap';
import s from './Shops.module.scss';
import styled from 'styled-components';
import { selectedProduct, removeSelectedProduct } from '../../redux/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';

const ButtonMargined = styled(Button)`
  margin: 0.2em 0 0.2em 0;
`;


const Shops = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const restaurantSort = useSelector((state) => state.product);
  const handleCard = useSelector((state) => state.handleCard);

  const handleSort = (e) => {
    dispatch(removeSelectedProduct());
    dispatch(selectedProduct({ products, sort: e }));
    console.log(handleCard);
  }

  return (

    <div className={s.groupForm}>
      <ButtonGroup vertical className={s.groupPozition}>

        <Link to={`/`}>
          <ButtonMargined onClick={e => handleSort(e.target.value)} value='all' size="lg" variant="outline-success" type="submit"
          disabled={handleCard.length ? true : false}>
            All
          </ButtonMargined>
        </Link>

        <Link to={`/`}>
          <ButtonMargined onClick={e => handleSort(e.target.value)} value='Mcdonalds' size="lg" variant="outline-success" type="submit"
            disabled={handleCard.every(item => item.shop === 'Mcdonalds') ? false : true} >
            Mcdonalds
          </ButtonMargined>
        </Link>

        <Link to={`/`}>
          <ButtonMargined onClick={e => handleSort(e.target.value)} value='KFC' size="lg" variant="outline-success" type="submit"
            disabled={handleCard.every(item => item.shop === 'KFC') ? false : true}>
            KFC
          </ButtonMargined>
        </Link>

        <Link to={`/`}>
          <ButtonMargined onClick={e => handleSort(e.target.value)} value='Burger King' size="lg" variant="outline-success" type="submit"
            disabled={handleCard.every(item => item.shop === 'Burger King') ? false : true}>
            Burger King
          </ButtonMargined>
        </Link>

        <Link to={`/`}>
          <ButtonMargined onClick={e => handleSort(e.target.value)} value='Pizza Hut' size="lg" variant="outline-success" type="submit"
            disabled={handleCard.every(item => item.shop === 'Pizza Hut') ? false : true}>
            Pizza Hut
          </ButtonMargined>
        </Link>

      </ButtonGroup>
    </div>

  );
};

export default Shops;