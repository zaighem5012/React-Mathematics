import React, { useState } from 'react'
import Header from '../Nav/Navbar'
import Random from '../Multiplyquestion'
import Quiz from '../Quiz/Quiz'
import './addition.css'
const Addition = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [state, setstate] = useState({
        num1: 50,
        num2: 25,
    })
    
    function handlechange(e) {
        const value = e.target.value;
        setstate({
            ...state,
            [e.target.name]: value
        });
    }
   
    const sum = () => {
        var data1 = parseInt(document.getElementById("in1").value);
        var data2 = parseInt(document.getElementById("in2").value);
        var total = data1 + data2;

        if (isNaN(total)){
            if(isNaN(data1) && Number.isInteger(data2)){console.log("First Empty"); total = data2;}
            if(isNaN(data2) && Number.isInteger(data1)){console.log("Second Empty"); total = data1;}
            if(isNaN(data1) && isNaN(data2)){console.log("Both Empty"); total = alert('please add some numbers');}
            console.log(" ");
        }
        document.getElementById("in3").innerHTML = total;
    };

    return (

        <div>
            <Header  />
            <section className='text-center mt-5'>
                <span className='text-center text-light'>Please add a different number to input field</span>
            <form onSubmit={handleSubmit}>
                <input name='num1' id='in1' type='number' value={state.num1} onChange={handlechange} /><br/>
                <input name='num2' id='in2' type='number' value={state.num2} onChange={handlechange} /><br/>
                <input className="button1 mt-3" type="submit" onClick={sum} value="Sum Numbers"></input>
                <div className='answer text-light'>
                <label>Your answer is:</label>
                <div id="in3" className="answ1 text-light"></div>
            </div>
            </form>
            </section>
            <Random/>
        </div>
    )
}

export default Addition
