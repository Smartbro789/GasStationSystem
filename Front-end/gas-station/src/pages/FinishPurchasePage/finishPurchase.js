import React from 'react';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/Navbar';
import { ContainerFinish, InfoProduct, MyCars, Purchase } from './style';
import useRequestData from '../../Hooks/useRequestData';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useProtectPage } from '../../Hooks/useProtectPage';

export default function FinishPurchasePage() {

    const navigate = useNavigate()
    useProtectPage()

    const [ value, setValue] = useState("")

    const [data] = useRequestData(`http://localhost:3003/products/${localStorage.getItem('idProduct')}`)
    const [cars] = useRequestData(`http://localhost:3003/cars/myCars/${localStorage.getItem('idClient')}`)

    const renderProduct = data.map((product, key)=>{
        return (
            <div key={key}>
                <span>{product.name_product} </span>
                <span>R$ {product.price.toFixed(2)}/litro</span>
            </div>
        )
    })

    const getPrice = data.map((product)=>{
        return product.price
    })

    const calcLts = ()=>{
        return (value/getPrice).toFixed(2)
    }

    const sendFinish = (ev) => {
        ev.preventDefault()

        if(!cars.length) {
            alert('У вас немає зареєстрованого автомобіля')
        }

        else{
            const body = {
                value: Number(value),
                litros:Number(calcLts())
            }
            axios
                .post(`http://localhost:3003/purchases/purchase/${localStorage.getItem('idClient')}/${localStorage.getItem('idProduct')}/${localStorage.getItem('idCar')}/${localStorage.getItem('idAccount')}`, body)
                .then((resp)=>{
                    alert(resp.data.message);
                    navigate('/home')
                })
                .catch((error)=>{console.log(error);})
        }
    }

    const renderCars = cars.map((car, key)=>{
        return(
            <div onClick={()=>{localStorage.setItem('idCar', car.idCar)}} key={key}>
                <input type='radio' name='car' value={car.idCar} defaultChecked/>
                <label>{car.carName}</label>
            </div>
        )
    })

    const verifyCars = ()=>{
        if(cars.length === 0){
            return <p>У вас немає зареєстрованого автомобіля</p>
        } else {
            return renderCars
        }
    }

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerFinish>
                <InfoProduct>
                    <h2>Продукт</h2>
                    {renderProduct}
                </InfoProduct>
                <MyCars>
                <fieldset>
                    <legend>Мої машини</legend>
                    {verifyCars()}
                </fieldset> 
                </MyCars>
                <Purchase>
                    <form onSubmit={sendFinish}>
                        <div>
                            <span>Вартість постачання: </span>
                            <input
                                type='number'
                                value={value}
                                onChange={(ev)=>{setValue(ev.target.value)}}
                            />
                            <p>Літри: {calcLts()}</p>
                            <button>Купити</button>
                        </div>
                    </form>
                </Purchase>
            </ContainerFinish>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}