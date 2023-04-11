import styled from 'styled-components';

export const ContainerSignup = styled.form`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input, button{
        width: 300px;
        height: 30px;
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        color: #000;
        border:none;
        ::placeholder{
            font-size: 1.2rem;
            color: #000;
        }
    }
    input{
        border-bottom: 1px solid #111;
        outline:0;
    }
    button{
        background:#424242;
        color:#fff;
        border-radius: 10px;
    }
`;