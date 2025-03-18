import React, {useState} from 'react'
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState(null)

    const handleClose = () => setShowModal(false);
    const handleLogin = (email) => {
      setUser({email})
      setShowModal(false)
    }

    return (
      <Navbar bg="light" expand="lg">
          <Container className='container-fluid'>
              <Navbar.Brand as={Link} to="/">
                <img src="/imgs/chefify.jpg" height="60px" style={{borderRadius: "50%"}}/>
                <span style={{ fontWeight: 'bold', color: '#ff4081' }}>Chefify</span>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Form className="mx-auto">
                    <FormControl type="text" placeholder="What would you like to cook?" style={{ width: '300px' }} />
                  </Form>
                </Nav>

                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/whattocook">What to cook</Nav.Link>
                  <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
                  <Nav.Link as={Link} to="/ingredients">Ingredients</Nav.Link>
                  <Nav.Link as={Link} to="/occasions">Occasions</Nav.Link>
                  <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>
                </Nav>

                <Nav>
                  {user ? (
                    <>
                      <Nav.Link as={Link} to="/your-recipes-box" className="m-1">Your recipes Box</Nav.Link>
                      <Nav.Link as={Link} to={`/user-profile?email=${encodeURIComponent(user.email)}`} className="m-1">
                        <img src="/imgs/user-avatar.jpg" height="40px" style={{ borderRadius: "50%" }} alt="User Avatar" />
                      </Nav.Link>
                    </>
                  ):(
                    <>
                      <Button className='m-1 btn-login' onClick={() => setShowModal(true)}>Login</Button>
                      <Button variant='outline-danger btn-subscribe'>Subscribe</Button>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
          </Container>

          <LoginModal show={showModal} handleClose={handleClose} onLogin={handleLogin}></LoginModal>
      </Navbar>
    )
};

export default Header;