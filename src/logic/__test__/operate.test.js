import operate from '../operate';

describe('calculator operations', () => {
  it('expect 1 + 2 to be 3', () => {
    const result = operate('1', '2', '+');
    expect(result).toBe('3');
  });

  it('expect 3 - 1 to be 2', () => {
    const result = operate('3', '1', '-');
    expect(result).toBe('2');
  });

  it('expect 3 x 10 to be 30', () => {
    const result = operate('3', '10', 'x');
    expect(result).toBe('30');
  });

  it('expect 6 / 2 to be 3', () => {
    const result = operate('6', '2', '÷');
    expect(result).toBe('3');
  });

  it('expect 7 modulo 3 to equal to 1', () => {
    const result = operate('7', '3', '%');
    expect(result).toBe('1');
  });

  it('expect not be able to devide 1 by 0', () => {
    const result = operate('1', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('expect not be able calculate the modulo of a number devided by 0 like 7 devided by 0', () => {
    const result = operate('7', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});
