import React from "react";
import "./App.css";
import ValidationCountComponent from "./components/counte";
import QuestionComponent from "../src/components/queston";
class App extends React.Component {
  state = {
    inp: '',
    right_answer: 0,
    correct_count: 0,
    incorrect_count: 0,
    question_1: 0,
    question_2: 0,
    answers: 0,
  };
  handleChange(event) {
    this.setState({inp: event.target.value});
  }
  generate_question() {
    let question_1 = Math.floor(Math.random() * 10);
    let question_2 = Math.floor(Math.random() * 10);
    let answer = question_1 * question_2;
    let answers = answer;

    this.setState({
      question_1: question_1,
      question_2: question_2,
      answers: answers,
    });
  }
  componentDidMount() {
    this.generate_question();
  }

  handleClick (){
    if(this.state.question_1 * this.state.question_2===this.state.inp){
      this.setState({
        correct_count: this.state.correct_count + 1
      });   
    }else {
      this.setState({
        incorrect_count: this.state.incorrect_count + 1
      });
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={home}>
          <div className="col">
            <div className="row text-center">
              <div className="col" style={{ fontSize: "30px" }}>
                Quizzy
              </div>
            </div>
            <br></br>
            <div className="row mx-auto">
              <div className="col">
                <ValidationCountComponent
                  name="Correct"
                  count={this.state.correct_count}
                />
              </div>
              <div className="col">
                <ValidationCountComponent
                  name="Incorrect"
                  count={this.state.incorrect_count}
                />
              </div>
            </div>
            <br></br>
            <div className="row text-center">
              <div className="col ">
                <QuestionComponent
                  question_1={this.state.question_1}
                  question_2={this.state.question_2}
                  answer={this.state.answer}
                  
                />
                <input type='numbers' value={this.state.inp} onChange={this.handleChange}/>
                <button onClick={this.handleClick.bind(this)}>check_answer</button>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

const home = {
  padding: "20% 20% 20% 20%"
};

export default App;
