import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import s from './Header.module.scss';

const Header = () => {
  const cardNumber = useSelector((state) => state.handleCard);

  return (
    <Navbar bg="light" expand="lg" className={s.navbarCentring}>
      <Container fluid>
        <Navbar.Brand href="#" className={s.headerNav}>Delivery App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link> <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>Shop</Link></Nav.Link>
            <Nav.Link > <Link to={`/ShoppingCart`} style={{ textDecoration: "none", color: "black" }}>Shopping Cart</Link></Nav.Link>
          </Nav>

          <Form className={`${s.headerForm} d-flex`}>
            <Button variant="outline-success"><Link to={`/ShoppingCart`} style={{ textDecoration: "none", color: "black" }}>Card ({cardNumber.length})</Link></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;