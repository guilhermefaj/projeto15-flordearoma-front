import { useEffect, useState } from "react";
import styled from "styled-components"
import apiItems from "../services/apiItems";
import { useParams } from "react-router-dom";

export default function ItemPage() {
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState()
    const { itemId } = useParams()

    function incrementCount() { setCount(count + 1) }
    function decrementCount() { setCount(count - 1) }

    useEffect(() => {
        apiItems.showItem(itemId)
            .then(res => {
                const apiProduct = res.data
                setProduct(apiProduct)
            })
            .catch(err => {
                alert(err.response.data)
            })
    }, [itemId])

    return (
        <Container>
            {product ? (
                <ItemContainer>
                    <img src={product.URL}></img>
                    <ItemDescription>
                        <h2>{product.name.toUpperCase()}</h2>
                        <Price>R$ {product.value}</Price>
                        <Quantity>
                            <button onClick={decrementCount} disabled={count === 1}>-</button>
                            <div>{count}</div>
                            <button onClick={incrementCount} disabled={count === product.stock}>+</button>
                        </Quantity>
                        <CartAdd>Adicionar ao carrinho</CartAdd>
                        <Description>
                            {product.description.map(item => {
                                <p>item</p>
                            }
                            )}
                        </Description>
                    </ItemDescription>
                </ItemContainer>
            ) : (
                <p>carregando...</p>
            )
            }
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
        </Container>
    )
}

const Container = styled.div`
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
`

const ItemContainer = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: flex-start;  
    justify-content: center;
    gap: 100px;
    img{
        max-width: 550px;
        max-height: 825px;
    }
`

const ItemDescription = styled.div`
    display: flex;
    width: 400px;
    flex-direction: column;
    gap: 15px;
    h2{
        font-size: 20px;
    }
`

const Price = styled.div`

`

const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #D3D7D5;
    width: 100px;
    button{
        border: none;
        background-color: white;
        font-size: 20px;
    }
`

const CartAdd = styled.button`
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

const Description = styled.div`
    line-height:1.3;
    p{
    margin-bottom: 10px;
    text-align: justify;
    }
    `

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