import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "@/screen/About";
import Home from "@/screen/Home";
import Project from "@/screen/Project";
import Contact from "@/screen/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
