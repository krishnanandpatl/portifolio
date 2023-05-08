import "./App.css";
import { lazy } from "react";
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
import Sbsa from "./components/sbsa/Sbsa";
import Dell from "./components/dell/Dell";
import Verizon from "./components/verizon/Verizon";
import Home_Page from "./components/home/Home_Page";
import Mtbp from "./components/mtbp/Mtbp";
import Trippiez from "./components/trippiez/Trippiez";

// const Subex = lazy(() => import("./components/subex/Subex"));
// const Dell = lazy(() => import("./components/dell/Dell"));
// const Sbsa = lazy(() => import("./components/sbsa/Sbsa"));
// const MyWorkPage = lazy(() => import("./components/mywork/MyWorkPage"));
// const Pgos = lazy(() => import("./components/pgos/Pgos"));

function App() {
  return (
    <div className="dark:bg-[#1E1E1E]" id="topheader">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home_Page />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/my-work" element={<MyWorkPage />}></Route>
          <Route path="/dell" element={<Dell />}></Route>
          <Route path="/restricted" element={<Restricted />}></Route>
          <Route element={<RequiredAuth />}>
            <Route path="/publicis-growth-os" element={<Pgos />}></Route>
            <Route path="/verizon-360" element={<Verizon />}></Route>
          </Route>
          <Route
            path="/standard-bank-of-south-africa"
            element={<Sbsa />}
          ></Route>
          <Route path="/moneytap-bankers-portal" element={<Mtbp />}></Route>
          <Route path="/dell" element={<Dell />}></Route>
          <Route path="/subex" element={<Subex />}></Route>
          <Route path="/trippiez" element={<Trippiez />}></Route>
          <Route path="/unauthorized" element={<Unauthorized />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
