import React from 'react';
import './Output.css';


let output = [];


function Output({ data }) {

    //actual fib sequence 
    function fibSeq(number) {
        let num1 = 0;
        let num2 = 1;
        
        for(let i = 0; i <= number; i++) {
            console.log(num1);
            let nextNum;
    
            nextNum = num1 + num2;
            num1 = num2;
            num2 = nextNum;

            //test nextNum
            if (nextNum === data.secondVal) {
                output.push(nextNum);
                return output;
            } else {
                output.push(nextNum);
            }
        }
    } 

    console.log(data);
    fibSeq(10);
    console.log(output);

    return (
        <div className="box">
            <h3>The Fibonacci sequence numbers between the two you entered are:</h3>
            <p></p>

        </div>
)
}

export default Output;
