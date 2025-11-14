# 🌟 Star Wars Characters App

> A modern React application for browsing Star Wars characters with pagination, character details, and visual character flow diagrams. Built with React, TypeScript, Vite, and React Query.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-5.90.7-FF4154?logo=react-query&logoColor=white)

---

## ✨ Features

- 🚀 **Browse Characters** - Navigate through Star Wars characters with pagination
- 👤 **Character Details** - View detailed information about each character
- 🎨 **Interactive Flow** - Visual character flow diagrams
- 📱 **Responsive Design** - Modern UI that works on all devices
- 🔒 **Type-Safe** - Full TypeScript support for better development experience
- ✅ **Well Tested** - Comprehensive test coverage with Vitest

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) 🟢
- **NPM** package manager (or yarn) 📦

You can check your versions by running:

```bash
node --version
npm --version
```

---

## 🚀 Getting Started

### 📥 Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd StarWars
```

2. **Install dependencies:**

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

---

## 🏃 Running the Project

### 🛠️ Development Mode

To start the development server with hot module replacement:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is occupied).

### 🏗️ Production Build

To create a production build:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

The build output will be in the `dist` directory.

### 👀 Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

Or with yarn:

```bash
yarn preview
```

---

## 🧪 Running Tests

The project uses **Vitest** as the test runner with **React Testing Library** for component testing.

### ▶️ Run Tests Once

To run all tests once:

```bash
npm run test
```

Or with yarn:

```bash
yarn test
```

### 👁️ Run Tests in Watch Mode

To run tests in watch mode (automatically re-runs tests on file changes):

```bash
npm run test:watch
```

Or with yarn:

```bash
yarn test:watch
```

### 🎨 Run Tests with UI

To run tests with the Vitest UI (interactive test interface):

```bash
npm run test:ui
```

Or with yarn:

```bash
yarn test:ui
```

---

## 🔍 Linting

To check code quality with ESLint:

```bash
npm run lint
```

Or with yarn:

```bash
yarn lint
```

---

## 📁 Project Structure

```
StarWars/
├── 📂 src/
│   ├── 📂 api/              # 🔌 API client and utilities
│   ├── 📂 components/       # ⚛️ React components
│   │   ├── CharacterCard/
│   │   ├── CharacterFlow/
│   │   ├── CharactersList/
│   │   ├── CharactersListPagination/
│   │   ├── Header/
│   │   └── Loader/
│   ├── 📂 constans/         # 📌 Application constants
│   ├── 📂 hooks/            # 🎣 Custom React hooks
│   ├── 📂 queries/          # 🔄 React Query hooks
│   ├── 📂 test/             # 🧪 Test setup files
│   └── 📂 types/            # 📝 TypeScript type definitions
├── 📂 public/               # 🌐 Public assets
└── 📄 package.json          # 📦 Project dependencies and scripts
```

---

## 🛠️ Technologies Used

| Technology                   | Purpose                    |
| ---------------------------- | -------------------------- |
| ⚛️ **React 18**              | UI library                 |
| 📘 **TypeScript**            | Type safety                |
| ⚡ **Vite**                  | Build tool and dev server  |
| 🔄 **React Query**           | Data fetching and caching  |
| 🌊 **React Flow**            | Flow diagram visualization |
| 🌐 **Axios**                 | HTTP client                |
| 🧪 **Vitest**                | Test runner                |
| 🎯 **React Testing Library** | Component testing          |
| 🎨 **Sass**                  | Styling                    |

---

## 📜 Available Scripts

| Script               | Description                             | Emoji |
| -------------------- | --------------------------------------- | ----- |
| `npm run dev`        | Start development server                | 🚀    |
| `npm run build`      | Build for production (runs tests first) | 🏗️    |
| `npm run preview`    | Preview production build                | 👀    |
| `npm run test`       | Run tests once                          | ✅    |
| `npm run test:watch` | Run tests in watch mode                 | 👁️    |
| `npm run test:ui`    | Run tests with UI                       | 🎨    |
| `npm run lint`       | Run ESLint                              | 🔍    |

---

## 📄 License

This project is private and proprietary. 🔒

---

<div align="center">

**May the Force be with you!** ⭐

Made with ❤️ using React and TypeScript

</div>
