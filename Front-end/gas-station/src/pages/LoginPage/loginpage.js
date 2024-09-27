import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerLogin } from './style';
import Header from '../../Components/Header/Header';

export default function LoginPage() {

  const navigate = useNavigate('')
  const[passport, setPassport] = useState('')
  const[password, setPassword] = useState('')

  const sendLogin = (ev)=>{
    ev.preventDefault()
    
    const body = {
      passport,
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
              <h3>Ласкаво просимо до EnergoFill.</h3>
              <h4>Увійти</h4>
              <fieldset>
                <legend>Введіть свій паспорт</legend>
                  <input
                    maxLength={11}
                    placeholder='Номер паспорту'
                    value={passport}
                    onChange={(ev)=>{setPassport(ev.target.value)}}
                  />
              </fieldset>
              <fieldset>
                <legend>Введіть свій пароль</legend>
                <input
                type='password'
                  placeholder='Пароль'
                  value={password}
                  onChange={(ev)=>{setPassword(ev.target.value)}}
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
