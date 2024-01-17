import "./App.css";

import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Artists } from "./pages/Artists/Artists";
import { Home } from "./pages/Home/Home";
import { Gallery } from "./pages/Gallery/Gallery";
import { Studio } from "./pages/Studio/Studio";
import { Shop } from "./pages/Shop/Shop";

import { Contact } from "./pages/Contact/Contact";
import { FAQ } from "./pages/FAQ/FAQ";
import { NotFound } from "./pages/NotFound/NotFound";

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
