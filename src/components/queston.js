import React from "react";

const QuestionComponent = (props) => {
  console.log("this is props", props);
  return (
    <div className='text-light' style={{ fontSize: "40px" }}>
      {props.question_1}
      
      <span className='ml-3 mr-3'>{props.operator}</span>
      {props.question_2}
      <span  className='ml-3 mr-3'>=</span>

    </div>
  );
};

export default QuestionComponent;
