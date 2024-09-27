import React from 'react';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/Navbar';
import { ContainerProduct } from './style';
import useRequestData from '../../Hooks/useRequestData';
import { useNavigate } from 'react-router-dom';
import { useProtectPage } from '../../Hooks/useProtectPage';

export default function ProductsPage() {
    const navigate = useNavigate()
    useProtectPage()

    const [data] = useRequestData(`http://localhost:3003/products/getAll`)
    const renderProducts = data.result && data.result.map((product, key)=>{
        return(
            <div onClick={()=>{calcValue(product.idProduct)}} key={key}>
                <span >{product.name_product}</span>
                <span > R$ {product.price}</span>
            </div>
        )
    })

    const calcValue = (idProduct)=>{
        localStorage.setItem('idProduct', idProduct)
        navigate('/finishPurchasePage')
    }
   
 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerProduct>
                <h2>Паливо</h2>
                <form>
                    {renderProducts}
                </form>
            </ContainerProduct>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}