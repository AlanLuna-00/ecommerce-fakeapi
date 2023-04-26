import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {Link} from 'react-router-dom'


const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { user, signOutWithGoogle } = useAuth();

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-white font-bold">
                            The shop of {user.displayName || 'Anonymus'}
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center">
                            <Link to="/home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </Link>
                            <Link to="/productos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Products
                            </Link>
                            <Link to="/carrito" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <i className="fas fa-shopping-cart" style={{ color: 'white', fontSize: '24px' }}></i>
                            </Link>
                            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={signOutWithGoogle}>
                                <i className="fas fa-sign-out-alt" style={{ color: 'white', fontSize: '24px' }}></i>
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {showMenu ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {showMenu && (
                    <div className="md:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Inicio
                            </Link>
                            <Link to="/productos" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Products
                            </Link>
                            <Link to="/carrito" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                <i className="fas fa-shopping-cart" style={{ color: 'white', fontSize: '24px' }}></i>
                            </Link>
                            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={signOutWithGoogle}>
                                <i className="fas fa-sign-out-alt" style={{ color: 'white', fontSize: '24px' }}></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
