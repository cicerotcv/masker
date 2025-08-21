# @cicerotcv/masker

A lightweight TypeScript library for masking and formatting strings, numbers, and more.  
Perfect for input validation, formatting, and data presentation in web applications.

[![Version](https://img.shields.io/github/v/release/cicerotcv/masker?label=version&color=blue)](https://github.com/cicerotcv/masker/releases)
[![npm version](https://img.shields.io/npm/v/@cicerotcv/masker?color=blue)](https://www.npmjs.com/package/@cicerotcv/masker)
[![Monthly downloads](https://img.shields.io/npm/dm/@cicerotcv/masker)](https://www.npmjs.com/package/@cicerotcv/masker)
[![License](https://img.shields.io/github/license/cicerotcv/masker?color=green)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-9-F69220?logo=pnpm)](https://pnpm.io/)
[![license](https://img.shields.io/npm/l/@cicerotcv/masker?color=green)](./LICENSE)
[![CI](https://github.com/cicerotcv/masker/actions/workflows/ci.yml/badge.svg)](https://github.com/cicerotcv/masker/actions/workflows/ci.yml)
[![update and publish](https://github.com/cicerotcv/masker/actions/workflows/update-and-publish.yml/badge.svg)](https://github.com/cicerotcv/masker/actions/workflows/update-and-publish.yml)
[![wakatime](https://wakatime.com/badge/user/6b9e0525-e35c-4896-bb9c-db75b3501e3c/project/11091876-8e6f-40ae-935e-cd3cacdcfd3c.svg)](https://wakatime.com/badge/user/6b9e0525-e35c-4896-bb9c-db75b3501e3c/project/11091876-8e6f-40ae-935e-cd3cacdcfd3c)

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

### Apply the given pattern to a string or number

```ts
Masker.apply('1234567890', '(##) ####-####'); // (12) 3456-7890
```

### Create a curried masker function

```ts
const fmtPhoneNumber = Masker.create('(##) ####-####');
fmtPhoneNumber('1234567890'); // (12) 3456-7890
```

### Remove all non-numeric characters from a string

```ts
Masker.onlyNumbers('(12) 3456-7890'); // 1234567890
```

---

## 🧪 Testing

Run unit tests with [Vitest](https://vitest.dev):

```bash
pnpm test:run
```

---

## 📄 License

MIT © Cicero Valentim



