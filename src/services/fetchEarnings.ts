import axios from "axios";
import { getLastMondayDate } from "../utils/getLastMondayDate";
import type { Earning } from "../types/earningTypes";
import { getNextFridayDate } from "../utils/getNextFridayDate";

interface EarningsResponse {
  earnings: Earning[];
}

interface EarningsResult {
  data: Earning[] | null;
  error: string | null;
}

export const fetchEarnings = async (API_KEY: string, API_BASE_URL: string): Promise<EarningsResult> => {
  try {
    const fromDate = getLastMondayDate();
    const toDate = getNextFridayDate();
    
    const url = `${API_BASE_URL}/v2.1/calendar/earnings?token=${API_KEY}&parameters[date_from]=${fromDate}&parameters[date_to]=${toDate}&pagesize=1000`;
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
