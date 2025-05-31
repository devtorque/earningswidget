import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { fetchEarnings } from './fetchEarnings';

vi.mock('axios');
const mockedAxios = axios as unknown as { get: ReturnType<typeof vi.fn> };

describe('fetchEarnings', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns data on success', async () => {
    mockedAxios.get = vi.fn().mockResolvedValue({ data: { earnings: [{ ticker: 'AAPL' }] } });
    const result = await fetchEarnings();
    expect(result.data).toEqual([{ ticker: 'AAPL' }]);
    expect(result.error).toBeNull();
  });

  it('returns empty array if no earnings', async () => {
    mockedAxios.get = vi.fn().mockResolvedValue({ data: { earnings: [] } });
    const result = await fetchEarnings();
    expect(result.data).toEqual([]);
    expect(result.error).toBeNull();
  });

  it('returns error on failure', async () => {
    mockedAxios.get = vi.fn().mockRejectedValue(new Error('Network error'));
    const result = await fetchEarnings();
    expect(result.data).toBeNull();
    expect(result.error).toBe('Network error');
  });
});
