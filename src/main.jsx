import React, { Suspense, lazy, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const App = lazy(() => import("./App.jsx"));
import "./index.css";
import { SplashScreen } from "./components/SplashScreen/SplashScreen.jsx";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleTouch = () => {};

    document.addEventListener("touchmove", handleTouch, { passive: true });
    document.addEventListener("touchstart", handleTouch, { passive: true });

    return () => {
      document.removeEventListener("touchmove", handleTouch);
      document.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  useEffect(() => {
    console.log("loading state:", loading);
  }, [loading]);

  return (
    <React.StrictMode>
      <Suspense fallback={<div></div>}>
        <Provider store={store}>
          <BrowserRouter basename="/lipna.ink/">
            <App setLoading={setLoading} />
            <ToastContainer limit={1} />
          </BrowserRouter>
        </Provider>
      </Suspense>
      <SplashScreen isOpen={loading} />
    </React.StrictMode>
  );
};

root.render(<RootComponent />);
