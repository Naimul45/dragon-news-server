import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Main = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <Row>
          <Col lg="2" className='d-none d-lg-block'>
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default Main;