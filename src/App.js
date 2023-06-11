import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [answer, setAnswer] = useState(0);

  var intFirstNum;
  var intSecondNum;
  var result;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleAddClick = () => {
    intFirstNum = parseInt(firstNum);
    intSecondNum = parseInt(secondNum);

    result = intFirstNum + intSecondNum;
    setAnswer(result);
  };

  const handleSubClick = () => {
    intFirstNum = parseInt(firstNum);
    intSecondNum = parseInt(secondNum);

    result = intFirstNum - intSecondNum;
    setAnswer(result);
  };

  const handleMultClick = () => {
    intFirstNum = parseInt(firstNum);
    intSecondNum = parseInt(secondNum);

    result = intFirstNum * intSecondNum;
    setAnswer(result);
  };

  const handleDivClick = () => {
    intFirstNum = parseInt(firstNum);
    intSecondNum = parseInt(secondNum);

    result = intFirstNum / intSecondNum;
    setAnswer(result);
  };

  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            value={firstNum}
            onChange={(event) => setFirstNum(event.target.value)}
          />

          <input
            type="text"
            value={secondNum}
            onChange={(event) => setSecondNum(event.target.value)}
          />

          <div className='buttons'>
          <button type='button' onClick={handleAddClick}>Add</button>
          <button type='button' onClick={handleSubClick}>Subtract</button>
          <button type='button' onClick={handleMultClick}>Multiply</button>
          <button type='button' onClick={handleDivClick}>Divide</button>
          </div>
        </form>

        <h2>Answer is: {answer}</h2>
      </header>
    </div>
  );
}

export default App;