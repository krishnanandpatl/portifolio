import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/navbar/Footer";
// import MyWork from "./components/mywork/MyWork";
import MyWorkPage from "./components/mywork/MyWorkPage";
import Restricted from "./components/secure/Restricted";

function App() {
  return (
    <div className="dark:bg-[#1E1E1E]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/my-work" element={<MyWorkPage />}></Route>
          <Route path="/restricted" element={<Restricted />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
