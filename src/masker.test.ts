import { describe, it, expect } from 'vitest';
import { Masker } from './masker';

describe('Masker', () => {
  describe('onlyNumbers', () => {
    it('should remove all non-digit characters', () => {
      expect(Masker.onlyNumbers('abc123def456')).toBe('123456');
      expect(Masker.onlyNumbers('!@#789')).toBe('789');
      expect(Masker.onlyNumbers('')).toBe('');
      expect(Masker.onlyNumbers('no digits')).toBe('');
    });
  });

  describe('apply', () => {
    it('should apply pattern to input', () => {
      expect(Masker.apply('1234567890', '(##) ####-####')).toBe(
        '(12) 3456-7890'
      );
      expect(Masker.apply('987654321', '###.###.###')).toBe('987.654.321');
      expect(Masker.apply('123', '##-##')).toBe('12-3');
      expect(Masker.apply('1', '##/##')).toBe('1');
    });

    it('should return empty string for null or undefined input', () => {
      expect(Masker.apply(null, '###')).toBe('');
      expect(Masker.apply(undefined, '###')).toBe('');
    });

    it('should return empty string if input has no digits', () => {
      expect(Masker.apply('abc', '###')).toBe('');
    });

    it('should append suffix if pattern ends with non-# characters', () => {
      expect(Masker.apply('12', '###-suffix')).toBe('12');
      expect(Masker.apply('12', '##-end')).toBe('12-end');
      expect(Masker.apply('1', '#-suffix')).toBe('1-suffix');
    });

    it('should stop at first unmatched # in pattern', () => {
      expect(Masker.apply('1', '##-##')).toBe('1');
    });
  });

  describe('createMasker', () => {
    it('should create a masker function with a given pattern', () => {
      const phoneMask = Masker.createMasker('(##) ####-####');
      expect(phoneMask('1234567890')).toBe('(12) 3456-7890');
      expect(phoneMask('987654321')).toBe('(98) 7654-321');
    });
  });
});
