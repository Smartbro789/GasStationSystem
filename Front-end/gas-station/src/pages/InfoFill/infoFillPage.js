import React from 'react';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import NavBar from '../../Components/NavBar/Navbar';
import Header from '../../Components/Header/Header';
import { ContainerInfoFill } from './style';
import useRequestData from '../../Hooks/useRequestData';
import { useNavigate } from 'react-router-dom';
import { useProtectPage } from '../../Hooks/useProtectPage';

export default function InfoFill() {
    useProtectPage()
    const navigate = useNavigate()

const [data] = useRequestData(`http://localhost:3003/purchases/infopurchase/${localStorage.getItem('idPurchase')}`)

const renderInfo = data.map((purchase, key)=>{
    return(
        <main key={key}>
            <h2>Detalhes da compra</h2>
                <div>
                    <label>Carro:</label>
                    <span>{purchase.carName}</span>
                </div>
                <div>
                    <label>Categoria:</label>
                    <span>{purchase.category}</span>
                </div>
                <div>
                    <label>Data da compra:</label>
                    <span>{purchase.date}</span>
                </div>
                <div>
                    <label>Litros:</label>
                    <span>{purchase.litros} litros</span>
                </div>
                <div>
                    <label>Valor:</label>
                    <span>R$ {purchase.price.toFixed(2)}</span>
                </div>
                <div>
                    <label>Placa do Carro:</label>
                    <span>{purchase.plate}</span>
                </div>
                <div>
                    <label>Valor abastecido:</label>
                    <span>R$ {purchase.value.toFixed(2)}</span>
                </div>
                <button onClick={()=>{navigate('/abastecimentos')}}>Voltar</button>
        </main>
    )
})

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerInfoFill>
                {renderInfo}
            </ContainerInfoFill>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}