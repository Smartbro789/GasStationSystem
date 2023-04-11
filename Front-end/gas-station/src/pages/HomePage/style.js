import styled from 'styled-components';

export const ContainerHomePage = styled.div`
    width:100%;
    height:80%;
    display: flex;
    justify-content: center;
    background:#fff;
    flex-direction:column;
    align-items:center;
`;

export const ContainerInfo = styled.div`
    width:90%;
    height:30%;
    display: flex;
    justify-content: center;
    border: 2px solid black;
    border-top: none;
    flex-direction: column;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background:#424242;
    color: #fff;
    h3{
        margin: 1rem;
    }
    div{
        width:100%;
        height:100%;
        display: flex;
        justify-content:space-between;

        span, label{
            margin: 0 1rem;
        }
    }
`

export const ContainerServices = styled.div`
    width:100%;
    height:70%;
    display: flex;
    justify-content:center;
    flex-wrap: wrap;

    ::before{
        content: '';
        display: flex;
        width: 90%;
        height: 3px;
        background: black;
        position: relative;
        top:1rem;
    }
    
    ::after{
        content: '';
        display: flex;
        width: 90%;
        height: 3px;
        background: black;
    }

`

export const CardService = styled.div`
    width:120px;
    height: 120px;
    border: 2px solid #fff;
    border-radius: 10px;
    background: #fff;
    margin: 1rem;
    display: flex;
    justify-content:center;
    align-items:center;
    background: #d1d0cd;
    flex-direction: column;
    img{
        width: 50%;
        height: 50%;
    }
    span{
        font-size: 1rem;
        color: #111;
        margin-top: 1rem;
    }
`