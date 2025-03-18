import React, {useState} from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa'

const LoginModal = ({ show, handleClose, onLogin }) => {
    const [email, setEmail] = useState("")
    
    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Row>
                <Col md={6}>
                    <img src="/imgs/imgModalLogin.jpg" alt="" style={{height: "100%"}}/>
                </Col>
                <Col md={6}>
                    <Modal.Header closeButton>
                        <Modal.Title><b>Login</b></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter your email to login</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>
                        </Form>
                        <Button variant="outline-danger" className="w-100" onClick={() => {if(email){onLogin(email)}}}>Continue</Button>
                        <p className="text-center m-3">OR</p>

                        <p style={{color: "grey"}}>By continuing you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.</p>
                        <Button variant="outline-primary" className="text-center w-100 mb-1">
                            <FaFacebook />Continue with FaceBook
                        </Button>
                        <Button variant="outline-primary" className="text-center w-100 mb-1">
                            <FaGoogle />Continue with Google
                        </Button>
                        <Button variant="outline-primary" className="text-center w-100 mb-1">
                            <FaApple />Continue with Apple
                        </Button>
                    </Modal.Body>
                </Col>
            </Row>
        </Modal>
    );
};

export default LoginModal;