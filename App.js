import React from "react";
import "../src/App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import Details from "./Components/Details";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Provider store={store}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
          <Footer/>
      </Provider>
    </>
  );
};

export default App;
