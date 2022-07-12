import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
import { addToCard } from '../../redux/actions/productsActions';
import { setProducts } from '../../redux/actions/productsActions';
import { useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import s from './Cards.module.scss';

const CardDisposition = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
`;


const Cards = () => {

  const dispatch = useDispatch();
  const restaurantSort = useSelector((state) => state.product.category);
  
  const addCard = (product) => {
    dispatch(addToCard(product));
  }

  const products = useSelector((state) => state.allProducts.products);
  
  const fetchProducts = async () => {
    const response = await axios
      .get(`http://localhost:3001/api`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={s.groupCard}>
      <CardDisposition>
        { !restaurantSort ? products.map(food => {
          const { id, name, shop, price, photo } = food;
          return (
            <Card style={{ width: '18rem' }} key={id} className={`${s.cardFormation} ${s.centringCard}`}>
              <Card.Img variant="top" src={photo} className={s.imgCard} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text style={{ color: 'green' }}>
                  {price}$
                </Card.Text>
                <Card.Text>
                  {shop}
                </Card.Text>
                <Button variant="primary" onClick={() => addCard(food)}>Add to Card</Button>
              </Card.Body>
            </Card>
          )
        }) : 
        restaurantSort.map(food => {
          const { id, name, shop, price, photo } = food;
          return (
            <Card style={{ width: '18rem' }} key={id} className={`${s.cardFormation} ${s.centringCard}`}>
              <Card.Img variant="top" src={photo} className={s.imgCard} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text style={{ color: 'green' }}>
                  {price}$
                </Card.Text>
                <Card.Text>
                  {shop}
                </Card.Text>
                <Button variant="primary" onClick={() => addCard(food)}>Add to Card</Button>
              </Card.Body>
            </Card>
          )
        })}
      </CardDisposition>
    </div>
  );
}

export default Cards;