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
    const btnElement = screen.getAllByTestId('button').filter((button) => button.textContent === '5');
    fireEvent.click(btnElement[0]);
    const inputElement = screen.getByTestId('input', { name: '5' });
    expect(inputElement.textContent).toBe('5');
  });
});
