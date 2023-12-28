import React from 'react';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/Navbar';
import { ContainerBase, ContainerMobile } from '../../styleGlobal';
import { ActionsProfile, ContainerProfile, InfoProfile, InputProfile } from './style';
import useRequestData from '../../Hooks/useRequestData';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useProtectPage } from '../../Hooks/useProtectPage';

export default function ProfilePage() {
    const navigate = useNavigate();
    useProtectPage()

    const [newValue, setNewValue] = useState('')

    const [data] = useRequestData(`http://localhost:3003/clients/profile/${localStorage.getItem('idClient')}`)

    const renderProfile = data && data.map((profile, key)=>{

        const removeAccount = ()=>{
            const confirm = window.confirm('Ви впевнені, що хочете видалити свій обліковий запис?')
            if(confirm){
                axios
                    .delete(`http://localhost:3003/clients/delete/${localStorage.getItem('idClient')}`)
                    .then((resp)=>{
                        alert(resp.data.message)
                        navigate('/login')
                    })
                    .catch((err)=>{
                        alert('Ваш обліковий запис не можна видалити, поки авто зареєстровано.')
                        console.log(err)})
            }
        }

        const changePassword = ()=>{
            const inputPass = document.getElementById('newPass')
            const inputLimit = document.getElementById('newLimit')
            inputLimit.style.display = 'none'

            if(inputPass.style.display === 'none') inputPass.style.display = 'flex'
            else inputPass.style.display = 'none'
        }

        const confirmChange = ()=>{
            const body = {
                newValue
            }

            const confirm = window.confirm('Ви справді хочете змінити свій пароль? Цю дію не можна скасувати.')
            if(confirm) {
                axios.patch(`http://localhost:3003/clients/changePass/${localStorage.getItem('idClient')}`, body)
                .then((resp)=>{
                    alert(resp.data.message)
                    setNewValue('')
                })
                .catch((error)=>{alert(error.response.data)})
            }
        }

        const changeLimit = ()=>{
            const inputLimit = document.getElementById('newLimit')
            const inputPass = document.getElementById('newPass')
            inputPass.style.display = 'none'

            if(inputLimit.style.display === 'none') inputLimit.style.display = 'flex'
            else inputLimit.style.display = 'none'

        }

        const confirmChangeLimit = ()=>{
            const body = {
                newValue
            }

            const confirm = window.confirm('Ви дійсно хочете змінити свій ліміт?')
            if(confirm) {
                axios.patch(`http://localhost:3003/clients/changeLimit/${localStorage.getItem('idClient')}`, body)
                .then((resp)=>{
                    alert(resp.data.message)
                    setNewValue('')
                })
                .catch((error)=>{alert(error.response.data)})
            }
        }

        return(
            <main key={key}>
                <InfoProfile>
                    <h2>Мої відомості</h2>
                    <div>
                        <label>Повне ім'я:</label>
                        <span>{profile.nameClient}</span>
                    </div>
                    <div>
                        <label>Email:</label>
                        <span>{profile.email}</span>
                    </div>
                    <div>
                        <label>Пароль:</label>
                        <span>********</span>
                    </div>
                    <div>
                        <label>Кредитний ліміт:</label>
                        <span>R$ {Number(profile.credit_limit).toFixed(2)}</span>
                    </div>
                </InfoProfile>
                <ActionsProfile>
                <section>
                    <button className='change' onClick={changePassword}>Змінити пароль</button>
                    <button className='limit' onClick={changeLimit}>Збільшити ліміт</button>
                    <button className='remove' onClick={removeAccount}>Видалити аккаунт</button>
                </section>
                </ActionsProfile>
                <InputProfile>
                        <fieldset  id='newPass'>
                            <legend>Новий пароль:</legend>
                            <input
                            value={newValue}
                            onChange={(ev)=>{setNewValue(ev.target.value)}}
                        />
                        <button disabled = { newValue.length < 6} onClick={confirmChange}>Підтвердити</button>
                        </fieldset>
                        <fieldset  id='newLimit'>
                            <legend>Новий ліміт:</legend>
                            <input
                            value={newValue}
                            onChange={(ev)=>{setNewValue(ev.target.value)}}
                        />
                        <button onClick={confirmChangeLimit}>Підтвердити</button>
                        </fieldset>
                </InputProfile>
            </main>
        )
    })

 return (
   <ContainerBase>
        <ContainerMobile>
            <Header/>
        <ContainerProfile>
            {renderProfile}
        </ContainerProfile>
        <NavBar/>
    </ContainerMobile>
   </ContainerBase>
 );
}