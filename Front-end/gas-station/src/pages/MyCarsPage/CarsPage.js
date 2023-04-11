import axios from 'axios';
import React, { useState } from 'react';
import EachCar from '../../Components/EachCar/eachCar';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/Navbar';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerMyCars } from './style';
import useRequestData from '../../Hooks/useRequestData';
import { useProtectPage } from '../../Hooks/useProtectPage';

export default function MyCarsPage() {
    useProtectPage()

    const [car, setCar] = useState('')
    const [plate, setPlate] = useState('')

    const [data, page, setPage] = useRequestData(`http://localhost:3003/cars/mycars/${localStorage.getItem('idClient')}`)
   
    const renderCar = data.map((car, key) =>{
        return <EachCar key={key} car={car} />
    })

    const addCar = (ev)=>{
        ev.preventDefault()

        const body = {
            carName: car,
            plate
        }

        axios
            .post(`http://localhost:3003/cars/addcar/${localStorage.getItem('idClient')}`, body)
            .then((resp)=>{
                alert(resp.data.message)
                setPage(!page)
                setCar("")
                setPlate("")
            })
            .catch((error)=>{alert(error.response.data)})

    }

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerMyCars>
                <header>
                    <h2>Meus Carros</h2>
                </header>
                <main>
                    <section>
                        {   renderCar }
                    </section>
                    <form onSubmit={addCar}>
                        <input
                            placeholder='Nome/Modelo automóvel'
                             value={car}
                               onChange={(ev)=>{setCar(ev.target.value)}}
                        />
                        <input
                               placeholder='placa do veiculo.'
                            value={plate}
                            onChange={(ev)=>{setPlate(ev.target.value)}}
                        />
                        <button>Cadastrar</button>
                    </form>
                </main>
            </ContainerMyCars>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}