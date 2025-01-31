import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"



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