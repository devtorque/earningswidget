export const getLastMondayDate = () => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // If today is Sunday, go back 6 days, otherwise go back (current day - 1) days
    const lastMonday = new Date(now);
    lastMonday.setDate(now.getDate() - daysToSubtract);
    return lastMonday.toISOString().split('T')[0];
};
  