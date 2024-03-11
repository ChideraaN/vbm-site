import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../src/pages/Home/Home'
import { Stock } from '../src/pages/Stock/Stock'
import { Contact } from '../src/pages/Contact/Contact'
import { About } from '../src/pages/About/About'
import { HQ } from '../src/pages/HQ/HQ'
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="stock" element={<Stock />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="hq" element={<HQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
