// import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeLogin from './screen/HomeLogin';
import HomeSignup from './screen/HomeSignup';
import LandingPage from './screen/LandinPage';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<HomeLogin />} />
          <Route path="/signup" element={<HomeSignup />} />
          <Route path="/landing" element={<LandingPage />} />
       </Routes>
    </div>
  );
}

export default App;
