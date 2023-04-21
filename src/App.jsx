import './App.css';
import Layout from './components/Layout';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
}

export default App;