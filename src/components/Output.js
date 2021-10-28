import React from 'react';
import './Output.css';


let output = [];

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
      output.push(nextNum);
    }
} 

fibSeq(5);
console.log(output);


function Output() {

    return (
        <div className="box">
            <h3>The Fibonacci sequence numbers between the two you entered are:</h3>
            <p>{output.toString()}</p>

        </div>
)
}

export default Output;
