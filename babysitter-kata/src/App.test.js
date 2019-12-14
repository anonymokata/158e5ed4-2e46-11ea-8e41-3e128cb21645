import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders on load', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/babysitter kata/i);
  expect(titleElement).toBeInTheDocument();
});
