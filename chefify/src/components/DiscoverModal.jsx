import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';

const DiscoverModal = ({ show, handleClose }) => {
    const [index, setIndex] = useState(0);
    const totalSlides = 3;

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const handleNext = () => {
        if (index < totalSlides - 1) {
            setIndex(index + 1);
        } else {
            handleClose();
        }
    };

    const handleSkip = () => {
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title style={{ color: '#ff4081' }}>Discover CHEFFY</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Easy and delicious cooking instructions right here. Start exploring now!</p>
                <Carousel activeIndex={index} onSelect={handleSelect} indicators={true} controls={false}>
                    <Carousel.Item>
                        <img className="d-block w-100 fixed-image" src="/imgs/DeliciousDishes.jpg" alt="Delicious Dishes" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 fixed-image" src="/imgs/SaladCaprese.jpg" alt="Salad Caprese" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 fixed-image" src="/imgs/GourmetPlates.jpg" alt="Gourmet Plates" />
                    </Carousel.Item>
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" onClick={handleSkip} style={{ marginRight: '10px' }}>Skip</Button>
                <Button variant="primary" onClick={handleNext} style={{ backgroundColor: '#ff4081', borderColor: '#ff4081' }}>Next</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DiscoverModal;