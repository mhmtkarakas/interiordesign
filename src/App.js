import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header.jsx";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
