import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import ProductComparison from "./pages/ProductComparison";
import SingleProduct from "./pages/SingleProduct";
import Blog from "./pages/Blog";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="single-product" element={<SingleProduct />} />
        <Route path="product-comparison" element={<ProductComparison />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
