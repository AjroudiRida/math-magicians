import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Home from '../Home';
describe('testing home page', () => {
  describe('heading testing', () => {
    it('should renders a heading in the document', () => {
      render(<Home />);
      const headingElement = screen.getByRole('heading', {
        name: 'Welcome to our page',
      });
      expect(headingElement).toBeInTheDocument();
    });
    it('the heading should be visible', () => {
      render(<Home />);
      const headingElement = screen.getByRole('heading');
      expect(headingElement).toBeVisible();
    });
  });
  describe('paragraph testing', () => {
    it('should renders a paragraph in the document', () => {
      render(<Home />);
      const paragraphElement = screen.getByTestId('para');
      expect(paragraphElement).toBeInTheDocument();
    });
    it('the paragraph should be visible', () => {
      render(<Home />);
      const paragraphElement = screen.getByTestId('para');
      expect(paragraphElement).toBeVisible();
    });
  });
  it('should match the Dom snapshot', () => {
    const homeTree = renderer.create(<Home />).toJSON();
    expect(homeTree).toMatchSnapshot();
  });
});
