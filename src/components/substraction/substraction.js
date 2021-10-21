import React, { useEffect, useState } from "react";
import QuestionComponent from '../queston'
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Nav/Navbar";
const Substraction = () => {
  const [state, setState] = useState({
    inp: "",
    right_answer: 0,
    question_1: 0,
    question_2: 0,
    answers: 0,
  });
  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    console.log("sate", state);
  }
  function generate_question() {
    let question_1 = Math.floor(Math.random() * 100);
    let question_2 = Math.floor(Math.random() * 10);
    let answer = question_1 - question_2;
    let answers = answer;

    setState({
      ...state,
      question_1: question_1,
      question_2: question_2,
      answers: answers,
    });
  }
  useEffect(() => {
    generate_question();
  }, []);
  function handleClick() {
  
    generate_question();
  }
    return (
        <div>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col text-center text-light" style={{ fontSize: "30px" }}>
                SUBSTRACTION
              </div>
            </div>
            <br></br>
              <div className="multi mt-3">
                <QuestionComponent
                  question_1={state.question_1}
                  question_2={state.question_2}
                  operator= {'-'}
                  answer={state.answer}
                />
                <div>
                <input
                  type="number"
                  name="inp"
                  value={state.inp}
                  onChange={handleChange}
                />
                <button onClick={handleClick} className='ml-3 btn-check'>check_answer</button>
                </div>
                <span className='text-light'>{state.answers}</span>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Substraction
