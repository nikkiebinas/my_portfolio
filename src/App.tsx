import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./loader";
const LazyHome = lazy(() => import("@/screen/Home"));
const LazyAbout = lazy(() => import("@/screen/About"));
const LazyProject = lazy(() => import("@/screen/Project"));
const LazyContact = lazy(() => import("@/screen/Contact"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader loading={true} />}>
            <LazyHome />
          </Suspense>
        }
      />
      <Route
        path="home"
        element={
          <Suspense fallback={<Loader loading={true} />}>
            <LazyHome />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<Loader loading={true} />}>
            <LazyAbout />
          </Suspense>
        }
      />
      <Route
        path="project"
        element={
          <Suspense fallback={<Loader loading={true} />}>
            <LazyProject />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<Loader loading={true} />}>
            <LazyContact />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
