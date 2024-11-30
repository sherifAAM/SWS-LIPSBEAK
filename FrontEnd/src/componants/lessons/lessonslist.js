import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

const LessonList = () => {
  const [lessons, setLessons] = useState([]);
  const [level, setLevel] = useState("Beginner");

  useEffect(() => {
    const fetchLessons = async () => {
      const response = await api.get(`/lessons/${level}`);
      setLessons(response.data);
    };
    fetchLessons();
  }, [level]);

  return (
    <div className="container mt-5">
      <h2>Lessons for {level}</h2>
      <select className="form-select mb-4" onChange={(e) => setLevel(e.target.value)}>
        <option value="Beginner">Beginner</option>
        <option value="Mediator">Mediator</option>
        <option value="Professional">Professional</option>
        <option value="Star">Star</option>
      </select>
      <ul className="list-group">
        {lessons.map((lesson) => (
          <li key={lesson.lessonNumber} className="list-group-item">
            <Link to={`/lessons/${level}/${lesson.lessonNumber}`}>Lesson {lesson.lessonNumber}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonList;
