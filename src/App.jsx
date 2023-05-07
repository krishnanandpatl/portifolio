import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/navbar/Footer";
// import MyWork from "./components/mywork/MyWork";
import MyWorkPage from "./components/mywork/MyWorkPage";
import Restricted from "./components/secure/Restricted";
import Pgos from "./components/pgos/Pgos";
import RequiredAuth from "./hooks/RequiredAuth";
import Unauthorized from "./components/Unauthorized";
import Subex from "./components/subex/Subex";
import Sbsa from "./components/sbsa/Sbsa"
import Dell from "./components/dell/Dell";
import Verizon from "./components/verizon/Verizon";
import Home_Page from "./components/home/Home_Page";
import Mtbp from "./components/mtbp/Mtbp";

function App() {
  return (
    <div className="dark:bg-[#1E1E1E]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home_Page />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/my-work" element={<MyWorkPage />}></Route>
          <Route path="/restricted" element={<Restricted />}></Route>
          <Route element={<RequiredAuth/>}>
              <Route path="/pgos" element={<Pgos/>}></Route>
              <Route path="/verizon-360" element={<Verizon/>}></Route>
          </Route>
          <Route path="/standard-bank-of-south-africa" element={<Sbsa/>}></Route>
          <Route path="/mtbp" element={<Mtbp/>}></Route>
          <Route path="/dell" element={<Dell/>}></Route>
          <Route path="/subex" element={<Subex/>}></Route>
          <Route path="/unauthorized" element={<Unauthorized/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
