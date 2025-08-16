export const MaskUtils = {
  onlyNumbers(value: string) {
    return value.replace(/\D/g, '');
  },
  applyMask(input: unknown, pattern: string) {
    if (input == null) return '';

    const digits = MaskUtils.onlyNumbers(`${input}`);
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
};
