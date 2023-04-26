import './App.css';
import './index.css';
import Layout from './components/Layout';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <Layout />
    </AuthContextProvider>
  );
}

export default App;