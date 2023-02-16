import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/style.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import AllProducts from "./components/pages/Products/AllProducts";
import Footer from "./components/Footer";
import ProductDetails from "./components/pages/Products/ProductDetails";
import FAQ from "./components/pages/FAQ";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Products/Cart";
import ShoppingCartProvider from "./components/context/ShoppingCartContext";
import Find from "./components/pages/Find";
function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<AllProducts />} />
        <Route path="product/:productID" element={<ProductDetails />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Find" element={<Find />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
