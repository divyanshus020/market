import React from "react";
import Navbar from "./components/navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Aif from "./components/aif.jsx"
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Aif/>
    </>
  );
}
export default App;
