import { render, screen } from '@testing-library/react';
import { CalendarHeader } from './CalendarHeader';
import { describe, it, expect } from 'vitest';

describe('CalendarHeader', () => {
  it('renders the main title and subtitle', () => {
    render(<CalendarHeader />);
    expect(screen.getByText(/Most Anticipated Earnings Releases/i)).toBeInTheDocument();
    expect(screen.getByText(/for the week beginning/i)).toBeInTheDocument();
  });

  it('renders the dynamic date', () => {
    render(<CalendarHeader />);
    const dateRegex = /[A-Za-z]+ \d{1,2}, \d{4}/;
    expect(screen.getByText(dateRegex)).toBeInTheDocument();
  });

});
