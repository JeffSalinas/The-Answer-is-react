import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Response extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userResponse: ''
    }
    this.recordResponse = this.recordResponse.bind(this);
  }
  recordResponse(newText) {
    this.setState({ userResponse: newText });
  }
  submitResponse(event, value) {
    if (!this.props.currentQuestion.answer) {
      console.log('What is 42?');
    } else if (this.props.currentQuestion.answer.toLowerCase() === value.toLowerCase()) {
      this.recordResponse(value);
      this.props.selectQuestion({});
      this.props.changeScore(this.props.currentScore + this.props.currentQuestion.value);
      this.props.recordAnswer(this.props.currentQuestion.id);
      console.log('yayy!!')
    } else {
      this.props.changeScore(this.props.currentScore - this.props.currentQuestion.value);
      this.props.selectQuestion({});
      this.recordResponse(value);
      this.props.recordAnswer(this.props.currentQuestion.id);
      console.log('Try harder :)');

    }
    // this function should fire when the user fills the response and hits 'enter'
      // Is the user response correct? 
      // yes/no? What should happen?
  }
  render(){
    var handleEnter = (e) => {
      if (e.key === 'Enter') {
        this.submitResponse(null, document.getElementById('here').value)
        document.getElementById('here').value = '';
      }
    }
    
    return (
      <div id={'response'} data-testid="response">
        <input 
          id='here'
          type='text'
          placeholder='Answers go here!'
          onKeyDown={(e) => handleEnter(e)}
          
             // handle data change
          // handle when 'enter' is hit
        >
        </input>
      </div>
    )
  }
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}