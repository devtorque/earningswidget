import axios from "axios";
import { getLastQuarterDate } from "../utils/getLastQuarterDate";
import type { Earning } from "../types/earningTypes";

interface EarningsResponse {
  earnings: Earning[];
}

interface EarningsResult {
  data: Earning[] | null;
  error: string | null;
}

export const fetchEarnings = async (API_KEY: string, API_BASE_URL: string): Promise<EarningsResult> => {
  try {
    const fromDate = getLastQuarterDate();
    const url = `${API_BASE_URL}/v2.1/calendar/earnings?token=${API_KEY}&parameters[date_from]=${fromDate}&pagesize=1000`;
    const { data } = await axios.get<EarningsResponse>(url);
    return {
      data: data.earnings || [],
      error: null
    };
  } catch (error) {
    console.error('Error fetching earnings:', error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Failed to fetch earnings data'
    };
  }
};
