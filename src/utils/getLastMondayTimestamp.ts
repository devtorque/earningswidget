import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export function getLastMondayTimestamp(): number {
    const now = dayjs().tz('America/New_York');
    const diff = (now.day() === 0 ? 6 : now.day() - 1);
    const lastMonday = now.subtract(diff, 'day').startOf('day');
    return lastMonday.unix();
  }