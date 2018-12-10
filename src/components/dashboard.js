import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import { getQuestionData } from '../actions/questions';
import Card from './card';
import Quiz from './quiz';

import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(getQuestionData());
    }

    render() {
        const feedbackTag = (
            <p className="feedback"
                aria-live="polite"
            >
                {this.props.feedback}
            </p>
        );

        // console.log('Question: ', this.props.questions);
        // console.log('Correct Answer: ', this.props.correctAnswer);
        // console.log('User Answer: ', this.props.userAnswered);
        // console.log('Feedback: ', this.props.feedback);

        return (
            <div className="bg">
                <div className="bg-img" />
                <div className="fade" />

                <div className="dashboard">
  
                        <h2>Hello {this.props.username}!</h2>
                        <div className="dashboardFeedback">{this.props.userAnswered ? feedbackTag : ''}</div>

                        <div aria-live="polite" className="card-container">
                            <Card
                                correctAnswer={this.props.correctAnswer}
                                question={this.props.questions}
                                userAnswered={this.props.userAnswered}
                                aria-label="card"
                            />

                            <Quiz
                                userAnswered={this.props.userAnswered}
                                aria-label="quiz form"
                            />
                        </div>

                    
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username,
        questions: state.question.question.question,
        feedback: state.question.feedback,
        correctAnswer: state.question.answer,
        userAnswered: state.question.userAnswered
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
