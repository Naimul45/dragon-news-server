import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../assets/brand/brand-1.png';
import brand2 from '../../assets/brand/brand-2.png';

const CorouselOne = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={brand1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={brand2}
        alt="Second slide"
      />

    </Carousel.Item>
  
  </Carousel>
  );
};

export default CorouselOne;