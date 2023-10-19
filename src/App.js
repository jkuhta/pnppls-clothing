import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import ShopCategory from "./pages/shopCategory/ShopCategory";
import Navbar from "./components/Navbar/Navbar";
import Outlet from "./pages/outlet/Outlet";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route
            path="/accessories"
            element={<ShopCategory category="accessories" />}
          />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          {/*  <Route path="/login" element={<LoginSignup />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
