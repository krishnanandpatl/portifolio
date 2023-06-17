import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/styles/subex.css";
import "./components/styles/Dell.css";
import "./components/styles/Sbsa.css";
import "./components/styles/pgos.css";
import "./components/styles/Mtbp.css";
import "./components/styles/trippiez.css";
import "./components/styles/verizon2.css";
import Navbar from "./components/navbar/Navbar";
import Info from "./components/layout/Info";
import Home from "./components/home/Home";
import About from "./components/about/AboutV2";
import Footer from "./components/navbar/Footer";
import Restricted from "./components/secure/Restricted";
import RequiredAuth from "./hooks/RequiredAuth";
import Unauthorized from "./components/Unauthorized";
import MyWorkPage from "./components/mywork/MyWorkPage";
import Loading from "./components/navbar/Loading";
// import Dell from "./components/dell/Dell";
// import Pgos from "./components/pgos/Pgos";
// import Sbsa from "./components/sbsa/Sbsa";
// import Mtbp from "./components/mtbp/Mtbp";
// import Verizon from "./components/verizon/Verizon";
// import Trippiez from "./components/trippiez/Trippiez";
// import Subex from "./components/subex/Subex";
import Request from "./components/secure/Request";
import ScrollButton from "./components/navbar/ScrollButoon";
import NoPage from "./components/NoPage";

const Mtbp = lazy(() => import("./components/mtbp/Mtbp"));
const Trippiez = lazy(() => import("./components/trippiez/Trippiez"));
const Subex = lazy(() => import("./components/subex/Subex"));
const Dell = lazy(() => import("./components/dell/Dell"));
const Sbsa = lazy(() => import("./components/sbsa/Sbsa"));
const Pgos = lazy(() => import("./components/pgos/Pgos"));
const Verizon = lazy(() => import("./components/verizon/Verizon2"));
//add lazy when all css is in one file

function App() {
  return (
    <div className="dark:bg-[#151A20]" id="topheader">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/my-work"
            element={
              <Suspense fallback={<Loading />}>
                <MyWorkPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="/dell"
            element={
              <Suspense fallback={<Loading />}>
                <Info />
                <Dell />
              </Suspense>
            }
          ></Route>
          <Route path="/restricted" element={<Restricted />}></Route>
          <Route path="/request-access" element={<Request />}></Route>
          <Route element={<RequiredAuth />}>
            <Route
              path="/publicis-growth-os"
              element={
                <Suspense fallback={<Loading />}>
                  <Info />
                  <Pgos />
                </Suspense>
              }
            ></Route>
            <Route
              path="/verizon-360"
              element={
                <Suspense fallback={<Loading />}>
                  <Info />
                  <Verizon />
                </Suspense>
              }
            ></Route>
          </Route>
          <Route
            path="/standard-bank-of-south-africa"
            element={
              <Suspense fallback={<Loading />}>
                <Info />
                <Sbsa />
              </Suspense>
            }
          ></Route>
          <Route
            path="/moneytap-bankers-portal"
            element={
              <Suspense fallback={<Loading />}>
                <Info />
                <Mtbp />
              </Suspense>
            }
          ></Route>
          <Route
            path="/subex"
            element={
              <Suspense fallback={<Loading />}>
                <Info />
                <Subex />
              </Suspense>
            }
          ></Route>
          <Route
            path="/trippiez"
            element={
              <Suspense fallback={<Loading />}>
                <Info />
                <Trippiez />
              </Suspense>
            }
          ></Route>
          <Route path="/unauthorized" element={<Unauthorized />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
        <ScrollButton />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
