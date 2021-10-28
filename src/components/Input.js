import React, { useState } from 'react';
import './Input.css';

function Input() {

    const [start, setStart] = useState(0);
    const [finish, setFinish] = useState(0);

    //take 2 numbers from user ("start" & "finish")
    //print fib sequence until finish
    //loop to conosle log output using start as starting point and finish as ending point


    function handleSubmit(e) {
        setStart(e.input.value);
        console.log(start);
    }

    return (
            <div>
                <div className="box">
                    <h3>Please enter two numbers below:</h3>
                    <div className="calculations">
                        <input placeholder="Enter a number to start!" />
                        <input  placeholder="Enter another number to finish!" />
                    </div>
                    <button type="submit" onSubmit={handleSubmit}>GO!</button>
                    
                </div>
                
        </div>
        
    )
}

export default Input;
