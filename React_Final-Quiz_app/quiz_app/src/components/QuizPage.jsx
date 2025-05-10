import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const API_KEY = "I6oAyudkAPjQxDsaSAsCa1wddCH17SXU3DHk0iS4";

export const Quizpage = () => {
  const { category } = useParams();
  const [correctAns, setCorrectAns] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [questions, setQuesttions] = useState([]);
  const [ans, setAns] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);

  function fetchQuestions() {
    fetch(
      `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=${category}&limit=10`
    )
      .then((res) => res.json())
      .then((res) => setQuesttions(res));
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  function getQuestions(question) {
    const correct_questions = [];

    if (!("answers" in question)) return [];

    console.log(Object.entries(question.answers));

    for (let [key, value] of Object.entries(question.answers)) {
      if (!value) continue;

      correct_questions.push({
        quest: value,
        isCorrect: question.correct_answers[`${key}_correct`] === "true",
      });
    }

    return correct_questions;
  }

  const isDone = questionIdx >= 10;
  const question = questions?.[questionIdx] ?? {};
  const answersWithCorrectOptions = getQuestions(question);
  const answerList = ["A", "B", "C", "D", "E", "F"];
  const isAnswered = ans !== null;

  const handleSubmit = () => {
    if (ans) {
      setCorrectAns((prev) => prev + 1);
    }

    setAns(null);
    setSelectedIdx(null);
    setQuestionIdx((prev) => prev + 1);
  };

  const onRestart = () => {
    fetchQuestions();
    setQuestionIdx(0);
    setAns(null);
    setSelectedIdx(null);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span className="icon">{category.toUpperCase()}</span>
        {!isDone && (
          <span className="title">Question {questionIdx + 1} of 10</span>
        )}
      </div>
      <p className="quiz-question">{question.question}</p>
      {isDone ? (
        <div className="result">
          <h2>
            Quiz completed
            <br />
            <span className="score_text">You scored...</span>
          </h2>
          <span className="result_text">
            <span className="result_main_text">{correctAns}</span> <br />
            out of 10
          </span>
          <button onClick={onRestart}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="options">
            {answersWithCorrectOptions.map(({ isCorrect, quest }, idx) => {
              const isSelected = idx === selectedIdx;

              return (
                <div
                  className="option"
                  style={{
                    border: isSelected ? `2px solid #7c3aed` : undefined,
                  }}
                  onClick={() => {
                    setAns(isCorrect);
                    setSelectedIdx(idx);
                  }}
                >
                  {answerList[idx]}. <strong>{quest}</strong>
                </div>
              );
            })}
          </div>
        </>
      )}

      {!isDone && (
        <button
          onClick={handleSubmit}
          className="submit-button"
          disabled={!isAnswered}
        >
          Submit Answer
        </button>
      )}
    </div>
  );
};