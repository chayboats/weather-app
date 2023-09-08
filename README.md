# Weather App 

## Description

This is a simple weather app built using React that allows users to search for the weather conditions in a specific city or country. Users can enter the location they want to check, and the app will display the temperature, humidity, wind speed, and a weather icon for the specified location.

## Getting Started

Before you begin, you need to obtain an API key from [World Weather Online](https://www.worldweatheronline.com/weather-api/api/pricing2.aspx). This API key is required to fetch weather data. Once you have the API key, save it in a `.env` file at the root of your project directory.

```js
env 
REACT_APP_WEATHER_KEY=YOUR_API_KEY_HERE
```

Make sure to add the .env file to your .gitignore file to keep your API key secret and not expose it in your repository.

## Installation

1. Clone the repository to your local machine: 
   - ```git@github.com:chayboats/weather-app.git```

2. Navigate to the project directory:
   - ```cd weather-app```

3. Install the project dependencies:
   - ```npm install```

## Usage - *React App*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- In the search bar, enter a city or country name to check the weather for that location.

The page will reload when you make changes in the code. *(You may also see any lint errors in the console.)*

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Technologies Used
- React
- [World Weather Online API](https://www.worldweatheronline.com/weather-api/api/docs/local-city-town-weather-api.aspx)

## Acknowledgments
- Special thanks to [World Weather Online](https://www.worldweatheronline.com/weather-api/api/docs/local-city-town-weather-api.aspx) for providing the weather data API.

## Contact
If you have any questions or need further assistance, feel free to contact me at chaleyboatmon@gmail.com
