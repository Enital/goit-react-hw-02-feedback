import React from "react";

// import css from './feedbackOptions.css';

function FeedbackOptions ({ onLeaveFeedback }) {
    return (
    <ul>
        <button onClick={onLeaveFeedback}>Good</button>
        <button onClick={onLeaveFeedback}>Neutral</button>
        <button onClick={onLeaveFeedback}>Bad</button>
    </ul>
    )
};

export default FeedbackOptions;