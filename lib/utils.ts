export function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 0 }).format(value);
}
