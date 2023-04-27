import { useCartContext } from '../context/CartContext.jsx';
import toast, { Toaster } from 'react-hot-toast';

// eslint-disable-next-line react/prop-types
export default function ImgMediaCard({ title, price, image, description, id, item }) {
    const { addToCart } = useCartContext();

    const handleAddToCart = (item) => {
        addToCart(item);
    };


    const notify = () => toast.success('Item added to cart!', { icon: '💸' });

    return (
        <>
            <div className="w-full rounded-lg overflow-hidden shadow-2xl bg-white flex flex-col">
                <img className="w-full h-56 object-contain object-center" src={image} alt={title} />
                <div className="p-4">
                    <h5 className="text-lg font-bold mb-2">{title}</h5>
                    <hr style={{position: 'relative', bottom:6}}/>
                    <p className="text-sm text-gray-600 mb-2">{description}</p>
                    <p className="text-sm font-bold">${price}</p>
                </div>
                <div className="p-4 bg-gray-50 flex justify-between items-center mt-auto">
                    <a href={`/products/${id}`} className="text-sm">
                        <button className='text-sm font-bold bg-gray-700 hover:bg-gray-900 text-white px-4 py-3 rounded-lg'>
                            Details
                        </button>
                    </a>
                    <button
                        className="text-sm font-bold bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg"
                        onClick={() => {
                            handleAddToCart(item);
                            notify();
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
            <Toaster
                position='top-left' toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#fff',
                        color: '#000',
                        fontSize: '1.1rem',
                    },
                }}
            />
        </>
    );
}
