import styled from 'styled-components';

export const ContainerProfile = styled.div`
    width:100%;
    height:80%;
    display: flex;
    justify-content: center;
    background:red;
    flex-direction:column;
    align-items:center;
    section{
        width:350px;
        height:100%;
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        div{
            margin-top:1rem;
            label{
                font-weight:bold;
                margin-left: 1rem;
            }
        }
    }
`;