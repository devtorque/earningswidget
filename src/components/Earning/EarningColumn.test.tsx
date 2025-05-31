import { render, screen } from '@testing-library/react';
import EarningColumn from './EarningColumn';
import { type Earning } from '../../types/earningTypes';
import { describe, it, expect } from 'vitest';

describe('EarningColumn', () => {
  const mockEarning: Earning = {
    currency: 'USD',
    date: '2024-06-10',
    date_confirmed: 1,
    eps: '1.23',
    eps_est: '1.20',
    eps_prior: '1.10',
    eps_surprise: '0.03',
    eps_surprise_percent: '2.5',
    eps_type: 'actual',
    exchange: 'NASDAQ',
    id: '1',
    importance: 1,
    name: 'Test Corp',
    notes: '',
    period: 'Q2',
    period_year: 2024,
    revenue: '1000000',
    revenue_est: '950000',
    revenue_prior: '900000',
    revenue_surprise: '50000',
    revenue_surprise_percent: '5.3',
    revenue_type: 'actual',
    ticker: 'TEST',
    time: '08:00',
    updated: 1234567890,
  };

  it('renders the day and session headers', () => {
    render(
      <EarningColumn
        day="Monday"
        earnings={{ 'Before Open': [], 'After Close': [] }}
        logos={{}}
        loading={false}
      />
    );
    expect(screen.getByText('Monday')).toBeInTheDocument();
    expect(screen.getByText('Before Open')).toBeInTheDocument();
    expect(screen.getByText('After Close')).toBeInTheDocument();
  });

  it('renders loading state', () => {
     const { container } = render(
      <EarningColumn
        day="Monday"
        earnings={{ 'Before Open': [], 'After Close': [] }}
        logos={{}}
        loading={true}
      />
    );
    expect(container.getElementsByClassName('animate-pulse').length).toBeGreaterThan(0);
  });

  it('renders EarningItems for both sessions', () => {
    render(
      <EarningColumn
        day="Monday"
        earnings={{ 'Before Open': [mockEarning], 'After Close': [mockEarning] }}
        logos={{ TEST: 'logo.svg' }}
        loading={false}
      />
    );
    expect(screen.getAllByText('TEST').length).toBeGreaterThan(1);
    expect(screen.getAllByAltText('TEST')[0]).toHaveAttribute('src', 'logo.svg');
  });

  it('renders only Before Open for Friday', () => {
    render(
      <EarningColumn
        day="Friday"
        earnings={{ 'Before Open': [mockEarning] }}
        logos={{ TEST: 'logo.png' }}
        loading={false}
      />
    );
    expect(screen.getByText('Friday')).toBeInTheDocument();
    expect(screen.getByText('Before Open')).toBeInTheDocument();
    expect(screen.queryByText('After Close')).not.toBeInTheDocument();
  });
});

