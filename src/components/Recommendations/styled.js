import styled from "styled-components";

export const Recommendation = styled.div`
    display: flex;  
    flex-direction: column;  
    align-items: center;
    img{
       max-width: 250px; 
    }
`

export const RecommendationName = styled.div`
    text-align: center;
    margin-top: 20px;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
`

export const RecommendationPrice = styled.div`
    margin-top: 5px;
    color: #1F2622;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
`

export const RecommendationAdd = styled.button`
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
    height: 35px;
    background-color: #4F8165;
    color: #FFFFFF;
    font-family: "DM Sans", sans-serif;
    font-size:12px;
    font-weight:500;
    line-height:15px;
    letter-spacing: 2.4px;
    border: none;
    margin-bottom: 25px;
    cursor:pointer;
    opacity: ${({ disabled }) => disabled === true ? "70%" : "100%"};
    background-image: linear-gradient(to right, #4F8165, green);
    background-size: 200% auto; 
    transition: background-position 0.5s ease; 
    &:hover{
        background-position: -100% center;
        background-color: white;
    }
`