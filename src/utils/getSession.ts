import type { Session } from "../types/earningTypes";

export const getSession = (time: string): Session | "During Market" => {
    if (!time) return "Before Open";
    const [hour, minute] = time.split(":").map(Number);
    if (hour < 9 || (hour === 9 && minute < 30)) return "Before Open";
    if (hour > 16 || (hour === 16 && minute >= 0)) return "After Close";
    return "During Market";
  };
  