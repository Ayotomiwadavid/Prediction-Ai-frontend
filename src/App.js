import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Betting from './pages/Betting';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/betting" element={<Betting />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}

export default App;
