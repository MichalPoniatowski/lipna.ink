import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import { getImages } from "./redux/gallery/API-actions-gallery";

// import { SharedLayout } from "./components/SharedLayout/SharedLayout";
const SharedLayout = lazy(() =>
  import("./components/SharedLayout/SharedLayout")
);

const Artists = lazy(() => import("./pages/Artists/Artists"));
const Home = lazy(() => import("./pages/Home/Home"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Studio = lazy(() => import("./pages/Studio/Studio"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App({ setLoading }) {
  useEffect(() => {
    setLoading(false);
    console.log("App has loaded, setting loading to false.");
  }, [setLoading]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="artists" element={<Artists />} />
          <Route path="studio" element={<Studio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
