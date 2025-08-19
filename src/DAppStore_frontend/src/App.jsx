import { useState } from "react";
import { DAppStore_backend } from "declarations/DAppStore_backend";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Marketplace from "./pages/Marketplace";
import ContactUs from "./pages/ContactUs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/contactus" element={<ContactUs />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
