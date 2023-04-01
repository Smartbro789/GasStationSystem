import React, { useContext, useState } from 'react';
import EachCar from '../../Components/EachCar/eachCar';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/Navbar';
import { GlobalStateContext } from '../../GlobalState/globalStateContext';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerMyCars } from './style';

export default function MyCarsPage() {

    const [car, setCar] = useState('')
    const [plate, setPlate] = useState('')
    const context = useContext(GlobalStateContext)

    const addCar = (ev)=>{
        ev.preventDefault()
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
                        {
                            context.myCars.map((car, key)=>{
                                return(
                                    <EachCar key={key}
                                        car = {car}
                                    />
                                )
                            })
                        }
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