import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerSignup } from './style';

export default function SignupPage() {
    const [nameClient, setNameClient] = useState('')
    const [surname, setSurname] = useState('')
    const [position, setPosition] = useState('')
    const [salary, setSalary] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passport, setPassport] = useState('')

    const navigate = useNavigate()

    const signup = (ev)=>{
        ev.preventDefault()

        const body = {
            nameClient,
            dob,
            password,
            email,
            surname,
            position,
            passport,
            salary
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
                <h2>Створити свій обліковий запис</h2>
                <input
                    placeholder='Прізвище'
                    value={surname}
                    onChange={(ev)=>{setSurname(ev.target.value)}}
                />
                <input
                    placeholder='Ім`я'
                    value={nameClient}
                    onChange={(ev)=>{setNameClient(ev.target.value)}}
                />
                <input
                    placeholder='Посада'
                    value={position}
                    onChange={(ev)=>{setPosition(ev.target.value)}}
                />
                <input
                    placeholder='Passport'
                    value={passport}
                    onChange={(ev)=>{setPassport(ev.target.value)}}
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(ev)=>{setEmail(ev.target.value)}}
                />
                <input
                    type='password'
                    placeholder='Пароль'
                    value={password}
                    onChange={(ev)=>{setPassword(ev.target.value)}}
                />
                <input
                    placeholder='Дата народження'
                    value={dob}
                    onChange={(ev)=>{setDob(ev.target.value)}}
                />
                <input
                    placeholder='Заробітня плата'
                    value={salary}
                    onChange={(ev)=>{setSalary(ev.target.value)}}
                />
                <button>Відправити запит</button>
                <button onClick={()=>{navigate('/login')}} type='button'>Назад</button>
            </ContainerSignup>
        </ContainerMobile>
    </ContainerBase>
 )
}