import styled from 'styled-components';

export const ContainerProfile = styled.div`
    width:100%;
    height:80%;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items:center;
    main{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }
`;

export const InfoProfile = styled.div`
    width:100%;
    height:70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div{
        width:100%;
        display: flex;
        justify-content: space-between;
        label{
            font-size:1rem;
            font-weight:bold;
        }

        label, span{
            margin:0.3rem 2rem;
        }
    }
`
export const ActionsProfile = styled.div`
    width:100%;
    height:10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button{
        width:300px;
        height:30px;
        margin:0.2rem 0.5rem;
        height:25px;
        border:none;
        border-radius:10px;
        font-size:1rem;
    }
    section{
        width:95%;
        height:200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:10px;
        flex-direction: column;
        position: relative;
        bottom:2rem;
        .change{
            background: #e9fa02;
        }
        .limit{
            background: #e9fa02;
        }
        .remove{
            background: #fa0702;
        }
    }
`
export const InputProfile = styled.div`
    width:100%;
    height:20%;
    display: flex;
    justify-content: center;
    align-items: center;
    fieldset {
        display:none;
        button{
            width:100px;
            background:#50f72f;
            border-radius:10px;
            font-size:1rem;
            border:none;
            margin-left:20px;
        }
    }
`
