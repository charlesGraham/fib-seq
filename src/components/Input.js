import React, { useState } from 'react';
import './Input.css';

function Input() {

    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);

    function handleInput(e) {
        setVal1(e.target.value); //set val1 to first input
    }

    //actual fib sequence 
    function fibSeq(number) {
        let num1 = 0;
        let num2 = 1;
        let fibSeq = [];

        for(let i = 0; i < number; i++) {
            console.log(num1);
            let nextNum;

            nextNum = num1 + num2;
            num1 = num2;
            num2 = nextNum;
        }
    }

    function calcSequence(someNum, otherNum) {
        //params are start and finish points
        //TODO: determine next number in sequence after someNum

    }

    return (
            <div>
                <div className="box">
                    <h3>Please enter two numbers in the fields below:</h3>
                    <input id="val1" type="text" onChange={handleInput} placeholder="Enter a number!" />
                    <input id="val2" type="text" onChange={handleInput} placeholder="Enter another number!" />
                    <button type="button">GO!</button>
                </div>
                
        </div>
        
    )
}

export default Input;
