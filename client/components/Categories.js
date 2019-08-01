import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category.js';

const Categories = props => {
  return (
    <div id={'categories'} data-testid="categoryList">
      {props.categories.map((element) => {   
          return (
            <Category 
              category={element}
              currentQuestion={props.currentQuestion} 
              selectQuestion={props.selectQuestion} 
              answeredQuestions={props.answeredQuestions}
            />
          )
      })}


      {/* display all the categories */}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;
