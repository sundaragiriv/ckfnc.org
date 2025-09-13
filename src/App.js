import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Donate from "./pages/Donate";
import GetInvolved from "./pages/GetInvolved";
import Blog from "./pages/Blog";
import Store from "./pages/Store";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}