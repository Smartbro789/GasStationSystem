import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerLogin } from './style';

export default function LoginPage() {

  const navigate = useNavigate()

  const sendLogin = (ev)=>{
    ev.preventDefault()
    navigate("/home")
  }

 return (
   <ContainerBase>
        <ContainerMobile>
          <ContainerLogin>
            <Header/>
            <section>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5WOi07gs_8ASAqHRiWxpTxD4UW6T-zg3ug&usqp=CAU'/>
            </section>
            <form>
              <h3>Bem vindo ao GS.</h3>
              <h4>Login</h4>
              <input/>
              <input/>
              <button onClick = {sendLogin} >Login</button>
              <button>Signup</button>
            </form>
          </ContainerLogin>
        </ContainerMobile>
   </ContainerBase>
 );
}
