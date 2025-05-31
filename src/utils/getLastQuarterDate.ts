export const getLastQuarterDate = () => {
    const now = new Date();
    const quarter = Math.floor((now.getMonth() + 3) / 3);
    const firstMonthOfQuarter = 3 * (quarter - 1);
    const firstDay = new Date(now.getFullYear(), firstMonthOfQuarter, 1);
    return firstDay.toISOString().split('T')[0];
  };
  