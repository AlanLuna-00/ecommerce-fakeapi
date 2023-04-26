/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex === -1) {
      // El producto no está en el carrito, así que lo agregamos con la cantidad dada
      setCartItems([...cartItems, { ...product, quantity }]);
    } else {
      // El producto ya está en el carrito, así que aumentamos la cantidad
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += quantity;
      setCartItems(newCartItems);
    }
  };




const updateCart = (product, newQuantity) => {
  const itemIndex = cartItems.findIndex((item) => item.id === product.id);
  if (itemIndex !== -1) {
    const updatedCartItems = [...cartItems];
    updatedCartItems[itemIndex].quantity = newQuantity;
    setCartItems(updatedCartItems);
  }
};

const showCart = () => {
  return cartItems;
};

const removeFromCart = (index) => {
  const newCartItems = [...cartItems];
  newCartItems.splice(index, 1);
  setCartItems(newCartItems);
};

const clearCart = () => {
  setCartItems([]);
};

const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

useEffect(() => {
  const newTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  newTotal.toFixed(2);
  setCartTotal(newTotal);
}, [cartItems]);

return (
  <CartContext.Provider
    value={{
      cartItems,
      addToCart,
      updateCart,
      removeFromCart,
      clearCart,
      cartCount,
      cartTotal,
      showCart,
    }}
  >
    {children}
  </CartContext.Provider>
);
};

export default CartProvider;
