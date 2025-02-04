import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePageLayout from './components/HomePageLayout/HomePageLayout'
import Home from './pages/Home/Home'
import Pick from './pages/Pick_Drop/Pick-drop'
// import VehicleBooking from './components/Tabs/Tabs'
// import Travel from './pages/Tour/Travel'

function App() {
  return (
    <>
    {/* <VehicleBooking/> */}
    {/* <Travel/> */}
    <Pick/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageLayout/>}>
          <Route path='/' element={<Home/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
