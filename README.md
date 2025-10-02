# Weather App

A responsive, client-side weather application that displays current conditions and a 3‑day forecast for any city using the WeatherAPI service. Built with vanilla JavaScript, Bootstrap, and Font Awesome.

## Features

- **City search**: Type a city and click "Find" to fetch weather.
- **Default location**: Loads weather for "Alexandria" on first visit.
- **Current conditions**: Temperature, condition icon, and description.
- **3‑day forecast**: Average and max temps with condition icons.
- **Responsive UI**: Styled with Bootstrap and custom CSS.

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **UI**: Bootstrap, Font Awesome
- **API**: [WeatherAPI](https://www.weatherapi.com/) `forecast.json`

## Getting Started

### Prerequisites

- Any modern browser
- Optional: a simple static server for local development
  - Node.js users: `npx serve` or `npx http-server`
  - Python users: `python -m http.server 8080`

### Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/Weather-APP.git
   cd Weather-APP
   ```
2. Serve the project (recommended) or open `index.html` directly:
   - With Node:
     ```bash
     npx serve .
     ```
     Then open the printed URL (e.g., `http://localhost:3000`).
   - With Python:
     ```bash
     python -m http.server 8080
     ```
     Then open `http://localhost:8080`.
   - Or double‑click `index.html` to open it in your browser.

## API Configuration

This project uses WeatherAPI's `forecast.json` endpoint. In `JS/main.js`, the API key is currently hardcoded for development:

```js
https://api.weatherapi.com/v1/forecast.json?key=YOUR_KEY&q=${city}&days=3
```

For production or public repos, you should:

- Create a free key at [weatherapi.com](https://www.weatherapi.com/).
- Replace the placeholder with your key.
- Avoid committing real secrets to a public repo. Since this is a client‑side app, consider rate limits and key exposure. For a production setup, proxy the API through a backend to keep the key private.

## Project Structure

```
Weather-APP/
├─ CSS/
│  ├─ all.min.css
│  ├─ bootstrap.min.css
│  └─ style.css
├─ images/
│  └─ ...
├─ JS/
│  ├─ bootstrap.bundle.min.js
│  └─ main.js
├─ webfonts/
│  └─ ...
├─ index.html
└─ README.md
```

## Usage

- Enter a city name and click "Find".
- The app shows the current weather and the next two days' forecast.
- If no city is entered, it loads "Alexandria" by default.

## Customization

- **Styling**: Edit `CSS/style.css` to adjust colors, spacing, or layout.
- **Default city**: Change the default in `getCurrentWeather(city = "Alexandria")` inside `JS/main.js`.
- **Units**: The app uses metric (°C). You can switch to Fahrenheit by swapping to `temp_f`, `maxtemp_f`, etc., from the API response.

## Accessibility and Performance

- Semantic HTML structure with Bootstrap components.
- Local asset bundling via CDN‑free setup for offline development.
- Consider adding ARIA labels and improving focus states for enhanced accessibility.

## Deployment

- This is a static site. You can deploy to GitHub Pages, Netlify, or Vercel.
- GitHub Pages:
  1. Push to a public repo on GitHub.
  2. In the repo settings, enable GitHub Pages and select the `main` branch.
  3. Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

## Roadmap / Ideas

- Geolocation to auto‑detect the user's city.
- Loading/error states for network requests.
- Support for Fahrenheit and unit toggling.
- Improved wind, humidity, and precipitation details.
- Keyboard accessibility for the search action (Enter key).

## Acknowledgements

- UI powered by **Bootstrap** and **Font Awesome**.
- Weather data by **WeatherAPI**.
- Original design credits noted in the footer of `index.html`.

## License

This project is provided as‑is. If you need a specific license, add one (e.g., MIT) and include a `LICENSE` file.
