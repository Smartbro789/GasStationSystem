import React, { useContext } from 'react';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/Navbar';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerFill } from './style';
import useRequestData from '../../Hooks/useRequestData';
import { useNavigate } from 'react-router-dom';
import { useProtectPage } from '../../Hooks/useProtectPage';

export default function FillPage() {
    const navigate = useNavigate()
    useProtectPage()

    const infoPurchase = (idPurchase)=>{
        localStorage.setItem('idPurchase', idPurchase)
        navigate('/infoCompra')
    }

    const [data] = useRequestData(`http://localhost:3003/purchases/purchase/${localStorage.getItem('idClient')}`)
    const renderFills = data.map((fill, key)=>{
        return(
            <tr onClick={()=>{infoPurchase(fill.idPurchase)}} key={key}>
                <td>{fill.plate}</td>
                <td>{fill.name_product}</td>
                <td>R$ {fill.value.toFixed(2)}</td>
                <td>{fill.litros.toFixed(2)} Lt</td>
            </tr>
        )
    })
 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerFill>
                <header>
                    <h2>Покупки</h2>
                </header>
                <main>
                   <table border={0}>
                        <tbody>
                            <tr>
                                <th>Номерний знак</th>
                                <th>Продукт</th>
                                <th>Кількість</th>
                                <th>Літри</th>
                            </tr>
                            {renderFills}
                        </tbody>
                   </table>
                </main>
            </ContainerFill>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}