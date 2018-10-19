import React from 'react';

import './card.css';

export default function Card(props) {

  const userAnsweredTag = (
    <h4 className="description"
      aria-live="polite"
    >
      Answer: {props.correctAnswer}
    </h4>
  );

  return (
    <div className="card">
      <span className="question">
        {props.question}
      </span>
      {props.userAnswered ? userAnsweredTag : ''}
    </div>
  );
}