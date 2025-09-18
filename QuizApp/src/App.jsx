import React, { useState } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import Sidebar from "./components/Sidebar";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who developed React?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: "Facebook",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "22"],
    answer: "4",
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return <Result score={score} total={questions.length} />;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <QuestionCard
            question={questions[current]}
            index={current}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        </main>
      </div>
    </div>
  );
}
