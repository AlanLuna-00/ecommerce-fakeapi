import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './Cards.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from './NavBar.jsx';
import { Detail } from './Detail.jsx';
import Cart from './Cart.jsx';



const Layout = () => {
  return (

    <Router>
      <CssBaseline />

        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/productos" element={<Cards />} />
            <Route path="/productos/:id" element={<Detail />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </Container>

    </Router>

  );
};

export default Layout;
