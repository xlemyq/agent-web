import { describe, expect, it } from 'vitest';
import { cn, formatNumber } from '@/lib/utils';

describe('utils', () => {
  it('joins class names without falsy values', () => {
    expect(cn('a', false && 'b', 'c')).toBe('a c');
  });

  it('formats numbers with pl-PL locale', () => {
    expect(formatNumber(1234567)).toBe('1\u00a0234\u00a0567');
  });
});
