import styled from 'styled-components';

export const ContainerMyCars = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    header{
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items:center;
        background: #dfe1e6;
    }
    main{
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        form{
            width: 100%;
            height: 30%;
            background: #dfe1e6;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            input{
                width: 300px;
                height: 20px;
                margin: 0.5rem 0;
                text-align: center;
                font-size: 1rem;
                color: #111;
                border: none;
                background: transparent;
                border-bottom:1px solid #111;
                ::placeholder{
                    color: #111;
                    text-align: center;
                    font-size: 1rem;
                }
            }
            button{
                width: 150px;
                height: 30px;
                margin: 0.5rem 0;
                background:#50f72f;
                border:none;
                border-radius:10px;
                color: #111;
                font-size: 1rem;
            }
        }

        section{
            width: 100%;
            height: 70%;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-y: auto;
        }
    }
`