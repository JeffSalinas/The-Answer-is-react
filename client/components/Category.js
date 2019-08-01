import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue.js';

const Category = props => {
  return (
    <div className={'category'} data-testid="category">
      <h2>{props.category.title.toUpperCase()}</h2>
      {props.category.clues.map(clueObject => 
        <Clue 
          clues={clueObject}
          category={props.category}
          currentQuestion={props.currentQuestion} 
          selectQuestion={props.selectQuestion} 
          answeredQuestions={props.answeredQuestions}
        />
      )}

      {/* display category */}
      {/* display clues for each category */}
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;

// Clue.propTypes = {
//   selected: PropTypes.bool,
//   selectQuestion: PropTypes.func,
//   answered: PropTypes.bool,
//   clueObject: PropTypes.object
// };
