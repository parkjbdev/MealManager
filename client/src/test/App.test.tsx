import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowMealPage from '../App/ShowMealPage';

test('renders learn react link', () => {
  render(<ShowMealPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
