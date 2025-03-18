import React, { useState } from 'react';
import DiscoverModal from '../components/DiscoverModal';
import { Container } from 'react-bootstrap';

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Container className='mt-1 mb-1'>
        <img src="/imgs/main.jpg" style={{height: "600px", width: "100%"}}/>
        <DiscoverModal show={showModal} handleClose={handleClose} />
      </Container>
    </div>
  );
};

export default Home;