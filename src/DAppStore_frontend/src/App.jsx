import { useState } from "react";
import { DAppStore_backend } from "declarations/DAppStore_backend";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<MainPage />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
