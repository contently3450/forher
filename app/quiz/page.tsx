"use client";

import { useState } from 'react';
import questions from '../../data/questions.json';
import styles from '../../styles/Quiz.module.css';
import { useRouter } from 'next/navigation'; // Ensure you're importing from 'next/navigation'

export default function Quiz() {
    const router = useRouter(); // Initialize the router
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState(false); // Track if the answer is correct
    const [shake, setShake] = useState(false); // Track shake effect

    const handleAnswer = (selectedAnswer: number) => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
            setFeedback('Correct!');
            setIsCorrect(true);
            setShake(false); // Reset shake effect
        } else {
            setFeedback('Wrong answer!');
            setIsCorrect(false);
            setShake(true); // Trigger shake effect

            // Reset shake state after animation duration
            setTimeout(() => {
                setShake(false); // Reset shake effect after 0.3 seconds
            }, 300); // Match this duration with your CSS animation duration
        }
        setShowFeedback(true);
    };

    const nextQuestion = () => {
        setShowFeedback(false);
        setShake(false); // Reset shake effect for the next question
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Navigate to the success page instead of alerting
            router.push('/success'); 
        }
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.card} ${shake ? styles.shake : ''}`}>
                <h2>{questions[currentQuestion].question}</h2>
                <div className={styles['options-container']}>
                    {questions[currentQuestion].options.map((option, index) => (
                        <button key={index} className={styles.button} onClick={() => handleAnswer(index)}>
                            {option}
                        </button>
                    ))}
                </div>
                {showFeedback && <p className={styles.feedback}>{feedback}</p>}
                {showFeedback && isCorrect && (
                    <button className={styles.button} onClick={nextQuestion}>Next Question</button>
                )}
            </div>
        </div>
    );
}