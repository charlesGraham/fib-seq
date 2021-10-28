import React from 'react';
import './Output.css';


let output = [];
let outputDisplay = [];

function Output({ beg, end}) {

    //actual fib sequence 
    function fibSeq(number) {
        let num1 = 0;
        let num2 = 1;
        let nextNum;
        
        for(let i = 0; i < number; i++) {

            nextNum = num1 + num2;
            num1 = num2;
            num2 = nextNum;
            output.push(nextNum);
        }

        return output;
    } 

    fibSeq(50);

    console.log(output);

    output.forEach((item) => {
        if (item >= beg && item <= end) {
            outputDisplay.push(item);
        }
    })

    return (
        <div className="box">
            <h3>The Fibonacci sequence numbers between the two you entered are:</h3>
            <p>{outputDisplay.toString()}</p>
        </div>
    )
}

export default Output;
