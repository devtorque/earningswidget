import axios from "axios";

const API_KEY = import.meta.env.VITE_BENZINGA_API_KEY;
const API_BASE_URL = import.meta.env.VITE_BENZINGA_API_BASE_URL;

if (!API_KEY) {
  throw new Error('VITE_BENZINGA_API_KEY is not defined in environment variables');
}

interface LogosResult {
  data: { [symbol: string]: string } | null;
  error: string | null;
}

export const fetchLogos = async (tickers: string[]): Promise<LogosResult> => {
  try {
    if (tickers.length === 0) return { data: {}, error: null };
    
    const searchKeys = tickers.join(',');
    const url = `${API_BASE_URL}/v2/logos/search?token=${API_KEY}&search_keys=${searchKeys}&search_keys_type=symbol&fields=mark_vector_light`;
    const { data } = await axios.get(url, { headers: { accept: 'application/json' } });
    
    return {
      data: Object.fromEntries(
        ((data.data || []) as { search_key: string; files: { mark_vector_light: string } }[])
          .map((item) => [item.search_key, item.files.mark_vector_light])
      ),
      error: null
    };
  } catch (error) {
    console.error('Error fetching logos:', error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Failed to fetch logos'
    };
  }
};
