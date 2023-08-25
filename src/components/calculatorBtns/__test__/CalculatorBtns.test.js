import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CalculatorBtns from '../CalculatorBtns';

const dummyFunction = () => {};

describe('calculator btns tests', () => {
  it('should render in the DOM', () => {
    render(<CalculatorBtns content="+" handleClick={dummyFunction} />);
    const btnElement = screen.getByText('+');
    expect(btnElement).toBeInTheDocument();
  });

  it('should be visible in the DOM', () => {
    render(<CalculatorBtns content="+" handleClick={dummyFunction} />);
    const btnElement = screen.getByText('+');
    expect(btnElement).toBeVisible();
  });

  it('should display text passed as prop', () => {
    render(<CalculatorBtns content="2" handleClick={dummyFunction} />);
    const btnElement = screen.getByText(/2/i);
    expect(btnElement).toHaveTextContent('2');
  });

  it('should match the Dom snapshot', () => {
    const btnsTree = renderer
      .create(<CalculatorBtns content="+" handleClick={dummyFunction} />)
      .toJSON();
    expect(btnsTree).toMatchSnapshot();
  });
});
