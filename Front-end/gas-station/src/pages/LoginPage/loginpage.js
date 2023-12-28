import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerLogin } from './style';
import Header from '../../Components/Header/Header';

export default function LoginPage() {

  const navigate = useNavigate('')
  const[cpf, setCpf] = useState('')

  const sendLogin = (ev)=>{
    ev.preventDefault()
    
    const body = {
      cpf,
    }
    
    axios
      .post('http://localhost:3003/clients/login',body)
      .then((resp)=>{
        localStorage.setItem('token', resp.data.token)
        navigate("/home")
      })
      .catch((error)=>{
          alert(error.response.data)
      })
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
              <h3>Ласкаво просимо до EnergoFill.</h3>
              <h4>Увійти</h4>
              <fieldset>
                <legend>Введіть свій CPF</legend>
                  <input
                    maxLength={11}
                    placeholder='cpf'
                    value={cpf}
                    onChange={(ev)=>{setCpf(ev.target.value)}}
                  />
              </fieldset>
              <button onClick = {sendLogin} >Увійти</button>
              <button onClick={()=>{navigate('/signup')}}>Зареєструватися</button>
            </form>
          </ContainerLogin>
        </ContainerMobile>
   </ContainerBase>
 );
}
