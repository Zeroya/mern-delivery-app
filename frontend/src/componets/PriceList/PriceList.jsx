import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard, deleteFromCard } from '../../redux/actions/productsActions';

import styled from 'styled-components';
import s from './PriceList.module.scss';

const CardDisposition = styled.div`
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content:center;
  align-items:center;
`;

const PriceList = () => {

  const dispatch = useDispatch();
  const handleCard = useSelector((state) => state.handleCard);

  const addCard = (product) => {
    dispatch(addToCard(product));
  }

  const removeCard = (product) => {
    dispatch(deleteFromCard(product))
  }

  const initialValue = 0;

  return (
    <div>
      <div className={s.groupCard}>
        <CardDisposition >
          {handleCard.map(item => {
            const { id, name, shop, price, photo, qty } = item;
            return (
              <Card style={{ width: '35em' }} key={id} className={`${s.cardFormation} ${s.centringCard}`}>
                <Card.Img variant="top" src={photo} className={s.imgCard} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text style={{ color: 'green' }}>
                    {shop}
                  </Card.Text>
                  <Card.Text>
                    {qty} x {price}$ = {(qty * price).toFixed(2)}$
                  </Card.Text>
                  <Button variant="danger" onClick={() => removeCard(item)} style={{ marginRight: '0.5em' }}>-</Button>
                  <Button variant="primary" onClick={() => addCard(item)}>+</Button>
                </Card.Body>
              </Card>
            )
          }

          )}

        </CardDisposition>

      </div>
      <div className={s.pricePozition}>
        <h3 >Total price: {handleCard.reduce(
          (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.qty),
          initialValue).toFixed(2)}$
        </h3>
        <div className={s.buttonSubmit}>
        <Button as="input" type="submit" value="Submit" size="lg" />
        </div>
      </div>
    </div>
  );
};

export default PriceList;