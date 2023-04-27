import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.div`
    position: fixed;
    top:0px;
    left: 0px;
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
    font-size: 40px;
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

export const Navigation = styled.nav`
        display: flex;
        justify-content: center;
        align-items: center;
    ul{
        display: flex;
        gap: 60px;
        position: absolute;
        bottom: 10px;
    }
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 15px;
    }
`

export const StyledLink = styled(Link)`
  font-size: 16px;
  color: black;
  font-family: 'DM Sans', sans-serif;

  &.perfumaria:hover {
    font-size: 18px;
    font-weight: 700;
    color: #4F8164;
  }

  &.cabelos:hover {
    font-size: 18px;
    font-weight: 700;
    color: #4F8164;
  }

  &.corpo-e-banho:hover {
    font-size: 18px;
    font-weight: 700;
    color: #4F8164;
  }

  &.maquiagem:hover {
    font-size: 18px;
    font-weight: 700;
    color: #4F8164;
  }
`;