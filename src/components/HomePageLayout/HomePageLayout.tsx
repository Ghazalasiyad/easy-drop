import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer';



const HomePageLayout = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePageLayout