import React, { useState, useCallback } from 'react';

import QUESTIONS from '../questions';
import Question from './Question';
import Summary from './Summary';

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    if (quizIsComplete) {
        return (
            <Summary userAnswers={userAnswers} />
        );
    }

    return (
        <div id="quiz">
            <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
        
    );
}

export default Quiz;