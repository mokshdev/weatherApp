console.log("hello");



async function getWeather(city) {
    try {
        const apiKey = "4d567a5ebacb479787464206242904"; // Replace with your API key
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        const response = await fetch(url);
        
      
        const weatherData = await response.json();
        
        console.log(`Weather in ${city}: ${weatherData.location.name}`);
        console.log(`region of ${city}: ${weatherData.location.region}`)
        console.log(`temprature in celcius ${city}: ${weatherData.current.temp_c}`)
        
        // console.log(`Temperature: ${weatherData.main.temp}°C`);

        console.log(weatherData);
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Example usage
getWeather("Delhi");
