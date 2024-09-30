import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Login from "./Login";
import Home from "./Home";
import User from "./User";
import Profile from "./Profile";
import Orders from "./Orders";

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
        <Route path="user/:id/:name" element={<User />}>
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
