import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Portada from './components/Portada';
import Footer from './components/Footer';
import Acerca from './pages/Acerca';
import Servicios from './pages/Servicios';
import Contactos from './pages/Contactos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Router>
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Portada />} />
              <Route path="/acercade" element={<Acerca />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/contactos" element={<Contactos />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
