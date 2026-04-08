## Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Bun](https://bun.com/)

**Installation**

Install the project dependencies using bun:

```sh
bun install
```

**Environment Variables**

Copy the file named `.env.example` and rename it `.env.development` in the root of your project and replace the placeholder values with yours.

```sh
cp .env.example .env.development
```

**Running the Project**

```sh
bun run start:dev
```

---

## Scripts Reference

| Script                 | Description                        |
| ---------------------- | ---------------------------------- |
| `bun run start:dev`    | Start with watch mode              |
| `bun run type:check`   | TypeScript type checking (no emit) |
| `bun run lint`         | Run ESLint                         |
| `bun run lint:fix`     | Run ESLint with auto-fix           |
| `bun run format`       | Format with Prettier               |
| `bun run format:check` | Check formatting without writing   |
