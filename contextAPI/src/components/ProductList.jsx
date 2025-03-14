import { useCart } from "./CartContext"
import { Container, Col, Card, Row, Button } from 'react-bootstrap';

const products = [
    { id: 1, name: "Iphone 5", price: 999 , img: "./imgs/iphone5.jpg"},
    { id: 2, name: "Samsung Galaxy S24", price: 899, img: "./imgs/S24.jpg"},
    { id: 3, name: "Google Pixel 8", price: 900, img: "./imgs/gg8.jpg" }
]

const ProductList = () => {
    const { addToCart } = useCart();

    return (
        <Container>
            <hr />
            <h2 className="text-center my-4">Danh sách sản phẩm</h2>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} md={4} sm={6} className="mt-2 mb-3">
                        <Card style={{height: "450px"}} className="product-card shadow-sm">
                            <Card.Img style={{height: "200px"}} variant="top" src={product.img} alt={product.name} />
                            <Card.Body>
                                <Card.Title style={{height: "60px"}}>{product.name}</Card.Title>
                                <Card.Text>
                                    Giá: <b className="text-danger">${product.price}</b>
                                </Card.Text>
                                <div className="d-flex justify-content-center ">
                                    <Button variant="primary" onClick={() => addToCart(product)}>Thêm vào giỏ</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductList