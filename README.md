# Weather App 
![Weather App](weather-app.gif)

This is a simple weather app built using React that allows users to search for the weather conditions in a specific city or country. Users can enter the location they want to check, and the app will display the temperature, humidity, wind speed, and a weather icon for the specified location.

## Features

- **Real-time Weather Data**: Get up-to-date weather information for any city or country you search for.
- **Temperature**: View the current temperature in both Celsius and Fahrenheit.
- **Humidity**: Check the humidity levels to plan your day accordingly.
- **Wind Speed**: Stay informed about the wind speed at your location.
- **Weather Icon**: Visual representation of the weather conditions for quick understanding.
- **User-Friendly Interface**: A clean and intuitive interface for easy navigation.
- **Responsive Design**: Enjoy a seamless experience on various devices, including mobile and desktop.
- **API Integration**: Utilizes the [World Weather Online API](https://www.worldweatheronline.com/weather-api/api/pricing2.aspx) for accurate weather data.


## Getting Started

### Prerequisites
You will need to obtain an API key from [World Weather Online](https://www.worldweatheronline.com/weather-api/api/pricing2.aspx). This API key is required to fetch weather data. Once you have the API key, save it in a `.env` file at the root of your project directory.

```env 
REACT_APP_WEATHER_KEY=YOUR_API_KEY_HERE
```

Make sure to add the .env file to your .gitignore file to keep your API key secret and not expose it in your repository.

### Installation

1. Clone the repository to your local machine: 
   - ```git@github.com:chayboats/weather-app.git```

2. Navigate to the project directory:
   - ```cd weather-app```

3. Install the project dependencies:
   - ```npm install```

### Usage - *React App*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### Available Scripts

In the project directory, you can run:

###### `npm start`

Runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- In the search bar, enter a city or country name to check the weather for that location.

The page will reload when you make changes in the code. *(You may also see any lint errors in the console.)*

## Technologies Used
- React
- [World Weather Online API](https://www.worldweatheronline.com/weather-api/api/docs/local-city-town-weather-api.aspx)

## Acknowledgments
- Special thanks to [World Weather Online](https://www.worldweatheronline.com/weather-api/api/docs/local-city-town-weather-api.aspx) for providing the weather data API.

## Contact Me
If you have any questions, comments, or suggestions, please don't hesitate to reach out. I'd love to hear from you!

**Chaley Boatmon**
- Email: **<u>chaleyboatmon@gmail.com</u>**
- GitHub: [<u>**chayboats**</u>](https://github.com/chayboats)
  
Thank you for visiting my repository!
