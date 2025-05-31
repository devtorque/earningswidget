import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ErrorComponent } from './ErrorComponent';

describe('ErrorComponent', () => {
  it('renders the error message', () => {
    render(<ErrorComponent error="Something went wrong" />);
    expect(screen.getByText(/Unable to load earnings data/i)).toBeInTheDocument();
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });

  it('renders the Try Again button', () => {
    render(<ErrorComponent error="Network error" />);
    expect(screen.getByRole('button', { name: /Try Again/i })).toBeInTheDocument();
  });
});
