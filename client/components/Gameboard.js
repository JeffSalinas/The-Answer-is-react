import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories.js';
import Clue from './Clue.js';

const Gameboard = props => {
  
    if (props.currentQuestion.question) {
      return (
        <div data-testid="gameboard" id="question">
          <Clue 
          currentQuestion={props.currentQuestion}
          />
        </div>
      )
    } else {
      return (
        <div data-testid="gameboard" id='gameboard'>
          <Categories 
            categories={props.categories} 
            currentQuestion={props.currentQuestion} 
            selectQuestion={props.selectQuestion} 
            answeredQuestions={props.answeredQuestions}
          />
        </div>
      )
      }
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
