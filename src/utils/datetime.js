export function destructDate(date) {
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  return { year, month, day };
}
