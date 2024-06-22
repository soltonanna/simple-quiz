import React, { useState, useEffect } from 'react';

const QuestionTimer = ({ onTimeout, timeout, mode }) => {
    
    const [remainingTime, setRemainingTime] = useState(timeout); 

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        }
    }, [onTimeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime -100);
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, []);

   

    return (
        <progress 
            id="question-time" 
            value={remainingTime}
            max={timeout} 
            className={mode}
        />
    );
}

export default QuestionTimer;