import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        < Route path="/sign-in" element={<SignInPage />} />
        < Route path="/sign-up" element={<SignUpPage />} />
        < Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
