import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import ExploreIdeas from "./components/ExploreIdeas/ExploreIdeas";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<ExploreIdeas />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
