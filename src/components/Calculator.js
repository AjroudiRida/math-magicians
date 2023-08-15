import PropTypes from 'prop-types';

const CalculatorBtns = ({ content }) => (
  <div className="btn">
    <span>{content}</span>
  </div>
);

CalculatorBtns.propTypes = {
  content: PropTypes.string.isRequired,
};

const Calculator = () => (
  <div className="section-calculator">
    <div className="container">
      <div className="calculator">
        <div className="input" contentEditable>
          0
        </div>
        <div className="calculator-functions">
          <CalculatorBtns content="AC" />
          <CalculatorBtns content="+/-" />
          <CalculatorBtns content="%" />
          <CalculatorBtns content="÷" />
          <CalculatorBtns content="7" />
          <CalculatorBtns content="8" />
          <CalculatorBtns content="9" />
          <CalculatorBtns content="×" />
          <CalculatorBtns content="4" />
          <CalculatorBtns content="5" />
          <CalculatorBtns content="6" />
          <CalculatorBtns content="−" />
          <CalculatorBtns content="1" />
          <CalculatorBtns content="2" />
          <CalculatorBtns content="3" />
          <CalculatorBtns content="+" />
          <CalculatorBtns content="0" />
          <CalculatorBtns content="." />
          <CalculatorBtns content="=" />
        </div>
      </div>
    </div>
  </div>
);

export default Calculator;
