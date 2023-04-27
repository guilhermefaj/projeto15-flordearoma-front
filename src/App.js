import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        < Route path="/sign-in" element={<SignInPage />} />
        < Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
