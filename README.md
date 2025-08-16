# @cicerotcv/masker

A lightweight TypeScript library for masking and formatting strings, numbers, and more.  
Perfect for input validation, formatting, and data presentation in web applications.

[![Version](https://img.shields.io/github/v/release/cicerotcv/masker?label=version&color=blue)](https://github.com/cicerotcv/masker/releases)
[![npm version](https://img.shields.io/npm/v/@cicerotcv/masker?color=blue)](https://www.npmjs.com/package/@cicerotcv/masker)
[![License](https://img.shields.io/github/license/cicerotcv/masker?color=green)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-9-F69220?logo=pnpm)](https://pnpm.io/)
[![license](https://img.shields.io/npm/l/@cicerotcv/masker?color=green)](./LICENSE)
[![CI](https://github.com/cicerotcv/masker/actions/workflows/ci.yml/badge.svg)](https://github.com/cicerotcv/masker/actions/workflows/ci.yml)
[![build](https://github.com/ctiagocv/masker/actions/workflows/publish.yml/badge.svg)](https://github.com/ctiagocv/masker/actions)

---

## ✨ Features

- Simple API for masking strings and numbers
- TypeScript support
- Zero dependencies
- Customizable masks
- Fast and lightweight

---

## 🚀 Installation

```bash
pnpm add @cicerotcv/masker
# or
npm install @cicerotcv/masker
# or
yarn add @cicerotcv/masker
```

---

## 📦 Usage

```typescript
import { Masker } from '@cicerotcv/masker';

const phone = Masker.apply('1234567890', '## ####-####');
console.log(phone); // 12 3456-7890

const fmtCellphoneNumber = Masker.create('## ##### ####');
console.log(fmtCellphoneNumber('(11) 12345-1234')); // 11 12345 1234

const sanitized = Masker.onlyNumbers('(11) 12345-1234');
console.log(sanitized); // 11123451234
```

---

## 🛠 API

### `Masker.apply(input: string, pattern: string): string`

- `input`: Value to be masked.
- `pattern`: Mask pattern using `#` for digits.

### `Masker.create(pattern: string): (input: string) => string`

- `pattern`: Mask pattern using `#` for digits.
- Returns a function that applies the mask to the input value.

### `Masker.onlyNumbers(input: string): string`

- `input`: Value to be sanitized.
- Returns a string containing only the numeric characters from the input.

---

## 🧪 Testing

Run unit tests with [Vitest](https://vitest.dev):

```bash
pnpm test:run
```

---

## 📄 License

MIT © Cicero Valentim
