import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/Navbar';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { CardService, ContainerHomePage, ContainerInfo, ContainerServices } from './style';
import useRequestData from '../../Hooks/useRequestData';
import { useProtectPage } from '../../Hooks/useProtectPage';

export default function HomePage() {

    useProtectPage()

   const myHeader = {headers:{
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
   }}

    const navigate = useNavigate()
    const [data] = useRequestData(`http://localhost:3003/clients/myprofile`, myHeader)
    const [limit] = useRequestData(`http://localhost:3003/purchases/purchase/${localStorage.getItem('idClient')}`)
    
    const limitTotal = Number(data.map((limit)=>limit.credit_limit))
    const getValues = limit.map((client) =>client.value).reduce((a,b)=> a+b ,0)

    const renderAccount = data.map((client, key) =>{
        localStorage.setItem('idClient', client.id)
        return(
            <ContainerInfo key={key}>
                    <h3>Ласкаво просимо, {client.nameClient}</h3>
                    <div>
                        <label>Загальний ліміт:</label>
                        <span>R$ {limitTotal.toFixed(2)}</span>
                    </div>
                    <div>
                        <label>Доступний ліміт:</label>
                        <span>R$ {(limitTotal-getValues).toFixed(2)}</span>
                    </div>
                </ContainerInfo>
        )
    })

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerHomePage>
               {renderAccount}
                <ContainerServices>
                    <CardService>
                        <img alt='Abastecimentos' onClick={()=>{navigate('/abastecimentos')}} src='https://cdn-icons-png.flaticon.com/512/8082/8082687.png'/>
                        <span>Транспортні засоби</span>
                    </CardService>
                    <CardService>
                        <img alt='Veiculos' onClick={()=>{navigate('/meusCarros')}} src='https://cdn-icons-png.flaticon.com/512/6668/6668689.png'/>
                        <span>Транспортні засоби</span>
                    </CardService>
                    <CardService>
                        <img alt='Produtos' onClick={()=>{navigate('/Produtos')}} src='https://cdn-icons-png.flaticon.com/512/481/481233.png'/>
                        <span>Продукти</span>
                        
                    </CardService>
                </ContainerServices>
            </ContainerHomePage>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}