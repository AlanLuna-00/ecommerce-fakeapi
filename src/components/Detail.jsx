import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useFetchDetail } from '../hooks/useFetchDetail';
import { useCartContext } from '../context/CartContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Detail = () => {
    const { id } = useParams();
    const { cardDetail, loading, error } = useFetchDetail(id);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCartContext();
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => setIsLoading(false), 1000)

    const handleAddToCart = () => {
        const itemToAdd = { ...cardDetail, quantity };
        addToCart(itemToAdd, quantity);
        notify(quantity);
    }


    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    }

    const notify = (quantity) => {
        toast.success(`Added ${quantity > 1 ? `${quantity} items` : 'item'} to cart!`, { icon: '💸' }, { duration: 2000 }, { position: 'top-left' });
    }
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-3xl font-bold mb-5">Detail</h1>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>{error}</h1>
            ) : (
                isLoading ? (
                    <div className="cards-spinner"> </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-5">
                        <img src={cardDetail.image} alt={cardDetail.title} className="w-full lg:w-1/2 object-contain" style={{ height: "70vh" }} />
                        <div className="flex-1">
                            <h2 className="text-xl font-bold mb-3">{cardDetail.title}</h2>
                            <p className="text-gray-700 mb-5">{cardDetail.description}</p>
                            <p className="text-lg font-semibold">${cardDetail.price}</p>
                            <div className="flex items-center mb-3 ">
                                <label htmlFor="quantity" className="mr-3 ">Quantity:</label>
                                <select id="quantity" className='bg-blue-500 rounded-lg' name="quantity" value={quantity} onChange={handleQuantityChange}>
                                    {[...Array(10).keys()].map((value) => (
                                        <option key={value} value={value + 1}>{value + 1}</option>
                                    ))}
                                </select>
                            </div>
                            <button
                                className="text-sm font-bold bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg mr-3"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                            <Link to="/products">
                                <button className="text-sm font-bold bg-red-700 hover:bg-red-900 text-white px-4 py-3 rounded-lg ml-3">
                                    Go Back <i className="fas fa-arrow-left" style={{ color: 'white', fontSize: '16px' }}></i>
                                </button>
                            </Link>
                            <Link to="/cart">
                                <button className="text-sm font-bold bg-red-700 hover:bg-red-900 text-white px-4 py-3 rounded-lg ml-3">
                                    Go To <i className="fas fa-shopping-cart" style={{ color: 'white', fontSize: '16px' }}></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                )
            )}
        </div>

    );
};

export default Detail;
