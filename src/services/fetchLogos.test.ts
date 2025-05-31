import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { fetchLogos } from './fetchLogos';

vi.mock('axios');
const mockedAxios = axios as unknown as { get: ReturnType<typeof vi.fn> };

describe('fetchLogos', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns logo data on success', async () => {
    mockedAxios.get = vi.fn().mockResolvedValue({
      data: {
        data: [
          { search_key: 'AAPL', files: { mark_vector_light: 'logo-url-aapl.svg' } },
          { search_key: 'TSLA', files: { mark_vector_light: 'logo-url-tsla.svg' } },
        ],
      },
    });
    const result = await fetchLogos(['AAPL', 'TSLA']);
    expect(result.data).toEqual({ AAPL: 'logo-url-aapl.svg', TSLA: 'logo-url-tsla.svg' });
    expect(result.error).toBeNull();
  });

  it('returns empty object if tickers is empty', async () => {
    const result = await fetchLogos([]);
    expect(result.data).toEqual({});
    expect(result.error).toBeNull();
  });

  it('returns error on failure', async () => {
    mockedAxios.get = vi.fn().mockRejectedValue(new Error('Network error'));
    const result = await fetchLogos(['AAPL']);
    expect(result.data).toBeNull();
    expect(result.error).toBe('Network error');
  });
}); 