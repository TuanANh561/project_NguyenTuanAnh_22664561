import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ItemCard = ({ title, time, image }) => {
  return (
    <Card className="item">
      <Card.Img className="item-img" src={image}/>
      <Card.Body>
        <Card.Title className='item-title'>{title}</Card.Title>
        <Card.Text className='item-time'>{time} minutes</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;