import React, { lazy, Suspense } from "react";
// import About from "./About";
// import Contact from "./Contact";
// import Home from "./Home";
// import Login from "./Login";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          {/*in the fallback we can add a component like shimmerui*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
export default App;
