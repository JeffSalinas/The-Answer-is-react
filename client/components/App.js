import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard.js';
import Scoreboard from './Scoreboard.js';
import Response from './Response.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }

  selectQuestion (clue) {
    this.setState({currentQuestion: clue}, this.render)
  }

  changeScore (newScore) {
    this.setState({score: newScore})
  }

  recordAnswer (question) {
    this.setState({answeredQuestions: this.state.answeredQuestions.concat(question)})
  }

  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }
  render() {
    return (
      <div id={'app'}>
        <Gameboard 
          categories={this.state.results} 
          currentQuestion={this.state.currentQuestion} 
          selectQuestion={this.selectQuestion.bind(this)} 
          answeredQuestions={this.state.answeredQuestions}
        />
        < Scoreboard 
          score={this.state.score}
        />
        <Response 
          currentScore={this.state.score}
          changeScore={this.changeScore.bind(this)}
          currentQuestion={this.state.currentQuestion}
          selectQuestion={this.selectQuestion.bind(this)} 
          recordAnswer={this.recordAnswer.bind(this)}
        />
      </div>
    );
  }
}

