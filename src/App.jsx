import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/navbar/Footer";
// import MyWork from "./components/mywork/MyWork";
import Restricted from "./components/secure/Restricted";
import RequiredAuth from "./hooks/RequiredAuth";
import Unauthorized from "./components/Unauthorized";
import Home_Page from "./components/home/Home_Page";
import MyWorkPage from "./components/mywork/MyWorkPage";
import Dell from "./components/dell/Dell";
import Pgos from "./components/pgos/Pgos";
import Sbsa from "./components/sbsa/Sbsa";
import Mtbp from "./components/mtbp/Mtbp";
import Verizon from "./components/verizon/Verizon";
import Trippiez from "./components/trippiez/Trippiez";
import Subex from "./components/subex/Subex";

// const Subex = lazy(() => import("./components/subex/Subex"));
// const Dell = lazy(() => import("./components/dell/Dell"));
// const Sbsa = lazy(() => import("./components/sbsa/Sbsa"));
// const MyWorkPage = lazy(() => import("./components/mywork/MyWorkPage"));
// const Pgos = lazy(() => import("./components/pgos/Pgos"));
//add lazy when all css is in one file

function App() {
  return (
    <div className="dark:bg-[#1E1E1E]" id="topheader">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home_Page />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/my-work"
            element={
              <Suspense fallback={<h1>....Loading...</h1>}>
                <MyWorkPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="/dell"
            element={
              <Suspense fallback={<h1>....Loading...</h1>}>
                <Dell />
              </Suspense>
            }
          ></Route>
          <Route path="/restricted" element={<Restricted />}></Route>
          <Route element={<RequiredAuth />}>
            <Route
              path="/publicis-growth-os"
              element={
                <Suspense fallback={<h1>....Loading...</h1>}>
                  <Pgos />
                </Suspense>
              }
            ></Route>
            <Route
              path="/verizon-360"
              element={
                <Suspense fallback={<h1>....Loading...</h1>}>
                  <Verizon />
                </Suspense>
              }
            ></Route>
          </Route>
          <Route
            path="/standard-bank-of-south-africa"
            element={
              <Suspense fallback={<h1>....Loading...</h1>}>
                <Sbsa />
              </Suspense>
            }
          ></Route>
          <Route
            path="/moneytap-bankers-portal"
            element={
              <Suspense fallback={<h1>....Loading...</h1>}>
                <Mtbp />
              </Suspense>
            }
          ></Route>
          <Route path="/dell" element={<Dell />}></Route>
          <Route
            path="/subex"
            element={
              <Suspense fallback={<h1>....Loading...</h1>}>
                <Subex />
              </Suspense>
            }
          ></Route>
          <Route
            path="/trippiez"
            element={
              <Suspense fallback={<h1>....Loading...</h1>}>
                <Trippiez />
              </Suspense>
            }
          ></Route>
          <Route path="/unauthorized" element={<Unauthorized />}></Route>
          <Route path="*" element={<h1>No Route Defined</h1>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
