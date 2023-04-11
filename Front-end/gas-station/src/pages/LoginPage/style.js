import styled from 'styled-components';

export const ContainerLogin = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    div{
        width:100%;
        height:10%;
        display: flex;
        justify-content:center;
        align-items: center;
        
    }
    section{
        width:100%;
        height:30%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        img{
            width:50%;
            height:100%;   
        }
    }
    form{
        width:100%;
        height:60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        fieldset{
            height:50px
        }
        input{
            width: 300px;
            height: 30px;
            border:none;
            outline: none;
            font-size: 1rem;
            text-transform: uppercase;
        }
        button{
            width: 330px;
            height:30px;
            margin-top: 1rem;
            border:none;
            font-size: 1rem;
            background:#424242;
            color:#fff;
            border-radius: 10px;
        }
    }
`;