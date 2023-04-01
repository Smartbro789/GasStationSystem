import React from 'react';
import { ContainerEachCar } from './style';

export default function EachCar(props) {
 return (
    <ContainerEachCar>
        <img src='https://cdn-icons-png.flaticon.com/512/1553/1553980.png'/>
        <span>{props.car.car}</span>
        <span>{props.car.plate}</span>
    </ContainerEachCar>
 );
}