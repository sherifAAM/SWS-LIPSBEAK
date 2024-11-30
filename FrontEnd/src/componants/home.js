import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to LipSpeak!</h1>
      <div className="mt-4">
        <Link to="/lessons" className="btn btn-success">View Lessons</Link>
        <Link to="/progress" className="btn btn-primary ms-3">Track Progress</Link>
      </div>
    </div>
  );
};

export default Home;
