import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerNavBar } from './style';

export default function NavBar() {
 
    const navigate = useNavigate()

    const logout = ()=>{
      const confirm = window.confirm('Ви хочете вийти?')
      if(confirm){
        localStorage.clear()
        navigate('/login')
      }
    }
    
return (
   <ContainerNavBar>
        <img src='https://e7.pngegg.com/pngimages/1016/542/png-clipart-black-house-house-computer-icons-home-automation-kits-real-estate-home-icon-angle-building.png' onClick = {()=>{navigate('/home')}}/>
        <img src='https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png' onClick = {()=>{navigate('/profile')}}/>
        <img src="https://w7.pngwing.com/pngs/367/547/png-transparent-computer-icons-exit-angle-text-rectangle.png" onClick = {logout}/>
   </ContainerNavBar>
 );
}