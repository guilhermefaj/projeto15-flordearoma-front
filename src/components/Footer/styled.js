import styled from "styled-components";

export const Container = styled.div`
    z-index: 10;
    width: 100%;
    margin-top: 300px;
    position: fixed;
    background-color: #4F8164;
    bottom:0;
`

export const TopFooter = styled.div`
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Cinzel Decorative", cursive;
    font-size: 40px;
`

export const InfoFooter = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
    gap: 160px;
    background-color: white;
    height: 300px;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #1F2622;
    font-family: 'DM sans', sans-serif;
    form{
        input{
        background-color: #f3f6f4;
        margin-bottom: 12px;
        width: 100%;
        height: 45px;
        border: solid 0.2px #D4D4D4;
        border-radius: 3px;
        padding: 0 11px;
        &::placeholder{
        color:#6A6A6A;
        font-family: "DM Sans", sans-serif;
        font-size:14px;
        font-weight:400;
        line-height:20px;
        }
    } button {
        width: 100%;
        height: 45px;
        background-color: #4F8165;
        color: #FFFFFF;
        font-family: "DM Sans", sans-serif;
        font-size:12px;
        font-weight:500;
        line-height:15px;
        letter-spacing: 2.4px;
        border: none;
        border-radius: 3px;
        margin-bottom: 25px;
        cursor:pointer;
        opacity: ${({ disabled }) => disabled === true ? "70%" : "100%"}
    }
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #1F2622;
    font-family: 'DM sans', sans-serif;
    div{
        color: #6A6A6A;
        cursor:pointer;
    }
`

export const BottomFooter = styled.div`
    display: flex;
    align-items: center;
    padding-left: 30px;
    height: 30px;
    color: white;
    font-family: 'DM sans', sans-serif;
`