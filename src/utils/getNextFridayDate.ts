export const getNextFridayDate = () => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const daysUntilFriday = (5 - dayOfWeek + 7) % 7; // Calculate days until next Friday (5 is Friday)
    const nextFriday = new Date(now);
    nextFriday.setDate(now.getDate() + daysUntilFriday);
    return nextFriday.toISOString().split('T')[0];
}; 