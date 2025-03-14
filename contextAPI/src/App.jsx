import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <CartProvider>
      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart</h1>
        <Cart />
        <ProductList />
      </div>
    </CartProvider>
  )
}

export default App
