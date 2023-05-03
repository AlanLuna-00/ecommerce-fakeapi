import { useCartContext } from '../context/CartContext';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useSendEmail from '../hooks/useSendEmail';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart, cartTotal, setCartItems } = useCartContext();
    const [isCartEmpty, setIsCartEmpty] = useState(cartItems.length === 0);
    const { user } = useAuth();

    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
        setIsCartEmpty(cartItems.length === 0);
    };

    const handleClearCart = () => {
        clearCart();
        setIsCartEmpty(true);
        toast.error('Cart cleared!', { icon: '🗑️' });
    };


    const deleteNotification = () => toast.error('Item deleted from cart!', { icon: '🗑️' });

    const handleIncreaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity += 1;
        setCartItems(updatedCartItems);
    };

    const handleDecreaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity -= 1;
            setCartItems(updatedCartItems);
        }
    };

    const { sendEmail } = useSendEmail();

    const handlePurchase = () => {
        sendEmail(user, cartItems, cartTotal, clearCart, setIsCartEmpty);
    };
    return (
        <div className="bg-white px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Cart</h1>
            {isCartEmpty ? (
                <p className="text-lg text-center">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="mb-4">
                        {cartItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center border-b-2 pb-2 mb-2"
                            >
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain object-center mr-4" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p className="text-sm">Price: ${item.price}</p>
                                        <div className="flex items-center">
                                            <p className="text-sm">Quantity: {item.quantity}</p>
                                            <div className="ml-4">
                                                <button
                                                    className="bg-green-500 px-2 text-white rounded mr-2"
                                                    onClick={() => handleIncreaseQuantity(index)}
                                                >
                                                    +
                                                </button>
                                                <button
                                                    className="bg-red-500 text-white px-2 rounded "
                                                    onClick={() => handleDecreaseQuantity(index)}
                                                    {...(item.quantity === 1 && { disabled: true })}
                                                    {...(item.quantity === 1 && { className: 'bg-gray-500 text-white px-2 rounded' })}
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="bg-red-500 text-white py-1 px-4 rounded"
                                    onClick={() => {
                                        handleRemoveFromCart(index);
                                        deleteNotification();
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Total:</h3>
                        <h3 className="text-lg font-bold">${cartTotal.toFixed(2)}</h3>
                    </div>
                    {user.email === null ? (
                        <p className="text-lg text-center mt-4">
                            Necesitas estar logueado con google para comprar
                        </p>
                    ) : (
                        <>
                            <button
                                className={`${isCartEmpty ? 'cursor-not-allowed' : 'bg-green-500'
                                    } text-white py-2 px-4 rounded mt-4`}
                                disabled={isCartEmpty}
                                onClick={handlePurchase}
                            >
                                Buy Now
                            </button>
                        </>
                    )}
                </>
            )}
            <button
                className={`${isCartEmpty ? 'cursor-not-allowed' : 'bg-red-500'
                    } text-white py-2 px-4 rounded mt-4 ml-4`}
                disabled={isCartEmpty}
                onClick={handleClearCart}
            >
                Clear Cart
            </button>
            {user.email === null ? (
                null
            ) : (
                <>
                    <p
                        className={`text-sm text-center mt-4 text-gray-500 ${isCartEmpty ? 'opacity-0' : 'opacity-100'
                            } transition-opacity duration-300`}
                    >
                        <span style={{ color: 'red' }}>*</span> Esta es una aplicación de demostración, no se procesará ningún pago.                    </p>
                    <p
                        className={`text-sm text-center mt-4 text-gray-500 ${isCartEmpty ? 'opacity-0' : 'opacity-100'
                            } transition-opacity duration-300`}
                    >
                        <span style={{ color: 'red' }}>*</span> El correo electrónico se enviará a {user.email}, quizás deberias revisar tu carpeta de correo no deseado.
                    </p>
                </>
            )}

        </div>
    );
};

export default Cart;