import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home";
import LessonList from "./components/Lessons/LessonList";
import LessonDetail from "./components/Lessons/LessonDetail";
import ProgressTracker from "./components/Progress/ProgressTracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lessons" element={<LessonList />} />
        <Route path="/lessons/:level/:lessonNumber" element={<LessonDetail />} />
        <Route path="/progress" element={<ProgressTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
