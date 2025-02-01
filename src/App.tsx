import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePageLayout from './components/HomePageLayout/HomePageLayout'
import Home from './pages/Home/Home'
import Travel from './pages/Tour/Travel'

function App() {
  return (
    <>
    <Travel/>
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
