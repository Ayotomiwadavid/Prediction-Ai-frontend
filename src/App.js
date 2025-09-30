import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Betting from './pages/Betting';
import ContactUs from './pages/ContactUs';
import Calculator from './pages/Calculator';
import Faq from './pages/Faq';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/betnow" element={<Betting />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calculators" element={<Calculator />} />
        <Route path="/faqs" element={<Faq />} />
      </Routes>
  );
}

export default App;
