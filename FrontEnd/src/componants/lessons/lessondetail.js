import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

const LessonDetail = () => {
  const { level, lessonNumber } = useParams();
  const [lesson, setLesson] = useState({});

  useEffect(() => {
    const fetchLesson = async () => {
      const response = await api.get(`/lessons/${level}/${lessonNumber}`);
      setLesson(response.data);
    };
    fetchLesson();
  }, [level, lessonNumber]);

  return (
    <div className="container mt-5">
      <h2>{lesson.test ? "Test" : `Lesson ${lessonNumber}`}</h2>
      <p>{lesson.content}</p>
    </div>
  );
};

export default LessonDetail;
    