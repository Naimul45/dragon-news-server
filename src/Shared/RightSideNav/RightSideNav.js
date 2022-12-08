import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaFacebook, FaTwitter, FaTwitch,FaWhatsapp, FaGithub } from "react-icons/fa";
import  CarouselOne  from '../CarouselOne/CorouselOne';
import ListGroup from 'react-bootstrap/ListGroup';


const RightSideNav = () => {
  return (
    <div>
      <h3>This is right side</h3>
      <ButtonGroup vertical>
        <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login via Google</Button>
        <Button variant="outline-dark"><FaGithub></FaGithub> Login via Github</Button>
      </ButtonGroup>

      <div className='mt-4'>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

      </div>
      <div>
          <CarouselOne></CarouselOne>
      </div>

    </div>
  );
};

export default RightSideNav;