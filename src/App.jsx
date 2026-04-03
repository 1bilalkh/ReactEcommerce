import Header from "./component/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./component/Footer";
import "./style.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import About from "./pages/About";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif", // your font here
  },
});

function App() {
  return (
    <>
      <CartProvider>
        {" "}
        {/* ✅ wrap here */}
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
