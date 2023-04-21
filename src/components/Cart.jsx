import { useCartContext } from "../context/CartContext";

export default function Cart() {
    const { cartItems, removeFromCart, clearCart, cartCount, cartTotal } = useCartContext();

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cartItems  .map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </div>
                ))}
            </div>
            <div>
                <h3>Cart Count: {cartCount}</h3>
                <h3>Cart Total: {cartTotal}</h3>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    );
}
