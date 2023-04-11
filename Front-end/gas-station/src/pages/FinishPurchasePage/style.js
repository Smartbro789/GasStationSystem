import styled from 'styled-components';

export const ContainerFinish = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`;

export const InfoProduct = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items:center;
    flex-direction: column;
`

export const MyCars = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items:center;
    flex-direction: column;
    fieldset{
        width:60%;
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        div{
            margin:0 1rem
        }
    }
`

export const Purchase = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content:center;
    ::before{
        content:"";
        width: 80%;
        height:2px;
        display:flex;
        background:#111;
        margin-bottom:1rem;
    }
    form{
        div{
            button{
                background: #50f72f;
                width:300px;
                height:30px;
                border-radius:10px;
                border:none;
                font-size: 1rem;
                color: #111;
            }
            input{
                width:70px;
                text-align:center;
                border:none;
                border-bottom: 1px solid #111;
                outline: none;
            }
        }
    }
`
