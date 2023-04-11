import styled from 'styled-components';

export const ContainerCar = styled.div`
    width: 100%;
    height: 80%;
    background: #fff;
    display: flex;
    flex-direction: column;
    section{
        width: 100%;
        height: 100%;
        div{
            width: 100%;
            display: flex;
            margin:1rem 0;
            justify-content:space-between;
            label, span, button{
                margin: 0 2rem;
            }
            button{
                width: 100%;
                height: 30px;
                background: #424242;
                border-radius:10px;
                color:#fff;
                font-size:1rem
            }
            .remove{
                background: #fa1a16;
            }
        }
    }
`;