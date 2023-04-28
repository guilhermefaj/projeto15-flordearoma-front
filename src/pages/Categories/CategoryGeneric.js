
import styled from "styled-components";
import { useState, useEffect } from "react";
import api from "../../axios";
import { useParams } from "react-router-dom";

const REACT_APP_API_URL="http://localhost:5000"

export default function CategoryPage() {
  const { categories } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get(`${REACT_APP_API_URL}/products`);
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

  return (
    <Container>
      <Products>
        {products.map((product) => (
          <Product key={product.id}>
            <img src={product.URL} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <AddCar>
              ADD TO CART
            </AddCar>
          </Product>
        ))}
      </Products>
    </Container>
  );
}


const Container = styled.div`
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
  `;

    
  const Product = styled.div`

  width: 250px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
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

const AddCar= styled.button`
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