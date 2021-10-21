import React, {useState} from 'react'
import './instruction.css'
const Instruction = () => {
    const [instructions, setinstructions] = useState(true);
    const setinstruction = () => {
        setinstructions(false)
    }
    const setinstructionsof = () => {
        setinstructions(true)
    }
    return (
        <div>
            <div className='instruction '>
            <div className='text-center' >
                <button  onClick={setinstruction} className={instructions ? 'show' : "hide"}>+ Click here for Instructions</button>
                <button onClick={setinstructionsof} className={instructions ? 'hide' : "show"}>- Click here to hide Instructions</button>
                <div className={instructions ? 'hide' : "show"} style={{ fontSize: '17px', textAlign: 'center' }}>
                    <span className='text-light'>instructions will be upload soon</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Instruction;
