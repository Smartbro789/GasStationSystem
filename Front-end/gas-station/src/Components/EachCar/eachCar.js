import React from 'react';
import { ContainerEachCar } from './style';
import { useNavigate } from 'react-router-dom';

export default function EachCar(props) {
    const navigate = useNavigate()

    const infoCar = (idCar)=>{
        navigate('/infoCarro')
        localStorage.setItem('idCar', idCar)
    }

 return (
    <ContainerEachCar onClick={()=>{infoCar(props.car.idCar)}}>
        <img src='https://cdn-icons-png.flaticon.com/512/1553/1553980.png'/>
        <span>{props.car.carName}</span>
        <span>{props.car.plate}</span>
    </ContainerEachCar>
 );
}