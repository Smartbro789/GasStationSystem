import React from 'react';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import Header from '../../Components/Header/Header';
import { ContainerCar } from './style';
import NavBar from '../../Components/NavBar/Navbar';
import useRequestData from '../../Hooks/useRequestData';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useProtectPage } from '../../Hooks/useProtectPage';

export default function InfoCarPage() {
    useProtectPage()
    const navigate = useNavigate()

    const removeCar = () => {
       axios
        .delete(`http://localhost:3003/cars/remove/${localStorage.getItem('idCar')}`)
            .then((resp)=>{
                alert(resp.data.message)
                navigate('/meuscarros')
            })
            .catch((error)=>{console.log(error);})
    }

    const [data] = useRequestData(`http://localhost:3003/cars/infocar/${localStorage.getItem('idCar')}`);
    const renderCar = data && data.map((car, key)=>{
        return(
            <ContainerCar key={key}>
                <section>
                    <div>
                        <label>Placa veiculo</label>
                        <span>{car.plate}</span>
                    </div>
                    <div>
                        <label>Nome veiculo:</label>
                        <span>{car.carName}</span>
                    </div>
                    <div>
                        <button onClick={()=>{navigate('/meuscarros')}}>Voltar</button>
                        <button className='remove' onClick={removeCar}>Excluir</button>
                    </div>
                </section>
            </ContainerCar>
        )
    })

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
           {renderCar}
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}