import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Welcome from "./auth/welcome";
import Login from "./auth/login";

import { Toaster } from "react-hot-toast";
import Register from "./auth/register";
import ComplainList from "./complain/complain-list";
import Complain from "./complain/complain";
import Feedback from "./complain/feedback";
function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ComplainList />} />
        <Route path="/complain" element={<Complain />} />
        {/* feedback */}
        <Route path="/feedback" element={<Feedback />} />

      </Routes>
    </>
  );
}

export default App;
