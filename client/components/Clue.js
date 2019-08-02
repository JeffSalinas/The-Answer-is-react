import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  console.log(props.answeredQuestions)
  console.log(props.clues) //id?

  if(props.currentQuestion.question) {
    return (
      <div>{props.currentQuestion.question}</div>
    )
  } else if (props.answeredQuestions.indexOf(props.clues) >= 0) {
    <div className="clueValue"></div>
  } else {
    return (
      <div className="clueValue" onClick={() => props.selectQuestion(props.clues)}>
          ${props.clues.value}
      </div>
    )
  }

};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
