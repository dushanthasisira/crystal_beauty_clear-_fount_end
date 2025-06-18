import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductCard from './components/product-card';
import Header from './components/header';
import LoginPage from './pages/loginPage.jsx';
import AdminPage from './pages/adminPage.jsx';
import TestingPage from './pages/testingPage.jsx';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/client/register.jsx';
import HomePage from './pages/home.jsx';

function App() {
  return (   
    <BrowserRouter>
    <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/testing/*" element={<TestingPage />} />
        <Route path="*" element={<HomePage/>} />
        </Routes>
          </BrowserRouter>

  );
}

export default App;
