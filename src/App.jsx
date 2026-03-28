import Header from "./component/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./style.css";
import Footer from "./component/Footer";


const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
});

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </ThemeProvider>
        
    </div>
  )
}

export default App
