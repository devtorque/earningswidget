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

```bash
VITE_BENZINGA_API_KEY='Enter your Benzinga API key'
VITE_BENZINGA_API_BASE_URL='Enter the Benzinga API URL'
```


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

## 🧪 Testing
The project uses Vitest for testing. Run tests with:
```bash
npx vitest
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
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

# Steps for Adding it as a Widget

## 📦 Step 1: Build the Widget
Run the following command from the root of your project to generate the production build:
```bash
    npm run build
```


## 🛠 Step 2: Locate the Build Output
After building, the following files will be available inside the dist/ directory:
earnings-widget.umd.js – The UMD JavaScript bundle.
benzingacalendarwidget.css – The compiled stylesheet.


## 📁 Step 3: Copy Files to Your Project
Copy both earnings-widget.umd.js and benzingacalendarwidget.css into the same directory where your HTML file is located 


## 🧾 Step 4: Prepare the HTML File
If you don’t already have an HTML file, create one named index.html (or use your existing file). This file will host the widget.


## 🌐 Step 5: Include React & ReactDOM CDN (v18)
Add the following <script> tags before your widget script in the <head> or before closing </body> tag:
```bash
    <script src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
```
⚠️ Note: React 19+ is not supported for UMD builds like this.


## 🧩 Step 6: Include Widget Assets
In your <head> section, include the CSS file:
```bash
    <link rel="stylesheet" href="./benzingacalendarwidget.css" />
```
Then before the closing </body> tag, include the UMD widget JS and call the render function:
```bash
    <script src="./earnings-widget.umd.js"></script>
    <script>
        renderEarningsWidget('#widget', {
            apiKey: 'YOUR_BENZINGA_API_KEY',
            baseUrl: 'YOUR_BENZINGA_API_BASE_URL' 
        });
    </script>
```


## 🧱 Step 7: Add the Mount Container
Somewhere inside your <body>, add a container element with an ID or class used by the widget renderer:
```bash
    <div id="widget"></div>
```


## 🚀 Step 8: Run the HTML File
You can now open your HTML file directly in a browser or host it using any static server.
or just double-click the index.html to open in a browser (if all assets are in the same folder).


## ✅ Example HTML Template
```bash
        <!DOCTYPE html>
        <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <title>Benzinga Earnings Widget</title>

            <!-- Styles -->
            <link rel="stylesheet" href="./benzingacalendarwidget.css" />

            <!-- React CDN (Required) -->
            <script src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
            <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
            </head>
            <body>
            <!-- Widget container -->
            <div id="widget"></div>

            <!-- Widget script and initialization -->
            <script src="./earnings-widget.umd.js"></script>
            <script>
                renderEarningsWidget('#widget', {
                apiKey: 'YOUR_BENZINGA_API_KEY',
                baseUrl: 'YOUR_BENZINGA_API_BASE_URL'
                });
            </script>
            </body>
        </html>
```


## 👥 Author

- [Shubham Sinha](https://www.linkedin.com/in/shubham-sinha-/)

