import styled from 'styled-components';

export const ContainerEachCar = styled.div`
    width: 95%;
    height: 60px;
    background: #dfe1e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    border-radius: 10px;
    img{
        width: 60px;
        height: 100%;
        margin-left: 0.5rem;
    }
    span{
        margin: 1rem 1rem;
    }
    button{
        border: none;
        font-size:1rem;
        color:red;

    }
`;