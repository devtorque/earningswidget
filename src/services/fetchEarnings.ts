import axios from "axios";
import { getLastQuarterDate } from "./getLastQuarterDate";
import type { Earning } from "../types/earningTypes";

const API_KEY = import.meta.env.VITE_BENZINGA_API_KEY;
const API_BASE_URL = import.meta.env.VITE_BENZINGA_API_BASE_URL;

if (!API_KEY) {
  throw new Error('VITE_BENZINGA_API_KEY is not defined in environment variables');
}

interface EarningsResponse {
  earnings: Earning[];
}

interface EarningsResult {
  data: Earning[] | null;
  error: string | null;
}

export const fetchEarnings = async (): Promise<EarningsResult> => {
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
