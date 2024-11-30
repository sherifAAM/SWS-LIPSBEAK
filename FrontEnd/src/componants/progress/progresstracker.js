import React, { useEffect, useState } from "react";
import api from "../../api";

const ProgressTracker = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("token");
      const response = await api.get("/progress", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProgress(response.data);
    };
    fetchProgress();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Your Progress</h2>
      <p>Level: {progress.currentLevel}</p>
      <p>Lessons Completed: {progress.lessonsCompleted}</p>
      <p>Tests Passed: {progress.testsPassed}</p>
      <p>Progress: {progress.progress}%</p>
    </div>
  );
};

export default ProgressTracker;
