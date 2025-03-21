

export default async function getWeather(city) {
    try {
        const apiKey = ""; // Replace with your API key
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        const response = await fetch(url);
        
        const mainPage = document.querySelector("#main_page")
      
        const weatherData = await response.json();
        

        mainPage.textContent = `Weather in ${city}: ${weatherData.location.name}  ,  region of ${city}: ${weatherData.location.region}   , temprature in celcius ${city}: ${weatherData.current.temp_c}`
        
        
        
        /*
        console.log(`Weather in ${city}: ${weatherData.location.name}`);
        console.log(`region of ${city}: ${weatherData.location.region}`)
        console.log(`temprature in celcius ${city}: ${weatherData.current.temp_c}`)
        */



        // console.log(`Temperature: ${weatherData.main.temp}°C`);

        console.log(weatherData);
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
    
}

// Example usage

