import { BrowserRouter, Route, Routes } from "react-router-dom"
import FillPage from "../pages/FillPage/fillPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/loginpage"
import MyCarsPage from "../pages/MyCarsPage/CarsPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"

export const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>} />
                <Route path ='/login' element={<LoginPage/>} />
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
                <Route path='/abastecimentos' element={<FillPage/>}/>
                <Route path='/meusCarros' element={<MyCarsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}