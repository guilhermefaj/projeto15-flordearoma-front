import { useNavigate } from "react-router-dom"
import { Recommendation, RecommendationName, RecommendationPrice, RecommendationAdd } from "./styled"
import Context from "../../contexts/Context"
import { useContext, useState } from "react";

export default function Recommendations({ category, id, URL, name, value, product }) {
    const navigate = useNavigate()
    const { cartProducts, setCartProducts } = useContext(Context);

    function handleImageClick() {
        navigate(`/${category}/${id}`)
        window.scrollTo(0, 0)
    }

    function addToCart(product) {
        const newCart = [...cartProducts, product];
        setCartProducts(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
        alert("Produto adicionado no carrinho");
    }

    return (
        <Recommendation>
            <img src={URL} onClick={handleImageClick} />
            <RecommendationName>
                {name.toUpperCase()}
            </RecommendationName>
            <RecommendationPrice>
                {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </RecommendationPrice>
            <RecommendationAdd onClick={() => addToCart(product)}>
                ADD TO CART
            </RecommendationAdd>
        </Recommendation>
    )
}
