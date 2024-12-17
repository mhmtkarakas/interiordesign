import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header.jsx";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/Home/ContactPage/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
