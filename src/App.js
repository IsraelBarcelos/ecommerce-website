import React, {useState} from 'react';
import Categories from "./components/Categories";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Recommend from "./components/Recommend";
import Choose from "./components/Choose";
import Footer from "./components/Footer";
import Promo from "./components/Promo";
import Products from "./components/Products";
import "./scss/index.scss";

export default function App() {

  const [theme, setTheme] = useState("dark");

  return <div className="app" data-theme={theme}>
    <ScrollToTop />
    <NavBar />
    <Home />
    <Services />
    <Categories />
    <Recommend />
    <Choose />
    <Products />
    <Promo />
    <Footer />
  </div>;
}
