import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Quotes from '../Quotes';
const quotes = [
  { quote: 'quote 1', author: 'author 1' },
  { quote: 'quote 2', author: 'author 2' },
];
beforeEach(() => {
  jest.spyOn(window, 'fetch');
});
it('should renders an h1 heading in the document', () => {
  render(<Quotes />);
  const titleElement = screen.getByRole('heading', {
    name: 'get inspired by this success quotes',
  });
  expect(titleElement).toBeInTheDocument();
});
it('should render 1 quotes', async () => {
  const mockResponse = { json: async () => quotes };
  window.fetch.mockResolvedValue(mockResponse);
  render(<Quotes />);
  await waitFor(() => {
    const quoteElements = screen.getAllByTestId('qte');
    expect(quoteElements).toHaveLength(2);
  });
});
it('should match the Dom snapshot', () => {
  const quoteTree = renderer.create(<Quotes />).toJSON();
  expect(quoteTree).toMatchSnapshot();
});
