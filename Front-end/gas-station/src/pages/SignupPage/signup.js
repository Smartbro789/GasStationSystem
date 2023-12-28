import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ContainerSignup } from './style';

export default function SignupPage() {
<<<<<<< Updated upstream
    const [nameClient, setNameClient] = useState('')
    const [surname, setSurname] = useState('')
    const [position, setPosition] = useState('')
    const [salary, setSalary] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passport, setPassport] = useState('')
=======

    const [name, setNameClient] = useState('')
    const [bonus_card_number, setBonusCardNumber] = useState('')
    const [password, setPassword] = useState('')
>>>>>>> Stashed changes

    const navigate = useNavigate()

    const signup = (ev)=>{
        ev.preventDefault()

        const body = {
<<<<<<< Updated upstream
            nameClient,
            dob,
            password,
            email,
            surname,
            position,
            passport,
            salary
=======
            name,
            bonus_card_number,
            password,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
                    placeholder='Повне ім`я'
                    value={name}
                    onChange={(ev)=>{setNameClient(ev.target.value)}}
                />
                <input
                    placeholder='Номер бонусної картки'
                    value={bonus_card_number}
                    onChange={(ev)=>{setBonusCardNumber(ev.target.value)}}
>>>>>>> Stashed changes
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