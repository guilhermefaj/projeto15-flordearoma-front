import styled from "styled-components";

export default function Recomendations() {

    return (
        <RecomendationsContainer>
            <RecomandationTitle>
                VOCÊ TAMBÉM PODE GOSTAR
            </RecomandationTitle>
            <Recomendation>
                <img src="https://cdn.shopify.com/s/files/1/0587/6075/7446/products/BT-US_Boticollection-Carpe-Diem-3_600x.jpg?v=1673610532" />
                <RecomendationName>
                    NOME DO PRODUTO
                </RecomendationName>
                <RecomendationPrice>
                    R$199,90
                </RecomendationPrice>
                <RecomendationAdd>
                    ADD TO CART
                </RecomendationAdd>
            </Recomendation>
            <Recomendation>
                <img src="https://cdn.shopify.com/s/files/1/0587/6075/7446/products/BT-US_Boticollection-Carpe-Diem-3_600x.jpg?v=1673610532" />
                <RecomendationName>
                    NOME DO PRODUTO
                </RecomendationName>
                <RecomendationPrice>
                    R$199,90
                </RecomendationPrice>
                <RecomendationAdd>
                    ADD TO CART
                </RecomendationAdd>
            </Recomendation>
            <Recomendation>
                <img src="https://cdn.shopify.com/s/files/1/0587/6075/7446/products/BT-US_Boticollection-Carpe-Diem-3_600x.jpg?v=1673610532" />
                <RecomendationName>
                    NOME DO PRODUTO
                </RecomendationName>
                <RecomendationPrice>
                    R$199,90
                </RecomendationPrice>
                <RecomendationAdd>
                    ADD TO CART
                </RecomendationAdd>
            </Recomendation>
            <Recomendation>
                <img src="https://cdn.shopify.com/s/files/1/0587/6075/7446/products/BT-US_Boticollection-Carpe-Diem-3_600x.jpg?v=1673610532" />
                <RecomendationName>
                    NOME DO PRODUTO
                </RecomendationName>
                <RecomendationPrice>
                    R$199,90
                </RecomendationPrice>
                <RecomendationAdd>
                    ADD TO CART
                </RecomendationAdd>
            </Recomendation>
        </RecomendationsContainer>
    )

}

const RecomendationsContainer = styled.div`
    background-color: #F3F6F4;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 60px;
    padding-top: 100px;
    gap: 50px;
    position: relative;
`

const RecomandationTitle = styled.div`
    position: absolute;
    top: 40px;
    color: #1F2622;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
`

const Recomendation = styled.div`
    display: flex;  
    flex-direction: column;  
    align-items: center;
    img{
       max-width: 250px; 
    }
`

const RecomendationName = styled.div`
    margin-top: 20px;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
`

const RecomendationPrice = styled.div`
    margin-top: 5px;
    color: #1F2622;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
`

const RecomendationAdd = styled.button`
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