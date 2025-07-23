# 🌤️ WeatherX - JavaScript Weather & Greeting App

WeatherX is a simple frontend-focused weather app built with vanilla JavaScript. It displays the current weather. This version integrates with [wttr.in](https://wttr.in); a free, no-auth weather API, instead of OpenWeatherMap.

---

This project is part of a [comprehensive series](url) aimed at guiding developers and DevOps engineers through a complete and practical journey into CI/CD using GitHub Actions.

The live version of the app is available [here](https://doyinhubx.github.io/weather-runner/)

Here are links to each part of the series:

1. [GitHub Actions Deep Dive: A CI/CD Introduction](url)
2. [How to Build a Weather Dashboard with HTML and JavaScript](url)
3. [Continuous Integration for Node.js Apps Using GitHub Actions](url) [THIS GUIDE]
4. [Advanced CI/CD Workflows with Docker, Linting, and Git Hooks](url)
5. [Advanced CI/CD Automation: Job Caching, Matrix Builds, and Conditional Deployments](url)
6. [Building a CI/CD Pipeline for GitHub Pages with GitHub Actions](url)
7. [Empower Yourself for Production-Ready CI/CD and DevOps](url)


## 🚀 Features

- Fetch and display current weather of cities around the world
- Simple DOM manipulation and modular file structure
- Uses `browserify` to bundle CommonJS modules
- Development server with live rebuild via `watchify`

---

## 📁 Project Structure (for this guide)

```
weather-app/
├── public/                    # Static assets served to the browser
│   ├── index.html             # Main HTML UI
│   ├── styles.css             # App styling
│   └── bundle.js              # Bundled JavaScript (auto-generated)
├── src/                       # Application source code
│   ├── main.js                # App entry point
│   ├── weather.js             # Handles weather API test logic (e.g., wttr.in requests)
│   ├── services/              # API access or mock data services
│   │   ├── currentWeather.js  # Handles current weather mock data
│   │   └── forecast.js        # Handles 5-day forecast mock data
│   ├── utils/                 # Utility functions (e.g., DOM manipulation)
│   │   └── dom.js             # Reusable DOM helper functions
│   ├── data/                  # Static or fallback JSON data
│   │   ├── current.json       # Mock current weather data
│   │   └── forecast.json      # Mock forecast data
│   └── __tests__/             # Automated test files
│       └── weather.test.js    # Unit tests for weather.js using Jest
├── server.js                  # Express server to serve files and API
├── jest.config.js             # Jest configuration (test environment, coverage rules)
├── .gitignore                 # Files/folders Git should ignore (e.g., node_modules, .env)
├── package.json               # Project metadata, dependencies, and scripts
└── README.md                  # You're here! Project overview and instructions
```


---

## 🔧 Setup & Usage

```bash
# 1. Clone the Repo
git clone https://github.com/your-username/weather-app.git
cd weather-app

# 2. Install Dependencies
npm install

# 3. Run in Dev Mode
npm run dev
```
Runs the backend on http://localhost:5000

Watches for changes in `main.js` and rebuilds `bundle.js`

## 📦 Available Scripts

Command	Description

npm run build	Bundle JS manually via Browserify
npm run watch	Watch & rebuild JS using Watchify
npm start	Run the Express backend
npm run dev	Watch + serve in one step (for development)


🛡️ License
MIT © 2025 [Doyin ELUGBADEBO](url)