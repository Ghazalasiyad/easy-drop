import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePageLayout from './components/HomePageLayout/HomePageLayout'
import Home from './pages/Home/Home'
// import Pick from './pages/Pick_Drop/Pick-Drop'

// import VehicleBooking from './components/Tabs/Tabs'
// import Tour from './pages/Tour/Tour'
import Partner from './pages/Partner/Partner'
// import Tour from './pages/Tour/Tour'

function App() {
  return (
    <>
    {/* <VehicleBooking/> */}
    {/* <Tour/> */}
  {/* <Pick/> */}
    <Partner/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageLayout/>}>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='partner' element={<Partner/>}/>
          <Route path='tour' element={<Tour/>}/>
          <Route path='pick' element={<Pick/>}/> */}
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
