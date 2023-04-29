import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import Recommendations from "../components/Recommendations/Recommendations";
import Context from "../contexts/Context";
import apiItems from "../services/apiItems";

export default function CartPage() {
    const { cartProducts, setCartProducts, total, setTotal, productCount, setProductCount } = useContext(Context);
    const navigate = useNavigate();



    function incrementCount(id) {
        setProductCount({ ...productCount, [id]: (productCount[id] || 0) + 1 });
    }

    function decrementCount(id) {
        setProductCount({ ...productCount, [id]: Math.max((productCount[id] || 0) - 1, 0) });
    }

    function navigateToHome() {
        navigate("/");
    }

    function checkout() {
        navigate("/checkout");
    }

    function removeFromCart(id) {
        const newCart = cartProducts.filter(p => p.id !== id);
        setCartProducts(newCart);
        calculateTotal();
    }

    function getProductTotal(product) {
        return Number(product.value) * (productCount[product.id] ? productCount[product.id] : 1);

    }

    function calculateTotal() {
        let total = 0;
        cartProducts.forEach(product => {
            total += getProductTotal(product);
        });
        setTotal(total);
    }

    useEffect(() => {
        calculateTotal();
    }, [productCount]);


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
                <h2>{total > 199 ? "Você ganhou frete grátis!" : `Adicione mais ${(199 - total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em produtos e ganhe frete grátis!`}</h2>
                <CartProductsContainer>
                    <Titles>
                        <div className="product"><h4>PRODUTO</h4></div>
                        <div className="total"><h4>QUANTIDADE</h4> <h4>TOTAL</h4></div>
                    </Titles>
                    {cartProducts.map((product) => {
                        const count = productCount[product.id] || 1;
                        return (
                            <ProductContainer key={product.id}>
                                <Product>
                                    <img src={product.URL} alt={product.name} />
                                    <div className="productInfo">
                                        <h3>{product.name.toUpperCase()}</h3>
                                        <h4>{product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                                    </div>
                                </Product>
                                <Quantity>
                                    <Counter>
                                        <button onClick={() => decrementCount(product.id)} disabled={count === 1}>-</button>
                                        <div className="count">{count}</div>
                                        <button onClick={() => incrementCount(product.id)} disabled={count === product.stock}>+</button>
                                    </Counter>
                                    <button className="removeButton" onClick={() => removeFromCart(product.id)}>Remover do carrinho</button>
                                </Quantity>
                                <ProductTotal>
                                    <h4>{(Number(product.value) * count).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                                </ProductTotal>
                            </ProductContainer>
                        )
                    })}
                    <Total>
                        <h3>{`TOTAL: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</h3>
                        <CheckoutButton onClick={checkout}>FINALIZAR COMPRA</CheckoutButton>
                        <CheckoutButton onClick={navigateToHome}>CONTINUAR COMPRANDO</CheckoutButton>
                    </Total>
                </CartProductsContainer>
            </Cart>
        </CartContainer>
    )
}

const CheckoutButton = styled.button`
    width: 245px;
    padding-left: 20px;
    padding-right: 20px;
    height: 35px;
    background-color: #4F8165;
    color: #FFFFFF;
    font-family: "DM Sans", sans-serif;
    font-size:12px;
    font-weight:500;
    line-height:15px;
    letter-spacing: 2.4px;
    border: none;
    margin-top: 25px;
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

const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #D3D7D5;
    width: 100px;
    margin-bottom: 5px;
    button{
        border: none;
        background-color: white;
        font-size: 20px;
        cursor: pointer;
    }
`

const Total = styled.div`
border-top: 1px solid #DADDDB;
display: flex;
flex-direction: column;
align-items: flex-end;
`
const Product = styled.div`
display:flex;
align-items: center;
width:60%;
.productInfo{
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
.removeButton{
    width:50%;
    height: 15px;
    border:none;
    background-color: #ffffff;
    cursor:pointer;
    font-size:9px;
    text-decoration: underline;
    letter-spacing: 0.5px;
    color:#6A6A6A;
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
border-bottom: 1px solid #DADDDB;
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
    margin-top:60px; 
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
    margin-top:60px;  
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