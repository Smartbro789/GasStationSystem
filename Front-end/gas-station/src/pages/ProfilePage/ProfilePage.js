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
            const confirm = window.confirm('Tem certeza que deseja remover sua conta?')
            if(confirm){
                axios
                    .delete(`http://localhost:3003/clients/delete/${localStorage.getItem('idClient')}`)
                    .then((resp)=>{
                        alert(resp.data.message)
                        navigate('/login')
                    })
                    .catch((err)=>{
                        alert('Sua conta nâo pode ser excluida enquanto estiver carros cadastrados...')
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

            const confirm = window.confirm('Deseja realmente alterar sua senha? Esta açâo não podera ser desfeita.')
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

            const confirm = window.confirm('Deseja realmente alterar seu limite?')
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
                    <h2>Minhas informações</h2>
                    <div>
                        <label>Nome completo:</label>
                        <span>{profile.nameClient}</span>
                    </div>
                    <div>
                        <label>Email:</label>
                        <span>{profile.email}</span>
                    </div>
                    <div>
                        <label>Senha:</label>
                        <span>********</span>
                    </div>
                    <div>
                        <label>Limite de crédito:</label>
                        <span>R$ {Number(profile.credit_limit).toFixed(2)}</span>
                    </div>
                </InfoProfile>
                <ActionsProfile>
                <section>
                    <button className='change' onClick={changePassword}>Alterar senha</button>
                    <button className='limit' onClick={changeLimit}>Aumentar limite</button>
                    <button className='remove' onClick={removeAccount}>Excluir conta</button>
                </section>
                </ActionsProfile>
                <InputProfile>
                        <fieldset  id='newPass'>
                            <legend>Nova senha:</legend>
                            <input
                            value={newValue}
                            onChange={(ev)=>{setNewValue(ev.target.value)}}
                        />
                        <button disabled = { newValue.length < 6} onClick={confirmChange}>Confirmar</button>
                        </fieldset>
                        <fieldset  id='newLimit'>
                            <legend>Novo limite:</legend>
                            <input
                            value={newValue}
                            onChange={(ev)=>{setNewValue(ev.target.value)}}
                        />
                        <button onClick={confirmChangeLimit}>Confirmar</button>
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