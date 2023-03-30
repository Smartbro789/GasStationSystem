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
        background:green;
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
        border: 3px solid black;
        img{
            width:100%;
            height:100%;   
        }
    }
    form{
        width:100%;
        height:60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        input, button{
            width: 300px;
            height: 30px;
            margin-top: 1rem;
        }
    }
`;