import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import ExploreIdeas from "./components/ExploreIdeas/ExploreIdeas";
import Contact from "./components/Contact/Contact";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://edenvoice.azurewebsites.net/.auth/me"
        );
        const userData = response.data;
        if (userData && userData.length > 0) {
          const userName = userData[0].user_claims.find(
            (c: { typ: string }) => c.typ === "name"
          )?.val;
          const userEmail = userData[0].user_id;
          setEmail(userEmail);
          setUsername(userName);

          console.log("User name:", userName);
          console.log("User email:", userEmail);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        Welcome: {userName}, this is your email address: {email}{" "}
      </div>
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
