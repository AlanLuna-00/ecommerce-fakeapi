import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './Cards.jsx';

import NavBar from './NavBar.jsx';
import Detail from './Detail.jsx';
import Cart from './Cart.jsx';
import CartProvider from '../context/CartContext';



const Layout = () => {
  return (
    <Router>
      <CartProvider>
        <NavBar />
        <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/productos" element={<Cards />} />
          <Route path="/productos/:id" element={<Detail />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
        </div>
      </CartProvider>
    </Router>

  );
};

export default Layout;
