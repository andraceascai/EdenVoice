import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Post from "./components/Post/Post";
import ExploreIdeas from "./components/ExploreIdeas/ExploreIdeas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="edenvoice.azurewebsites.net/post" element={<Post />} />
          <Route path="/explore" element={<ExploreIdeas />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
