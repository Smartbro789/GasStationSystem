import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/loginpage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"

export const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>} />
                <Route path ='/login' element={<LoginPage/>} />
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}