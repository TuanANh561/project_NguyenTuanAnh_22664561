import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../App.css'; // Import App.css

const FilterBox = () => {
  return (
    <Card className="filter-box">
      <Card.Body>
        <h4 className="filter-title">Filters</h4>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label className="filter-label">Type</Form.Label>
            <Form.Check label="Pan-fried" id="pan-fried" className="filter-check" />
            <Form.Check label="Grilled" id="grilled" defaultChecked className="filter-check" />
            <Form.Check label="Baked" id="baked" className="filter-check" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="filter-label">Time</Form.Label>
            <Form.Range min="0" max="120" className="filter-range" />
            <Form.Text className="filter-text">30 - 50 min</Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="filter-label">Rating</Form.Label>
            <Form.Range min="0" max="5" className="filter-range" />
            <Form.Text className="filter-text">3 - 5 stars</Form.Text>
          </Form.Group>
          <Button className="filter-button">Apply</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FilterBox;