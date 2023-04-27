import { useNavigate } from "react-router-dom";
import { cartProductsMock } from "../cartProductsMock";
import styled from "styled-components";
import { useState } from "react";

export default function CartPage() {
    const [cartProducts, setCartProducts] = useState(cartProductsMock);
    const navigate = useNavigate();
    let number = 1;
    const [total, setTotal] = useState(0);

    function navigateToHome() {
        navigate("/");
    }
    return (
        <CartContainer>
            <EmptyCart cartProducts={cartProducts}>
                <h1>
                    SEU CARRINHO ESTÁ VAZIO
                </h1><br />
                <h2>Compre acima de R$199,00 e ganhe frete grátis!</h2>
                <button onClick={navigateToHome}>COMPRAR</button>
            </EmptyCart>
            <Cart cartProducts={cartProducts}>
                <h1>
                    CARRINHO
                </h1><br />
                <h2>Adicione mais R$30,00 e ganhe frete grátis!</h2>
                <CartProductsContainer>
                    <Titles>
                        <div className="product"><h4>PRODUTO</h4></div>
                        <div className="total"><h4>QUANTIDADE</h4> <h4>TOTAL</h4></div>
                    </Titles>
                    {cartProducts.map((product) => {
                        return (
                            <ProductContainer>
                                <Product>
                                    <img src={product.URL} alt={product.name} />
                                    <div>
                                        <h3>{product.name.toUpperCase()}</h3>
                                        <h4>{`R$ ${product.value}`}</h4>
                                    </div>
                                </Product>
                                <Quantity>
                                    <div>
                                        CONTADOR
                                        {number}
                                    </div>

                                    <button>REMOVE</button>
                                </Quantity>
                                <ProductTotal>
                                    <h4>{`R$ ${Number(product.value) * number}`}</h4>
                                </ProductTotal>
                            </ProductContainer>
                        )
                    })}
                    <Total>
                        <h3>{`TOTAL: R$ ${total}`}</h3>
                    </Total>
                </CartProductsContainer>
            </Cart>
        </CartContainer>
    )
}

const Total = styled.div`
border-top: 1px solid #6A6A6A;
display: flex;
justify-content: flex-end;
`
const Product = styled.div`
display:flex;
align-items: center;
width:60%;
div{
    padding-left: 25px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    width:330px;
}
img{
    width:120px;
    height: 180px;
    object-fit: cover;

}
`
const Quantity = styled.div`
width:20%;
display:flex;
flex-direction: column;
align-items: flex-start;
div{
    width:98px;
    height: 40px;
}
button{
    width:55px;
    height: 15px;
    border: none;
}
`
const ProductTotal = styled.div`
width:20%;
display:flex;
justify-content: flex-end;
`

const ProductContainer = styled.div`
display:flex;
align-items: center;
padding: 10px 0px;
width:100%;
`

const Titles = styled.div`
border-bottom: 1px solid #6A6A6A;
display: flex;
.product{
    width: 60%;
}
.total{
    width: 40%;
    display: flex;
    justify-content: space-between;
}
`
const Cart = styled.div`
    margin-top:260px; 
    display: ${({ cartProducts }) => cartProducts.length !== 0 ? "flex" : "none"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`
const CartProductsContainer = styled.div`
    padding: 49px 20px;
    margin-top: 35px;
    width: 80%;
    height: 300px;
    height: fit-content;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
`
const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f3f6f4;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 80px;
    height: fit-content;
    h1{
        font-size:16px;
        font-weight:500;
        letter-spacing: 4px;
        color:#1F2622;
    }
    h2{
        font-size:14x;
        font-weight:400;
        color:#6A6A6A;
        margin-bottom: 10px;
    }
    h3{
        color: #1F2622;
        font-size: 13px;
        font-weight:500;
        letter-spacing: 2.4px;
        margin-bottom: 10px;
        margin-top:10px;

    }
    h4{
        color: #6A6A6A;
        font-size: 12px;
        font-weight:500;
        letter-spacing: 2.2px;
        margin-bottom: 10px;
    }

`

const EmptyCart = styled.div`
    margin-top:260px;  
    display: ${({ cartProducts }) => cartProducts.length === 0 ? "flex" : "none"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  
    button{
        margin-top:30px;
        width: 223px;
        height: 45px;
        background-color: #4F8165;
        color: #FFFFFF;
        font-family: "DM Sans", sans-serif;
        font-size:14px;
        font-weight:500;
        line-height:15px;
        letter-spacing: 2.4px;
        border: none;
        border-radius: 3px;
        margin-bottom: 25px;
        cursor:pointer;
    }
`