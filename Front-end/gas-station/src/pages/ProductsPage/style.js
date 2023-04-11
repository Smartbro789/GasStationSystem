import styled from 'styled-components';

export const ContainerProduct = styled.div`
    width:100%;
    height:80%;
    display:flex;
    align-items:center;
    flex-direction:column;
    div{
        width: 100%;
        display:flex;
        justify-content:space-between;
        margin:1rem 0;
       
    }
    section{
        width: 100%;
        display: flex;
        justify-content:center;
        button{
            width: 200px;
            height: 30px;
            font-size:1rem;
            border-radius: 10px;
            background:green;
            color:#fff;
        }
    }
    form{
        width: 100%;
        display: flex;
        flex-direction:column;
        align-items: center;
        div{
            width: 250px;
            height:50px;
            background:#424242;
            border: 1px solid black;
            display: flex;
            border-radius: 10px;
            justify-content:center;
            align-items: center;
            margin: 1rem;
            span, button{
                margin:0.2rem 0.3rem;
                color:#fff;
            }
        }
    }
`;