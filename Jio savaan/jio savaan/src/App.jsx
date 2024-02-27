import { BrowserRouter, Routes, Route } from "react-router-dom";
import Albumdetails from "./Pages/Albumdetails";
import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<Albumdetails />} />
      </Routes>
    </BrowserRouter>
  );
}
