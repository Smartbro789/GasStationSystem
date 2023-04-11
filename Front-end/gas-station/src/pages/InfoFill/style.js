import styled from 'styled-components';

export const ContainerInfoFill = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    main{
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        div{
            display: flex;
            justify-content: space-between;
            margin-top:1rem;
            label{
                font-weight: bold;
            }
        }
        button{
            width: 260px;
            height:25px;
            margin-top: 1rem;
            background: #424242;
            color: #fff;
            font-weight:bold;
            font-size: 1rem;
            border:0;
            border-radius: 10px;
        }
    }
`;