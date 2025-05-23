import './App.css';
import { useEffect, React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import './assets/css/style.css';
import './assets/css/media.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
