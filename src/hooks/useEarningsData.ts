import { useEffect, useState } from "react";
import { fetchEarnings } from "../services/fetchEarnings";
import { fetchLogos } from "../services/fetchLogos";
import { daysOfWeek, type Session, type EarningsGrouped, type Earning } from "../types/earningTypes";
import { getSession } from "../utils/getSession";

type Props = {
  apiKey?: string;
  baseUrl?: string;
};

export function useEarningsData({ apiKey, baseUrl }: Props) {
  const [earnings, setEarnings] = useState<EarningsGrouped>({});
  const [logos, setLogos] = useState<{ [symbol: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        if (!apiKey || !baseUrl) {
          setError('Please add your API key and base URL to the .env file');
          return;
        }
        const { data: earningsList, error: fetchError } = await fetchEarnings(apiKey, baseUrl);

        if (!isMounted) return;

        if (fetchError) {
          setError(fetchError);
          return;
        }

        if (!earningsList) {
          setError('No earnings data available');
          return;
        }

        const grouped: EarningsGrouped = {};
        const tickers: Set<string> = new Set();

        console.log('earningsList', earningsList);

        earningsList.forEach((item: Earning) => {
          const date = new Date(item.date);
          const day = daysOfWeek[date.getDay() - 1];
          if (!day) return;
          const session = getSession(item.time);
          if (session === "During Market") return;
          if (!grouped[day]) {
            grouped[day] = { "Before Open": [], "After Close": [] };
          }
          grouped[day]![session as Session].push(item);
          tickers.add(item.ticker);
        });

        if (!isMounted) return;

        setEarnings(grouped);
        const { data: logosMap, error: logosError } = await fetchLogos(Array.from(tickers), apiKey, baseUrl);
        
        if (!isMounted) return;
        
        if (logosError) {
          setError(logosError);
          return;
        }

        if (logosMap) {
          setLogos(logosMap);
        }
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : 'Failed to load earnings data');
        console.error('Error loading earnings:', err);
      } finally {
        if (isMounted) {
          setTimeout(() => setLoading(false), 500);
        }
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { earnings, logos, loading, error };
}
