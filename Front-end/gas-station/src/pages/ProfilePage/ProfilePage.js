import React from 'react';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/Navbar';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerProfile } from './style';

export default function ProfilePage() {
 return (
   <ContainerBase>
        <ContainerMobile>
            <Header/>
        <ContainerProfile>
            <section>
                <div>
                    <label>Nome completo:</label>
                    <span>teste teste teste</span>
                </div>
                <div>
                    <label>Email:</label>
                    <span>teste@teste.com</span>
                </div>
                <div>
                    <label>Senha:</label>
                    <span>********</span>
                    <button>alterar senha</button>
                </div>
                <div>
                    <label></label>
                    <span></span>
                </div>
                <div>
                    <label></label>
                    <span></span>
                </div>
            </section>
        </ContainerProfile>
        <NavBar/>
    </ContainerMobile>
   </ContainerBase>
 );
}