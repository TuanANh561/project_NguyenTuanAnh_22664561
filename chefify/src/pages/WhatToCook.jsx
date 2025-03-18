import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import FilterBox from '../components/FilterBox'
import ItemCard from '../components/ItemCard'

const WhatToCook = () => {
  const recipes = [
    { title: 'Cucumber salad, cherry tomatoes', time: 32, image: '/imgs/cucumber-salad.jpg' },
    { title: 'Italian-style tomato salad', time: 32, image: '/imgs/italian-tomato-salad.jpg' },
    { title: 'Potato Salad', time: 32, image: '/imgs/potato-salad.jpg' },
    { title: 'Salad with cabbage and shrimp', time: 32, image: '/imgs/cabbage-shrimp-salad.jpg' },
    { title: 'Five-color salad', time: 32, image: '/imgs/five-color-salad.jpg' },
    { title: 'Corn Salad', time: 32, image: '/imgs/corn-salad.jpg' },
    { title: 'Salad with cabbage and shrimp', time: 32, image: '/imgs/cabbage-shrimp-salad.jpg' },
    { title: 'Lotus delight salad', time: 32, image: '/imgs/lotus-salad.jpg' },
    { title: 'Avocado Salad', time: 32, image: '/imgs/avocado-salad.jpg' },
  ]

  return (
    <Container fluid className='p-5'>
      <Row>

        <Col xs={12} md={4}>
          <FilterBox  />
        </Col>

        <Col xs={12} md={8}>
          <h2>Salad ({recipes.length})</h2>
          <Row>
            {recipes.map((recipe, index) => (
              <Col key={index} xs={12} sm={4} md={4}>
                <ItemCard title={recipe.title} time={recipe.time} image={recipe.image} />
              </Col>
            ))}
          </Row>
        </Col>

      </Row>
    </Container>
  )
};

export default WhatToCook;