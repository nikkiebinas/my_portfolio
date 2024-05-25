import { Route, Routes } from "react-router-dom";
import Loader from "./loader";
import Home from "./screen/Home";
import About from "./screen/About";
import Project from "./screen/Project";
import Contact from "./screen/Contact";
import { useEffect, useState } from "react";
//const LazyHome = lazy(() => import("@/screen/Home"));
//const LazyAbout = lazy(() => import("@/screen/About"));
//const LazyProject = lazy(() => import("@/screen/Project"));
//const LazyContact = lazy(() => import("@/screen/Contact"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
}

export default App;
