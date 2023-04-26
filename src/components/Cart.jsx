import { useCartContext } from '../context/CartContext';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


const Cart = () => {
    const { cartItems, removeFromCart, clearCart, cartTotal } = useCartContext();
    const [isCartEmpty, setIsCartEmpty] = useState(cartItems.length === 0);

    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
        setIsCartEmpty(cartItems.length === 0);
    };

    const handleClearCart = () => {
        clearCart();
        setIsCartEmpty(true);
    };

    const deleteNotification = () => toast.error('Item deleted from cart!', {icon: '🗑️'}, {duration: 2000}, {position: 'top-left'});
    const clearNotification = () => toast.error('Cart cleared!', {icon: '🗑️'}, {duration: 2000}, {position: 'top-left'});

    return (
        <div className="bg-white px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Cart</h1>
            {isCartEmpty ? (
                <p className="text-lg text-center">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="mb-4">
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between items-center border-b-2 pb-2 mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-sm">Price: ${item.price}</p>
                                    <p className="text-sm">Quantity: {item.quantity}</p>
                                </div>
                                <button className="bg-red-500 text-white py-1 px-4 rounded" onClick={() => {
                                    handleRemoveFromCart(index);
                                    deleteNotification();
                                }}>
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Total:</h3>
                        <h3 className="text-lg font-bold">${cartTotal.toFixed(2)}</h3>
                    </div>
                    <button className="bg-red-500 text-white py-2 px-4 rounded mt-4" onClick={() => {
                        handleClearCart();
                        clearNotification();
                    }}>
                        Clear Cart
                    </button>
                </>
            )}
            <Toaster 
                position='top-left'
            />
        </div>
    );
};

export default Cart;
