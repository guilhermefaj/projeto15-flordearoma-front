import { useState } from "react";
import styled from "styled-components"

export default function ItemPage() {

    const [count, setCount] = useState(1);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        setCount(count - 1)
    }

    return (
        <Container>
            <ItemContainer>
                <img src="https://cdn.shopify.com/s/files/1/0587/6075/7446/products/BT-US_Boticollection-Innamorata-2_600x.jpg?v=1673610494"></img>
                <ItemDescription>
                    <h2>PERFUME EAU DE TOILLET</h2>
                    <Price>R$ 299,90</Price>
                    <Quantity>
                        <button onClick={decrementCount}>-</button>
                        <div>{count}</div>
                        <button onClick={incrementCount}>+</button>
                    </Quantity>
                    <CartAdd>Adicionar ao carrinho</CartAdd>
                    <Description>
                        <p>
                            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae ligula vestibulum, gravida tortor ac, laoreet ligula. Pellentesque aliquam sapien quis porta faucibus. Vestibulum nibh turpis, aliquet id luctus vel, imperdiet vel justo. Praesent vitae ultrices dui. Aenean in leo nisi. Fusce nec tellus a neque posuere rhoncus vitae et leo. Pellentesque semper, purus vitae sollicitudin molestie, tortor ex tempor lacus, sit amet consectetur nunc mi non mauris. Nunc commodo nibh vitae blandit pretium. Nulla ac sem eleifend, aliquam neque non, laoreet leo. Vivamus vulputate scelerisque turpis. Curabitur ac urna sed enim bibendum pharetra non quis orci. Donec commodo vehicula elit non pulvinar.    
                            Nam congue fringilla bibendum. Duis tincidunt aliquam quam, non mollis lorem aliquet ac. Proin euismod nunc quis tortor scelerisque, ac luctus tortor egestas. Maecenas nisi lacus, sollicitudin quis luctus sit amet, cursus a risus. Aenean non euismod orci, eget fermentum quam. Integer dapibus turpis dui, a luctus erat pharetra a. In egestas lectus vitae est dignissim consequat. Sed ut magna augue. Vivamus vel lorem non diam interdum varius. Nulla suscipit, velit at volutpat eleifend, lorem nulla molestie justo, ac accumsan mauris nulla in ex. Proin nec pretium libero.`}
                        </p>
                    </Description>
                </ItemDescription>
            </ItemContainer>
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