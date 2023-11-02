import React from "react";
import Navbar from "./components/navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Aif from "./components/insider.jsx"
import Insider from'./components/insider.jsx'
function App() {
  return (
    <>
      {/* <Navbar />
      <Outlet />
      <Footer />
      <Aif/> */}
      <Insider />

    </>
  );
}
export default App;
