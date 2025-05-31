import { render, screen } from '@testing-library/react';
import EarningItem from './EarningItem';
import { describe, it, expect } from 'vitest';
import { type Earning } from '../../types/earningTypes';

describe('EarningItem', () => {
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

  it('renders the ticker and logo when logo is provided', () => {
    render(<EarningItem item={mockEarning} logo="logo.svg" />);
    expect(screen.getByText('TEST')).toBeInTheDocument();
    const img = screen.getByAltText('TEST');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'logo.svg');
  });

  it('links to the correct Benzinga quote page', () => {
    render(<EarningItem item={mockEarning} logo="logo.svg" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://www.benzinga.com/quote/test');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
