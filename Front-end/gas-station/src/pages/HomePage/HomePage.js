import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/Navbar';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { CardService, ContainerHomePage, ContainerInfo, ContainerServices } from './style';

export default function HomePage() {
    const navigate = useNavigate()
 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerHomePage>
                <ContainerInfo>
                    <h3>Fatura aberta</h3>
                    <div>
                        <label>Valor Total:</label>
                        <span>R$ 136,09</span>
                    </div>
                    <div>
                        <label>Vencimento:</label>
                        <span>20/03/2023</span>
                    </div>
                </ContainerInfo>
                <ContainerServices>
                    <CardService>
                        <img onClick={()=>{navigate('/abastecimentos')}} src='https://cdn-icons-png.flaticon.com/512/481/481233.png'/>
                        <span>Abastecimentos</span>
                    </CardService>
                    <CardService>
                        <img onClick={()=>{navigate('/meusCarros')}} src='https://cdn-icons-png.flaticon.com/512/6668/6668689.png'/>
                        <span>Veículos</span>
                        </CardService>
                </ContainerServices>
            </ContainerHomePage>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}