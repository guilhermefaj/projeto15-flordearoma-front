import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    z-index: 10;
    margin-bottom: 160px;
    width: 100%;
    height: 160px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: inset 0px -1px 0px #DDDEDE;
`

export const Alert = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: #4F8164;
    font-family: 'DM Sans', sans-serif;
    color: white;
`

export const TitleContainer = styled.nav`
    text-align: center;
    width: 100%;
    margin-top: 17px;
    font-size: 45px;
    font-family: "Cinzel Decorative", cursive;
    position: relative;
`

export const Title = styled.div`

`

export const Icons = styled.div`
    display: flex;
    font-size: 20px;
    gap: 25px;
    position: absolute;
    right: 30px;
    top: 0;
`