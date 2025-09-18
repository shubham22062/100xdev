import React from "react";

export default function QuestionCard({ question, index, total, onAnswer }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
      <h2 className="text-xl font-bold mb-4">
        Question {index + 1} of {total}
      </h2>
      <p className="mb-6 text-lg font-medium">{question.question}</p>
      <div className="grid gap-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswer(option)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
