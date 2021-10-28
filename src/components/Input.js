import React, { useState } from 'react';
import './Input.css';
import Output from './Output';

function Input() {

    const [start, setStart] = useState(0);
    const [finish, setFinish] = useState(0);

    //take 2 numbers from user ("start" & "finish")
    //print fib sequence until finish
    //loop to conosle log output using start as starting point and finish as ending point


    let getStart = (e) => setStart(e.target.value);
    let getFinish = (e) => setFinish(e.target.value);

    let data = {
        firstVal: start,
        secondVal: finish,
    }

    let hideInput = (e) => {
        //compile start & finish into data object
        let data = {
            beginning: start,
            end: finish,
        }

        //remove input box
        let thing = document.querySelector('.box');
        thing.remove();

        return data;
    }

    console.log(data);


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

                <Output data={data}  />
                
        </div>
        
    )
}

export default Input;
