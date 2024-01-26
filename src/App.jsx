import { Route, Routes } from "react-router-dom";

import { lazy } from "react";

import "./App.css";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const Artists = lazy(() => import("./pages/Artists/Artists"));

const Home = lazy(() => import("./pages/Home/Home"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Studio = lazy(() => import("./pages/Studio/Studio"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

// import { Artists } from "./pages/Artists/Artists";
// import { Home } from "./pages/Home/Home";
// import { Gallery } from "./pages/Gallery/Gallery";
// import { Studio } from "./pages/Studio/Studio";
// import { Shop } from "./pages/Shop/Shop";
// import { Contact } from "./pages/Contact/Contact";
// import { FAQ } from "./pages/FAQ/FAQ";
// import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="artists" element={<Artists />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="studio" element={<Studio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
