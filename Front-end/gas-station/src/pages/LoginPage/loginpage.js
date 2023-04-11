import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerLogin } from './style';
import Header from '../../Components/Header/Header';

export default function LoginPage() {

  const navigate = useNavigate('')
  const[cpf, setCpf] = useState('')
  const[password, setPassword] = useState('')

  const sendLogin = (ev)=>{
    ev.preventDefault()
    
    const body = {
      cpf,
      password
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
              <h3>Bem vindo ao GS.</h3>
              <h4>Login</h4>
              <fieldset>
                <legend>Digite seu CPF</legend>
                  <input
                    maxLength={11}
                    placeholder='cpf'
                    value={cpf}
                    onChange={(ev)=>{setCpf(ev.target.value)}}
                  />
              </fieldset>
              <fieldset>
                <legend>Digite sua senha</legend>
                <input
                type='password'
                  placeholder='senha'
                  value={password}
                  onChange={(ev)=>{setPassword(ev.target.value)}}
                />
              </fieldset>
              <button onClick = {sendLogin} >Login</button>
              <button onClick={()=>{navigate('/signup')}}>Signup</button>
            </form>
          </ContainerLogin>
        </ContainerMobile>
   </ContainerBase>
 );
}
