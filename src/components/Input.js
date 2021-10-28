import React, { useState } from 'react';
import './Input.css';

function Input() {



    //take 2 numbers from user ("start" & "finish")
    //print fib sequence until finish
    //loop to conosle log output using start as starting point and finish as ending point



    return (
            <div>
                <div className="box">
                    <h3>Please enter two numbers below:</h3>
                    <div className="calculations">
                        <input placeholder="Enter a number to start!" active />
                        <input  placeholder="Enter another number to finish!" />
                    </div>
                    <button type="button" >GO!</button>
                    
                </div>
                
        </div>
        
    )
}

export default Input;
