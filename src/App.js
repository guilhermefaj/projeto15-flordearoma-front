import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import styled from "styled-components";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/Categories/CategoryGeneric";
import CheckoutPage from "./pages/CheckoutPage";
import Context from "./contexts/Context";
import { useState } from "react";


function App() {
  const persistentCartProducts = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
  const [cartProducts, setCartProducts] = useState(persistentCartProducts);
  const [total, setTotal] = useState(0);
  const [productCount, setProductCount] = useState({});
  return (
    <Context.Provider value={{ cartProducts, setCartProducts, persistentCartProducts, total, setTotal, productCount, setProductCount }}>
      <BrowserRouter>
        <Main>
          <Header />
          <Routes>
            < Route path="/sign-in" element={<SignInPage />} />
            < Route path="/sign-up" element={<SignUpPage />} />
            < Route path="/:categories/:itemId" element={<ItemPage />} />
            < Route path="/cart" element={<CartPage />} />
            < Route path="/:categories" element={<CategoryPage />} />
            < Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </Main>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`