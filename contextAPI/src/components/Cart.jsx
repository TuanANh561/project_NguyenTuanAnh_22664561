import { useCart } from "./CartContext"
import { useState } from "react"
import { Modal, Button } from 'react-bootstrap';

const Cart = () => {
    const { cart, removeFromCart, totalItems , updateQuantity, totalPrice, checkout, orders} = useCart();
    const [show, setShow] = useState(false);

    return (
        <div>
            <Button variant="primary" onClick={() => setShow(true)}>
                <span style={{ fontSize: "32px"}}>🛒 ({totalItems})</span>
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart ({totalItems} items)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cart.map((product) => (
                            <div key={product.id} className="d-flex justify-content-between align-items-center p-2 border">
                                <span>{product.name} - ${product.price} </span>
                                <div className="d-flex align-items-center">
                                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</Button>
                                        <span className="mx-2">{product.quantity}</span>
                                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</Button>
                                    <Button className="m-2" variant="danger" onClick={() => removeFromCart(product.id)}>Remove</Button>
                                </div>
                            </div>
                        ))
                    )}

                    <hr />
                    <h3>Total Price: <span style={{color: "red"}} >{totalPrice}</span></h3>
                    <hr />

                    {orders.length > 0 && (
                        <div>
                            <h4>Đơn hàng đã đặt</h4>
                            {orders.map((order) => (
                                <div key={order.id} className="border p-2 my-2">
                                    <h5>Đơn hàng #{order.id}</h5>
                                    {order.items.map((item) => (
                                        <p key={item.id}>{item.name} - {item.quantity} x ${item.price}</p>
                                    ))}
                                    <b>Tổng tiền: ${order.total.toFixed(2)}</b>
                                </div>
                            ))}
                        </div>
                    )}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={checkout} disabled={cart.length === 0}>Đặt hàng</Button>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Cart;
