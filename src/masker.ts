export const Masker = {
  /**
   * Remove all non-numeric characters from a string.
   * @param value The input string.
   * @returns A string containing only numeric characters.
   */
  onlyNumbers: (value: string) => value.replace(/\D/g, ''),
  /**
   * Apply a masking pattern to a string of digits.
   * @param input The input value.
   * @param pattern The masking pattern.
   * @returns The masked string.
   */
  apply: (input: unknown, pattern: string) => {
    if (input === null) return '';

    const digits = Masker.onlyNumbers(`${input}`);
    if (!digits.length) return '';

    let result = '';
    let i = 0,
      j = 0;

    for (; i < pattern.length && j < digits.length; i++) {
      result += pattern[i] === '#' ? digits[j++] : pattern[i];
    }

    let suffix = '';
    for (; i < pattern.length; i++) {
      if (pattern[i] === '#') return result;
      suffix += pattern[i];
    }

    return result + suffix;
  },
  /**
   * Create a masker function with a specific pattern.
   * @param pattern The masking pattern.
   * @returns A function that applies the masking pattern to the input.
   */
  createMasker: (pattern: string) => (input: unknown) =>
    Masker.apply(input, pattern),
};
