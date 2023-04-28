import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import styled from "styled-components";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";

import CategoryPage from "./pages/Categories/CategoryGeneric";


function App() {
  return (
    <BrowserRouter>
      <Main>
        <Header />
        <Routes>
          < Route path="/sign-in" element={<SignInPage />} />
          < Route path="/sign-up" element={<SignUpPage />} />
          < Route path="/:categories/:itemId" element={<ItemPage />} />
          < Route path="/cart" element={<CartPage />} />
          <Route path="/perfumaria" element={<CategoryPage category={"Perfumaria"}/>}/>
          <Route path="/make" element={<CategoryPage category={"make"}/>}/>
          <Route path="/cabelos" element={<CategoryPage category={"cabelos"}/>}/>
          <Route path="/body" element={<CategoryPage category={"body"}/>}/>
          <Route path="/checkout"/>

        </Routes>
        <Footer />
      </Main>
    </BrowserRouter>
  );
}

export default App;

const Main = styled.div`
  position: relative;
`