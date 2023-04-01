import React, { useContext } from 'react';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/Navbar';
import { GlobalStateContext } from '../../GlobalState/globalStateContext';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerFill } from './style';

export default function FillPage() {
    const context = useContext(GlobalStateContext)
 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerFill>
                <header>
                    <h2>Abastecimentos</h2>
                </header>
                <main>
                    {
                        context.fills.map((fill, key)=>{
                            return(
                                <div key={key}>
                                    <span>{fill.plate}</span>
                                    <span>{fill.product}</span>
                                    <span>{fill.quantity.toFixed(2)}Lts</span>
                                    <span>R$ {fill.value.toFixed(2)}</span>
                                </div>
                            )
                        })
                    }
                </main>
            </ContainerFill>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}