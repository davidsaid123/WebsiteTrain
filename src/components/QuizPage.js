import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { quizData } from './quizData';
import './QuizPage.css';

const QuizPage = () => {
    const { id } = useParams();
    const questions = quizData[id];
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));

    const handleSubmit = () => {
        const score = questions.reduce((acc, question, index) => {
            if (typeof question.answer === 'string') {
                if (question.answer.toLowerCase() === answers[index].toLowerCase().trim()) {
                    return acc + 1;
                }
            } else if (Array.isArray(question.answer) && question.answer.includes(answers[index])) {
                return acc + 1;
            }
            return acc;
        }, 0);
        alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    };

    const handleAnswerChange = (value, index) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    return (
        <div>
            <h1>{`Quiz for ${id}`}</h1>
            {questions.map((question, index) => (
                <div key={index} className="question-container">
                    <p>{question.question}</p>
                    {Array.isArray(question.options) ? (
                        question.options.map((option) => (
                            <button key={option}
                                className={`option-button ${answers[index] === option ? 'selected' : ''}`}
                                onClick={() => handleAnswerChange(option, index)}>
                                {option}
                            </button>
                        ))
                    ) : (
                        <input
                            type="text"
                            value={answers[index]}
                            onChange={(e) => handleAnswerChange(e.target.value, index)}
                            className="text-input"
                        />
                    )}
                </div>
            ))}
            <button onClick={handleSubmit} className="submit-btn">Submit Quiz</button>
        </div>
    );
};

export default QuizPage;
