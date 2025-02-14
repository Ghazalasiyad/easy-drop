
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePageLayout from './components/HomePageLayout/HomePageLayout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Drop from './pages/PickDrop/Drop';
import Tour from './pages/Tours/Tour'; 
import Partner from './pages/BPartner/Partner';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="pick-drop" element={<Drop />} />
          <Route path="travel" element={<Tour />} /> 
          <Route path="partner" element={<Partner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
