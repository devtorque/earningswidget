# Earnings Calendar Widget

A modern React-based calendar widget application built with React and TypeScript. This project provides a feature-rich calendar interface with real-time data fetching capabilities.


## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/devtorque/earningswidget.git
```

2. Install dependencies:
```bash
npm install
```

3. Make a `.env` file
VITE_BENZINGA_API_KEY='Enter your Benzinga API key'
VITE_BENZINGA_API_BASE_URL='Enter the Benzinga API URL'

## 🏃‍♂️ Running the Project

### Development Mode
To start the development server:
```bash
npm run dev
```
This will start the Vite development server, typically at `http://localhost:5173`

### Building for Production
To create a production build:
```bash
npm run build
```

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

### Linting
To run ESLint and check for code quality issues:
```bash
npm run lint
```

## 🧪 Testing
The project uses Vitest for testing. Run tests with:
```bash
npm test
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Date Handling**: Day.js
- **HTTP Client**: Axios
- **Testing**: Vitest + Testing Library

## 📁 Project Structure

```
calendarwidget/
├── src/              # Source files
├── public/           # Static assets
├── node_modules/     # Dependencies
├── vite.config.ts    # Vite configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project metadata and dependencies
```

## 👥 Author

- Shubham Sinha

