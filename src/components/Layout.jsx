import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cards from './Cards.jsx';
import NavBar from './NavBar.jsx';
import Detail from './Detail.jsx';
import Cart from './Cart.jsx';
import CartProvider from '../context/CartContext';
import Home from './Home.jsx';
import Login from './Login.jsx';
import { useAuth } from '../context/AuthContext';


const Layout = () => {
  const { user } = useAuth();
  // eslint-disable-next-line react/prop-types
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <CartProvider>
        {user && <NavBar />}
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<RequireAuth>
              <Home />
            </RequireAuth>} />
            <Route path="/productos" element={<RequireAuth>
              <Cards />
            </RequireAuth>} />
            <Route path="/productos/:id" element={<RequireAuth>
              <Detail />
            </RequireAuth>} />
            <Route path="/carrito" element={<RequireAuth>
              <Cart />
            </RequireAuth>} />
            <Route element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default Layout;
