import React, { useState } from 'react';
import './Input.css';
import Output from './Output';

function Input() {

    const [start, setStart] = useState(null);
    const [finish, setFinish] = useState(null);
    const [ready, setReady] = useState(false);

    //print fib sequence until finish
    //loop to conosle log output using start as starting point and finish as ending point

    let getStart = (e) => setStart(e.target.value);
    let getFinish = (e) => setFinish(e.target.value);

    let hideInputBox = (e) => {
        setReady(true);

        //remove input box
        let boxDisplay = document.querySelector('.box');
        boxDisplay.style.display = 'none';
    }


    return (
            <div>
                <div className="box">
                    <h3>Please enter two numbers below:</h3>
                    <form>

                    </form>
                    <div className="calculations">
                        <input type="text" onChange={getStart} placeholder="Enter a number to start!" />
                        <input type="text" onChange={getFinish}  placeholder="Enter another number to finish!" />
                    </div>
                    <button type="submit" onClick={hideInputBox}>GO!</button>
                </div>
                {ready ?
                    <Output beg={start} end={finish} /> :
                    null
                }
                
        </div>
        
    )
}

export default Input;
