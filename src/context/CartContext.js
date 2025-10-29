import React, { createContext, useState } from 'react';

export const CartContext = createContext({
    items: [],
    addItem: () => { },
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
});

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (product) => {
        setItems((prev) => [...prev, { ...product, cartId: Date.now() }]);
    };

    const addToCart = (product) => {
        setItems((prev) => [...prev, { ...product, cartId: Date.now() }]);
    };

    const removeFromCart = (cartId) => {
        setItems((prev) => prev.filter((i) => i.cartId !== cartId));
    };

    const clearCart = () => setItems([]);

    return (
        <CartContext.Provider value={{ items, addItem, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
