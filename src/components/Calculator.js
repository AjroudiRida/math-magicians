import { useState, useEffect } from 'react';
import calculate from '../logic/calculate';
import CalculatorBtns from './CalculatorBtns';
import Quotes from './Quotes';
import './calculator.css';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [inputValue, setInputValue] = useState('0');

  const getBtnValue = (btnText) => {
    const objState = calculate(obj, btnText);
    setObj(objState);
  };

  useEffect(() => {
    if (obj.next) {
      setInputValue(obj.next);
    }

    if (obj.total && obj.next) {
      setInputValue(obj.next);
    }

    if (obj.total && !obj.next) {
      setInputValue(obj.total);
    }

    if (!obj.next && !obj.total) {
      setInputValue('0');
    }
  }, [obj]);

  return (
    <div className="main-section container">
      <div className="section-quotes">
        <Quotes />
      </div>
      <div className="section-calculator">
        <div className="calculator">
          <div className="input" contentEditable={false}>
            {inputValue}
          </div>
          <div className="calculator-functions">
            <CalculatorBtns
              content="AC"
              handleClick={() => {
                getBtnValue('AC');
              }}
            />
            <CalculatorBtns
              content="+/-"
              handleClick={() => {
                getBtnValue('+/-');
              }}
            />
            <CalculatorBtns
              content="%"
              handleClick={() => {
                getBtnValue('%');
              }}
            />
            <CalculatorBtns
              content="÷"
              handleClick={() => {
                getBtnValue('÷');
              }}
            />
            <CalculatorBtns
              content="7"
              handleClick={() => {
                getBtnValue('7');
              }}
            />
            <CalculatorBtns
              content="8"
              handleClick={() => {
                getBtnValue('8');
              }}
            />
            <CalculatorBtns
              content="9"
              handleClick={() => {
                getBtnValue('9');
              }}
            />
            <CalculatorBtns
              content="x"
              handleClick={() => {
                getBtnValue('x');
              }}
            />
            <CalculatorBtns
              content="4"
              handleClick={() => {
                getBtnValue('4');
              }}
            />
            <CalculatorBtns
              content="5"
              handleClick={() => {
                getBtnValue('5');
              }}
            />
            <CalculatorBtns
              content="6"
              handleClick={() => {
                getBtnValue('6');
              }}
            />
            <CalculatorBtns
              content="-"
              handleClick={() => {
                getBtnValue('-');
              }}
            />
            <CalculatorBtns
              content="1"
              handleClick={() => {
                getBtnValue('1');
              }}
            />
            <CalculatorBtns
              content="2"
              handleClick={() => {
                getBtnValue('2');
              }}
            />
            <CalculatorBtns
              content="3"
              handleClick={() => {
                getBtnValue('3');
              }}
            />
            <CalculatorBtns
              content="+"
              handleClick={() => {
                getBtnValue('+');
              }}
            />
            <CalculatorBtns
              content="0"
              handleClick={() => {
                getBtnValue('0');
              }}
            />
            <CalculatorBtns
              content="."
              handleClick={() => {
                getBtnValue('.');
              }}
            />
            <CalculatorBtns
              content="="
              handleClick={() => {
                getBtnValue('=');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
