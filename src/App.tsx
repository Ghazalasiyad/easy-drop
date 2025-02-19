
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


// import Pick from './pages/Pick_Drop/Pick-Drop'

// import VehicleBooking from './components/Tabs/Tabs'
// import Tour from './pages/Tour/Tour'
import Partner from './pages/Partner/Partner'
// import Tour from './pages/Tour/Tour'

function App() {
  return (
    {/* <VehicleBooking/> */}
    {/* <Tour/> */}
  {/* <Pick/> */}
    // <Partner/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="pick-drop" element={<Drop />} />
          {/* <Route path='partner' element={<Partner/>}/>
          <Route path='tour' element={<Tour/>}/>
          <Route path='pick' element={<Pick/>}/> */}
          <Route path="travel" element={<Tour />} /> 
          <Route path="partner" element={<Partner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
