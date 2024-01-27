import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        <section className="favorite-picture">
          <img src="/static/pipi.png"></img>
        </section>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
