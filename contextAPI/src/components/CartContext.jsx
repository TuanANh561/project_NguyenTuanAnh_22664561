import { createContext, useState, useContext } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [orders, setOrders] = useState([])

    const addToCart = (product) => {
        setCart((prevCart) => {
            const exist = prevCart.find((item) => item.id === product.id);

            if (exist) {
                alert("Bạn vừa thêm 1 sản phẩm vào giỏ hàng")
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                alert("Bạn vừa thêm 1 sản phẩm vào giỏ hàng")
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        alert("Bạn vừa xóa sản phẩm vào giỏ hàng")
        setCart((preCard) => preCard.filter((product) => product.id !== id))     
    }

    const updateQuantity = (id, quantity) => {
        setCart((preCart) => 
            preCart.map((item) => 
                item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
            )
        )
    }

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price*item.quantity, 0)

    const checkout = () => {
        if(cart.length === 0){
            alert("Giỏ hàng của bạn đang trống")
            return;
        }
        setOrders([...orders, { id: Date.now(), items: cart, total: totalPrice}])
        setCart([])
        alert("Bạn đã đặt hàng thành công")
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice, checkout, orders}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);

export { CartProvider };