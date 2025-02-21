import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
// import ProductsPage from "./pages/productsPage";
// import ProductDetail from "./pages/productDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
