
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import './components/Input.css';
import Output from './components/Output';


//actual fib sequence 
function fibSeq(number) {
  let num1 = 0;
  let num2 = 1;

  for(let i = 0; i < number; i++) {
      console.log(num1);
      let nextNum;

      nextNum = num1 + num2;
      num1 = num2;
      num2 = nextNum;
    }
} 


function App() {



  return (
    <div className="App">
      <Header />
      <Input />
      {/*!input ? <Input /> : <Output /> */}
    </div>
  );
}

export default App;
