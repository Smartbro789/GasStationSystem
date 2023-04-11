import styled from 'styled-components';

export const ContainerFill = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    header{
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    main{
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ::before{
            content: "";
            width: 90%;
            display: flex;
            height: 2px;
            background: black;
        }
        table{
            width: 100%;
            text-align: center;
        }
    }
`;