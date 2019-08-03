import React, { Component } from 'react';
import { categories } from '../../testdata';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';
import Response from './Response';
import axios from 'axios';

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

  SelectQuestion(clue) {
    this.setState({currentQuestion: clue});
  }

  componentDidMount() {
    axios.get('http://jservice.io/api/categories?count=5')
      .then(results => {
        console.log(results.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
    
    // Getting data from an external API
    //
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
    // fetch("http://jservice.io/api/categories")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         items: result.items
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )


  render() {

    return (
      <div id={'app'}>
        <Gameboard 
          currentQuestion={this.state.currentQuestion} 
          answeredQuestions={this.state.answeredQuestions} 
          categories={this.state.results} 
          selectQuestion={this.SelectQuestion.bind(this)} />
        <Scoreboard score={this.state.score}/>
        <Response />
      </div>
    );

  }
}
