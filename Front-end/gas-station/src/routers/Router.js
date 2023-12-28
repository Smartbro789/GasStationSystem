import { BrowserRouter, Route, Routes } from "react-router-dom"
import FillPage from "../pages/FillPage/fillPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/loginpage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import SignupPage from "../pages/SignupPage/signup"
import InfoCarPage from "../pages/InfoCarPage/infoCarPage"
import ProductsPage from "../pages/ProductsPage/productspage"
import FinishPurchasePage from "../pages/FinishPurchasePage/finishPurchase"
import InfoFill from "../pages/InfoFill/infoFillPage"

export const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>} />
                <Route path ='/login' element={<LoginPage/>} />
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
                <Route path='/abastecimentos' element={<FillPage/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
                <Route path='/infoCarro' element={<InfoCarPage/>}/>
                <Route path='/Produtos' element={<ProductsPage/>}/>
                <Route path='/finalizarCompra' element={<FinishPurchasePage/>}/>
                <Route path='/infoCompra' element={<InfoFill/>}/>
            </Routes>
        </BrowserRouter>
    )
}