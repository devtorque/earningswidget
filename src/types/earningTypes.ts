
export type Session = "Before Open" | "After Close";
export const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;
export type DayOfWeek = typeof daysOfWeek[number];

export interface Earning {
  currency: string;
  date: string;
  date_confirmed: number;
  eps: string;
  eps_est: string;
  eps_prior: string;
  eps_surprise: string;
  eps_surprise_percent: string;
  eps_type: string;
  exchange: string;
  id: string;
  importance: number;
  name: string;
  notes: string;
  period: string;
  period_year: number;
  revenue: string;
  revenue_est: string;
  revenue_prior: string;
  revenue_surprise: string;
  revenue_surprise_percent: string;
  revenue_type: string;
  ticker: string;
  time: string;
  updated: number;
}

export type EarningsGrouped = {
  [day in DayOfWeek]?: {
    [key in Session]: Earning[];
  };
};
