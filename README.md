# TypeScript & JavaScript Learning Examples

This repository contains several TypeScript and JavaScript example files that demonstrate key concepts such as types, functions, interfaces, arrays, objects, tuples, and unions. It serves as a reference for learning and experimenting with static typing, error handling, object modeling, and more.

## 🗂️ Project Structure

```
.
├── arrays.ts     # Type-safe array usage in TypeScript
├── enums.ts      # Enum usage demonstration
├── functions.js  # JavaScript version of function examples
├── functions.ts  # TypeScript function definitions and error handling
├── interface.ts  # Interface declarations and usage in objects
├── objects.js    # JavaScript object modeling
├── objects.ts    # TypeScript object handling with types
├── tuples.ts     # Tuple type examples in TypeScript
└── union.ts      # Union type examples in TypeScript
```

## 📄 File Descriptions

### `functions.ts` / `functions.js`
- Showcases function typing in TS and JS
- Default parameters (`loginUser`)
- `never` type functions like `fail()`
- Type-safe vs type-unsafe returns

### `objects.ts` / `objects.js`
- How to define and use typed objects
- Demonstrates object structure, assignment, and return values
- Covers interface-like behavior in JavaScript

### `interface.ts`
- Illustrates the use of `interface` in TypeScript for object modeling
- Multiple properties with different types
- Extends interface use cases

### `arrays.ts`
- Usage of type-safe arrays
- Mapping arrays and inferring types
- Prevents invalid element types

### `enums.ts`
- Demonstrates `enum` usage for stateful values
- Useful in controlling logic branches or statuses

### `tuples.ts`
- Examples of fixed-length, typed arrays
- Shows how to ensure consistent data structure with tuples

### `union.ts`
- Examples of using union types (e.g., `string | number`)
- Useful for creating flexible yet type-safe variables

## ✅ Prerequisites

- Node.js and TypeScript installed globally:
  ```bash
  npm install -g typescript
  ```

## ▶️ How to Run

Compile the TypeScript files:
```bash
tsc
```

Run the JavaScript output:
```bash
node functions.js
```

## 💡 Notes

- Many of the examples include commented-out incorrect code to highlight TypeScript's type enforcement.
- Ideal for beginners who want to understand how TypeScript differs from JavaScript in handling types and errors.
