import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../src/pages/Home/Home'
import { Stock } from '../src/pages/Stock/Stock'
import { Contact } from '../src/pages/Contact/Contact'
import { About } from '../src/pages/About/About'
import { HQ } from '../src/pages/HQ/HQ'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="stock" element={<Stock />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="hq" element={<HQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
