
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';

function App() {

  return (
    <div className="App">
      <Header />
      <Input />
      {/*!input ? <Input /> : <Output /> */}
      <Output />
    </div>
  );
}

export default App;
