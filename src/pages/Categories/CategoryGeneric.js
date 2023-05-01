
import styled from "styled-components";
import { useState, useEffect } from "react";
import api from "../../axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Context from "../../contexts/Context";




export default function CategoryPage() {
  const { categories } = useParams();
  const [products, setProducts] = useState([]);
  const { cartProducts, setCartProducts } = useContext(Context);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_URL}/products`);
        const categoryProducts = response.data.filter(
          product => product.category === categories
        );
        setProducts(categoryProducts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [categories]);

  const handleImageClick = async (productId) => {
    try {
      const response = await api.get(`${process.env.REACT_APP_API_URL}/products/${productId}`);
      const product = response.data;
      window.location.href = `/${categories}/${product.id}`;
    } catch (err) {
      console.error(err);
    }
  };

  function addToCart(product) {
    const newCart = [...cartProducts, product];
    setCartProducts(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert("Produto adicionado no carrinho");
  }
  return (
    <Container>
      <Order>
        <Products>
          {products.map((product) => (
            <Product key={product.id}>
              <img src={product.URL} alt={product.name} onClick={() => handleImageClick(product.id)} />
              <p>{product.name.toUpperCase()}</p>
              <p>{product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <AddCar onClick={() => addToCart(product)}>
                ADD TO CART
              </AddCar>
            </Product>

          ))}
        </Products>
      </Order>

    </Container>
  );
}


const Container = styled.div`
  background-color: #F3F6F4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 60px;
  padding-top: 100px;
  gap: 50px;
  position: relative;
  `;



const Product = styled.div`
  width: 250px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    text-align: center;
    margin-top: 8px;
  }
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  & > ${Product} {
    width: 300px;
    margin: 0 5px 50px;
  }
  img {
    max-width: 100%;
    height: auto;
    min-height: 375px;
  }
`;

const AddCar = styled.button`
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

const Order = styled.button`
    margin: none;
    border: none;
    width: 80vw;
    background-color: #F3F6F4;

`