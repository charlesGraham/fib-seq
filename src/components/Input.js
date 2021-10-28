import React, { useState } from 'react';
import './Input.css';

function Input() {

    const [start, setStart] = useState(0);
    const [finish, setFinish] = useState(0);

    //take 2 numbers from user ("start" & "finish")
    //print fib sequence until finish
    //loop to conosle log output using start as starting point and finish as ending point


    let getStart = (e) => setStart(e.target.value);
    let getFinish = (e) => setFinish(e.target.value);

    let hideInput = (e) => {
        let thing = document.querySelector('.box');
        thing.remove();
    }

    return (
            <div>
                <div className="box">
                    <h3>Please enter two numbers below:</h3>
                    <div className="calculations">
                        <input type="text" onChange={getStart} placeholder="Enter a number to start!" />
                        <input type="text" onChange={getFinish}  placeholder="Enter another number to finish!" />
                    </div>
                    <button type="submit" onClick={hideInput}>GO!</button>
                    
                </div>
                
        </div>
        
    )
}

export default Input;
