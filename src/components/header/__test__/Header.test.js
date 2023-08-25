import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

const HeaderElement = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

it('should renders the header components in the document', () => {
  render(<HeaderElement />);
  const navigationElement = screen.getByRole('navigation');
  expect(navigationElement).toBeInTheDocument();
});

it('should be visible in the document', () => {
  render(<HeaderElement />);
  const navigationElement = screen.getByRole('navigation');
  expect(navigationElement).toBeVisible();
});

it('should match the Dom snapshot', () => {
  const headerTree = renderer.create(<HeaderElement />).toJSON();
  expect(headerTree).toMatchSnapshot();
});
