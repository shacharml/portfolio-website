import * as React from 'react';  // Ensure React is fully imported
import { render, screen } from '@testing-library/react';
import App from '../src/App';

// Ensures that all sections are rendered properly.

test('renders the main sections of the portfolio', () => {
  render(<App />);

  // Check if the Navbar is rendered
  expect(screen.getByRole('navigation')).toBeInTheDocument();

  // Check if the sections are rendered
  expect(screen.getByRole('heading', { level: 2, name: /projects/i })).toBeInTheDocument();
  //expect(screen.getAllByText(/projects/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { level: 2, name: /skills/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /experience/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /education/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2, name: /military service/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /contact/i })).toBeInTheDocument();

});

