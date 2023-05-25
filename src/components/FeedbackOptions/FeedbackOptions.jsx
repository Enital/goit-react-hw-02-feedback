import React from "react";

import css from './FeedbackOptions.css';

function FeedbackOptions ({ onLeaveFeedback }) {
    return (
    <ul className={css.buttons}>
        <button className={css.button} type="button" onClick={onLeaveFeedback}>Good</button>
        <button className={css.button} type="button" onClick={onLeaveFeedback}>Neutral</button>
        <button className={css.button} type="button" onClick={onLeaveFeedback}>Bad</button>
    </ul>
    )
}

export default FeedbackOptions;