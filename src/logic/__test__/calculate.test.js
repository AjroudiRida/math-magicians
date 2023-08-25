import calculate from '../calculate';

describe('calculator operations', () => {
  it('expect 1 + 2 to be 3', () => {
    const obj = {
      total: '1',
      next: '2',
      operation: '+',
    };
    const btn = '=';
    const result = calculate(obj, btn);
    expect(result.total).toBe('3');
  });

  it('expect 3 - 1 to be 2', () => {
    const obj = {
      total: '3',
      next: '1',
      operation: '-',
    };
    const btn = '=';
    const result = calculate(obj, btn);
    expect(result.total).toBe('2');
  });

  it('expect 3 x 10 to be 30', () => {
    const obj = {
      total: '3',
      next: '10',
      operation: 'x',
    };
    const btn = '=';
    const result = calculate(obj, btn);

    expect(result.total).toBe('30');
  });

  it('expect 6 / 2 to be 3', () => {
    const obj = {
      total: '6',
      next: '2',
      operation: '÷',
    };
    const btn = '=';
    const result = calculate(obj, btn);
    expect(result.total).toBe('3');
  });
});
