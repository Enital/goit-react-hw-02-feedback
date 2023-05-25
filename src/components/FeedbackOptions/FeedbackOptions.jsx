import React from "react";

import css from './feedbackOptions.css';

function FeedbackOptions ({ onLeaveFeedback }) {
    return (
    <ul className={css.buttons}>
        <button className={css.button} onClick={onLeaveFeedback}>Good</button>
        <button className={css.button} onClick={onLeaveFeedback}>Neutral</button>
        <button className={css.button} onClick={onLeaveFeedback}>Bad</button>
    </ul>
    )
};

export default FeedbackOptions;