import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import ShopContextProvider from "./context/shop-context";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./component/footer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
