
import {Routes, Route}  from "react-router-dom"
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Category from "./pages/category";
import Register from "./pages/register";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/category" element={<Category/>} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/register" element={<Register  />} />
   </Routes>
  
   </>
  );
}

export default App;
