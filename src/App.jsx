import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductCard from './components/product-card';
import Header from './components/header';
import LoginPage from './pages/loginPage.jsx';
import AdminPage from './pages/adminPage.jsx';

function App() {
  return (   
    <BrowserRouter>
     
      <Routes path="/*">
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;