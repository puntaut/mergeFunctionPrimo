import { merge } from '../src/merge';

describe('merge', () => {
  it('should merge two ascending arrays and one descending array correctly', () => {
    const c1 = [1, 4, 7];
    const c2 = [2, 5, 8];
    const c3 = [9, 6, 3, 0];

    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(merge(c1, c2, c3)).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [5, 3])).toEqual([1, 2, 3, 5]);
  });

  it('should handle duplicates and negative numbers', () => {
    const c1 = [-5, 0, 2];
    const c2 = [-2, 2, 4];
    const c3 = [10, 2, -1];
    expect(merge(c1, c2, c3)).toEqual([-5, -2, -1, 0, 2, 2, 2, 4, 10]);
  });
});
