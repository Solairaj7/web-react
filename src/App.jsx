import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/product";
import Carts from "./components/Carts";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Bmw4 from "./components/img/bmw4.jpg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ZORO Luxury Cars</h3>
          <p>The Ultimate Driving Machine</p>
          <p>Experience unparalleled performance and luxury with ZORO.</p>
          <p>Discover the latest models and innovations.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 Tokyo, Japan</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@zoroluxurycars.com</p>
          <p>🕒 Mon-Fri: 9AM-6PM</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ZORO Luxury Cars. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}

 

function App() {

  const [cart , setCart] = useState([])

  function addToCart(item){
    setCart([...cart, item])
  }

  const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
  return (
    <BrowserRouter>
      <div className="htop">
        <div className="logo">
          <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={6} md={4}>
            <Image src={Bmw4} width={"50px"} height={"50px"} roundedCircle />
          </Col>
        </Row>
         </Container>
          <div>
          <h1 className="brand">ZORO</h1>
        </div>
        </div>
       
      <div className="hbuttons">
        <Link to="/"> <button>Home</button> </Link>
        <Link to="/about"><button>About </button>  </Link>
        <Link to="/product"> <button>Product</button>  </Link>
        <Link to="/contact"> <button> Contact </button> </Link>
        
        <Link to="/cart">
          <IconButton>
      <ShoppingCartIcon fontSize="small" />
      <CartBadge badgeContent={cart.length} color="primary" overlap="circular" />
    </IconButton> 
        </Link>
        </div>
        
        </div>
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product addtocart = {addToCart} />} />
        <Route path="/cart" element={<Carts cart={cart} setCart={setCart} />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

