import React, { useState } from 'react'
import Data from '../data.json'
const Random = () => {

    const [userInput, setuserInput] = useState(null)
    const onChangeHnadler = (e) => {
        let checkAnswer = e.target.valueAsNumber
        setuserInput(checkAnswer)

    }
    const clickHandler = () => {
        debugger;
        let quizQuestion = Data.Qdata.map((item) => item.question1+item.question2)

        console.log('check ', quizQuestion)
        if (quizQuestion === userInput ) {
            alert('your answer is right')
        } else {
            alert('your answer is Wrong')
        }
    }
    return (
        <div className='random'>
            <div>
                {Data.Qdata.map((user, index) => (
                    
                        <div key={index}>
                            <span style={{ color: 'white' }}>{user.nbr}</span>

                            <span style={{ color: 'white' }}>{user.question1}</span>
                            <span style={{ color: 'white' }}>+</span>

                            <span style={{ color: 'white' }}>{user.question2}</span>
                            <span style={{ color: 'white' }}>=</span>
                            <input  type='number' value={userInput} onChange={onChangeHnadler} />
                        </div>
                        
                            

                ))}
                <button onClick={clickHandler} style={{backgroundColor: 'red'}}>clcik</button>

            </div>


        </div>



    )
}

export default Random
