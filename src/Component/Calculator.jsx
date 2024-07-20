import { useState } from 'react';
import InputField from './InputField';
import ResultMessage from './ResultMessage';
import './Calculator.css';

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [condition, setCondition] = useState('');

  const validateInputs = () => {
    if (input1 === '' && input2 === '') {
      setCondition('error!');
      setResult('Inputs cannot be empty.');
      return false;
    }else if (input1 === '') {
      setCondition('error!');
      setResult('Num1 Cannot be Empty');
      return false;
    }else if (input2 === '') {
      setCondition('error!');
      setResult('Num2 Cannot be Empty');
      return false;
    } else if (isNaN(input1) || isNaN(input2)) {
      setCondition('error!');
      setResult('Inputs must be valid numbers.');
      return false;
    }
    setCondition('success');
    return true;
  };

  const performOperation = (operation) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let operationResult;

    switch (operation) {
      case 'add':
        operationResult = num1 + num2;
        break;
      case 'subtract':
        operationResult = num1 - num2;
        break;
      case 'multiply':
        operationResult = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          setCondition('error!');
          setResult('Division by zero is not allowed.');
          return;
        }
        operationResult = num1 / num2;
        break;
      default:
        operationResult = null;
    }

    setResult(operationResult);
  };

  const handleButtonClick = (operation) => {
    if (validateInputs()) {
      performOperation(operation);
    }
  };

  return (
    <div className='box'>
      <h1>React Calculator</h1>
      <InputField value={input1} onChange={(e) => setInput1(e.target.value)} placeholder="Num 1" />
      <InputField value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="Num 2" />
      <div>
        <button onClick={() => handleButtonClick('add')}>+</button>
        <button onClick={() => handleButtonClick('subtract')}>-</button>
        <button onClick={() => handleButtonClick('multiply')}>*</button>
        <button onClick={() => handleButtonClick('divide')}>/</button>
      </div>
      <ResultMessage condition={condition} />
      {result !== null && <p style={{ marginBottom: "20px" }}>Result: {result}</p>}
    </div>
  );
};

export default Calculator;
