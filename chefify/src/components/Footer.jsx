import React from "react";
import {Row, Col, Container, Form, FormControl, Button} from "react-bootstrap"

const Footer = () => {
  return (
    <Row className="bg-dark text-white">
      <Container className="container-fluid">
        <Row className="mt-2 p-3">

          <Col md={6}>
            <b><h5>About Us</h5></b>
            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <Row className="mb-5">
              <Col>
                <Form>
                  <FormControl type="text" placeholder="Enter your email"></FormControl>
                </Form>
              </Col>
              <Col>
                <Button className="btn-subscribe" variant="outline-danger">Send</Button>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <img src="/imgs/chefify2.jpg" style={{height: "50px"}}/>
                <span style={{ fontWeight: 'bold', color: 'White'}}>Chefify</span>
              </Col>
              <Col md={4} className="mt-2" style={{fontSize: "14px"}}>
                <p>2023 Chefify Company</p>
              </Col>
              <Col md={5} className="mt-2">
                <p>Terms of Servicel Privacy Policy</p>
              </Col>
            </Row>
          </Col>

          <Col> </Col>

          <Col md={3} style={{cursor: "pointer"}}>
            <Row style={{}}>
              <h5>Learn More</h5>
              <p>Our Cooks</p>
              <p>See Our Features</p>
              <p>FAQ</p>
            </Row>
            <Row className="mt-5">
              <h5>Shop</h5>
              <p>Gift Subscription</p>
              <p>Send Us Feedback</p>
            </Row>
          </Col>

          <Col md={2} style={{cursor: "pointer"}}>
            <Row>
              <h5>Recipes</h5>
              <p>What to Cook This Week</p>
              <p>Pasta</p>
              <p>Dinner</p>
              <p>Heathy</p>
              <p>Vegetarion</p>
              <p>Vegan</p>
              <p>Christmas</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Footer;