import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Login from "./Login";
function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Main />} />
    </Routes>
  </BrowserRouter>;
}
export default App;
