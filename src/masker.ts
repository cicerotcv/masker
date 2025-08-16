export const Masker = {
  onlyNumbers: (value: string) => value.replace(/\D/g, ''),
  apply: (input: unknown, pattern: string) => {
    if (input == null) return '';

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
  createMasker: (pattern: string) => (input: unknown) =>
    Masker.apply(input, pattern),
};
