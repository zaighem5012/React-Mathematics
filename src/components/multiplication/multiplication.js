import React, { useEffect, useState } from "react";
import QuestionComponent from '../queston'
import "bootstrap/dist/css/bootstrap.css";
import ValidationCountComponent from "../counte";
import Header from "../Nav/Navbar";
import './multiplication.css'
const Multiplication = () => {
  const initialFormState = {
    inp: '',
    right_answer: 0,
    correct_count: 0,
    incorrect_count: 0,
    question_1: 0,
    question_2: 0,
    answers: 0,
  }
  const [state, setState] = useState(initialFormState)
  const [correct_count, setCorrectcount] = useState(0)
  function handleChange(e) {
    // const value = e.target.value;
    // console.log("value", value);
    setState({...state,
      inp:e.target.value});
    console.log("state", state.right_answer, e.target.value);
  }
  function generate_question() {
    let question_1 = Math.floor(Math.random() * 10);
    let question_2 = Math.floor(Math.random() * 10);
    let answer = question_1 * question_2;
    let answers = answer;

    setState({
      ...state,
      question_1: question_1,
      question_2: question_2,
      answers: answers,
      inp:''
    });

  }
  useEffect(() => {
    generate_question();
  }, []);
  const handleClick=()=> {
    debugger;
    let userInp = parseInt(state.inp)
    console.log('state', state.inp)
    if (state.answers === userInp) {
      let correct = correct_count+1
      setCorrectcount(correct);
      
    }
    else {
      setState({
        ...state,
        incorrect_count: +1
      });
    }

    
    
    generate_question();
    console.log('state', state.correct_count)

  }
  return (
    <div>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col text-center text-light" style={{ fontSize: "30px" }}>
                MULTIPLICATION
              </div>
            </div>
            <br></br>
            <div className="row col-md-12 justify-content-center text-center mt-3">
              <div className="col-md-4 text-light">
                <ValidationCountComponent
                  name="Correct"
                  count={correct_count}
                />
              </div>
              <div className="col-md-4 text-light">
                <ValidationCountComponent
                  name="Incorrect"
                  count={state.incorrect_count}
                />
              </div>
            </div>
            <br></br>
            <div className="multi mt-3">
              <QuestionComponent
                question_1={state.question_1}
                operator={'*'}
                question_2={state.question_2}
              // answer={state.answers}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Multiplication;
