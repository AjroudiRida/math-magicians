import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('calculator tests', () => {
  it('should match the Dom snapshot', () => {
    const calculatorTree = renderer.create(<Calculator />).toJSON();
    expect(calculatorTree).toMatchSnapshot();
  });

  it('should render in the document', () => {
    render(<Calculator />);
    const calculator = screen.getByTestId('calc');
    expect(calculator).toBeInTheDocument();
  });

  it('changes the input value when a button is clicked', () => {
    render(<Calculator />);
    const btnElement = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '5');
    fireEvent.click(btnElement[0]);
    const inputElement = screen.getByTestId('input');
    expect(inputElement.textContent).toBe('5');
  });

  it("should reset the calculator to it's initial state when AC button is pressed", () => {
    render(<Calculator />);
    const btnElement1 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '3');
    const btnElement2 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === 'AC');
    fireEvent.click(btnElement1[0]);
    fireEvent.click(btnElement2[0]);
    const inputElement = screen.getByTestId('input');
    expect(inputElement.textContent).toBe('0');
  });

  it('should calculate the multiplication correctly', () => {
    render(<Calculator />);
    const btnElement1 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '2');
    const btnElement2 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '3');
    const btnElement3 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === 'x');
    const btnElement4 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '=');
    fireEvent.click(btnElement1[0]);
    fireEvent.click(btnElement3[0]);
    fireEvent.click(btnElement2[0]);
    fireEvent.click(btnElement4[0]);
    const inputElement = screen.getByTestId('input');
    expect(inputElement.textContent).toBe('6');
  });

  it('should calculate the addition correctly', () => {
    render(<Calculator />);
    const btnElement1 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '1');
    const btnElement2 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '3');
    const btnElement3 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '+');
    const btnElement4 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '=');
    fireEvent.click(btnElement1[0]);
    fireEvent.click(btnElement3[0]);
    fireEvent.click(btnElement2[0]);
    fireEvent.click(btnElement4[0]);
    const inputElement = screen.getByTestId('input');
    expect(inputElement.textContent).toBe('4');
  });

  it('should calculate the substraction correctly', () => {
    render(<Calculator />);
    const btnElement1 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '5');
    const btnElement2 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '3');
    const btnElement3 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '-');
    const btnElement4 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '=');
    fireEvent.click(btnElement1[0]);
    fireEvent.click(btnElement3[0]);
    fireEvent.click(btnElement2[0]);
    fireEvent.click(btnElement4[0]);
    const inputElement = screen.getByTestId('input');
    expect(inputElement.textContent).toBe('2');
  });

  it('should calculate the devision correctly', () => {
    render(<Calculator />);
    const btnElement1 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '6');
    const btnElement2 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '3');
    const btnElement3 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '÷');
    const btnElement4 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '=');
    fireEvent.click(btnElement1[0]);
    fireEvent.click(btnElement3[0]);
    fireEvent.click(btnElement2[0]);
    fireEvent.click(btnElement4[0]);
    const inputElement = screen.getByTestId('input');
    expect(inputElement.textContent).toBe('2');
  });

  it('should calculate the modulo correctly', () => {
    render(<Calculator />);
    const btnElement1 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '9');
    const btnElement2 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '6');
    const btnElement3 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '%');
    const btnElement4 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '=');
    fireEvent.click(btnElement1[0]);
    fireEvent.click(btnElement3[0]);
    fireEvent.click(btnElement2[0]);
    fireEvent.click(btnElement4[0]);
    const inputElement = screen.getByTestId('input');
    expect(inputElement.textContent).toBe('3');
  });

  it('should not be able to calculate the modulo of a number devided by 0', () => {
    render(<Calculator />);
    const btnElement1 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '9');
    const btnElement2 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '0');
    const btnElement3 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '%');
    const btnElement4 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '=');
    fireEvent.click(btnElement1[0]);
    fireEvent.click(btnElement3[0]);
    fireEvent.click(btnElement2[0]);
    fireEvent.click(btnElement4[0]);
    const inputElement = screen.getByTestId('input');
    expect(inputElement.textContent).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });

  it('should not be able to devide a number by 0', () => {
    render(<Calculator />);
    const btnElement1 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '7');
    const btnElement2 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '0');
    const btnElement3 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '÷');
    const btnElement4 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '=');
    fireEvent.click(btnElement1[0]);
    fireEvent.click(btnElement3[0]);
    fireEvent.click(btnElement2[0]);
    fireEvent.click(btnElement4[0]);
    const inputElement = screen.getByTestId('input');
    expect(inputElement.textContent).toBe("Can't divide by 0.");
  });

  it("should add a decimal point to a number if button that have the '.' is pressed", () => {
    render(<Calculator />);
    const btnElement1 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '7');
    const btnElement2 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '.');
    const btnElement3 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '2');
    fireEvent.click(btnElement1[0]);
    fireEvent.click(btnElement2[0]);
    fireEvent.click(btnElement3[0]);
    const inputElement = screen.getByTestId('input');
    expect(inputElement.textContent).toBe('7.2');
  });

  it('should add a negative sign to a number if the +/- button is pressed', () => {
    render(<Calculator />);
    const btnElement1 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '7');
    const btnElement2 = screen
      .getAllByTestId('button')
      .filter((button) => button.textContent === '+/-');
    fireEvent.click(btnElement1[0]);
    fireEvent.click(btnElement2[0]);
    const inputElement = screen.getByTestId('input');
    expect(inputElement.textContent).toBe('-7');
  });
});
