import React from "react";
import css from './statistics.module.css'

export class Statistics extends React.Component {
    // constructor() {
    //     super();

    //     this.state = { goodReview: 0 };
    //     this.state = { neutralReview: 0 };
    // };

    state = {
        goodReview: 0,
        neutralReview: 0,
        badReview: 0,
        total: 0,
        percentage: 0.
    }
    increaseGoodReview = () => {
        this.setState({ goodReview: this.state.goodReview + 1 });
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    }

    increaseNeutralReview = () => {
        this.setState({ neutralReview: this.state.neutralReview + 1 });
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    }

    increaseBadReview = () => {
        this.setState({ badReview: this.state.badReview + 1 });
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    }

    countTotalFeedback = () => {
        this.setState({ total: this.state.total + 1 });
    }

    countPositiveFeedbackPercentage = () => {
        this.setState({percentage: this.state.goodReview*100/(this.state.total)})
    }

    render() {
    return (
        <div className={css.section}>
            <h1 className={css.title}> Please, leave feedback</h1>
            <ul className={css.buttons}>
                <button className={css.button} onClick={this.increaseGoodReview}>Good</button>
                <button className={css.button} onClick={this.increaseNeutralReview}>Neutral</button>
                <button className={css.button} onClick={this.increaseBadReview}>Bad</button>
            </ul>
            <ul className={css.stats}>
                <span className={css.stat}>Good: { this.state.goodReview }</span>
                <span className={css.stat}>Neutral: { this.state.neutralReview }</span>
                <span className={css.stat}>Bad: { this.state.badReview }</span>
            </ul>
            <span>Total: {this.state.total}</span>
            <span>Positive feedback: { this.state.percentage }%</span>
        </div>
    )
}
}

// return (
//             <>
//                 <button onClick={this.showContactFormHandler}>Show Contact Form</button>
//                 {/* {showContact && (<Contact/>)} */}
//                 { showContact ? (
//                     <Contact userName={"Jake"} hideContactFormHandler={this.hideContactFormHandler}/>
//                 ) : '' }
//             </>
//         )