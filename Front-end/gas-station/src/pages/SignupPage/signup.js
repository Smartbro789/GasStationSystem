import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerSignup } from './style';

export default function SignupPage() {

    const [nameClient, setNameClient] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const signup = (ev)=>{
        ev.preventDefault()

        const body = {
            nameClient,
            cpf,
            password,
            email
        }
        
        axios
            .post('http://localhost:3003/clients/create', body)
            .then((resp)=>{
                alert(resp.data.message);
                navigate('/login')
            })
            .catch((error)=>{
                alert(error.response.data);
            })
    }

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerSignup onSubmit={signup}>
                <h2>Crie sua conta</h2>
                <input
                    placeholder='Nome completo'
                    value={nameClient}
                    onChange={(ev)=>{setNameClient(ev.target.value)}}
                />
                <input
                    placeholder='Cpf'
                    value={cpf}
                    onChange={(ev)=>{setCpf(ev.target.value)}}
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(ev)=>{setEmail(ev.target.value)}}
                />
                <input
                    type='password'
                    placeholder='Senha'
                    value={password}
                    onChange={(ev)=>{setPassword(ev.target.value)}}
                />
                <button>Enviar Solicitaçâo</button>
                <button onClick={()=>{navigate('/login')}} type='button'>Voltar</button>
            </ContainerSignup>
        </ContainerMobile>
    </ContainerBase>
 )
}