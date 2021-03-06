import React from 'react';
import { connect } from 'react-redux';
import { validateUserInput, getQuestionData } from '../actions/questions';
import './quiz.css';

export class Quiz extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    // grabs the value of the input element after you submit the form
    const userInput = document.getElementById('answer').value;

    // vanilla JS way of resetting value of the input
    document.getElementById('answer').value = '';

    if(userInput !== '') {
      this.props.dispatch(validateUserInput(userInput));
    }
  }

  nextButton(event) {
    event.preventDefault();
    this.props.dispatch(getQuestionData());
  }

  render() {
    const form = this.props.userAnswered ? (
      <button
        className="btn"
        onClick={event => this.nextButton(event)}
      >
        Next
      </button>
    ) : (
      <React.Fragment>
        <label htmlFor="answer" className="answer-label">Your Answer:</label><br />
        <input id="answer" type="text" name="answer" /><br/>
        <button
          className="btn"
          onClick={event => this.onSubmit(event)}
        >
          Submit
        </button>
      </React.Fragment>
    );

    return (
      <div>
        <form className="formInput">
          {form}
        </form>
      </div>
    );
  }
}

export default connect()(Quiz);