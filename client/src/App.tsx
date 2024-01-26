import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import About from "./pages/About";
import { CreateBlog } from "./pages/CreateBlog";
import { Blog } from "./pages/Blog";
import { UpdateBlog } from "./pages/UpdateBlog";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blog/view/:id" element={<Blog />} />
        <Route path="/blog/update/:id" element={<UpdateBlog />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
