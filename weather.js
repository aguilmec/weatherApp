const cityName = document.querySelector('.city-name');
const countryName = document.querySelector('.country-name');
const cityTemperature = document.querySelector('.city-temperature');
const cityForecast = document.querySelector('.city-forecast');
const mainIconContainer = document.querySelector('.right-container');
const forecastDay1Image = document.querySelector('.forecast-image-container1');
const forecastDay2Image = document.querySelector('.forecast-image-container2');
const forecastDay3Image = document.querySelector('.forecast-image-container3');
const forecastTemperature1 = document.querySelector('.forecast-temperature1');
const forecastTemperature2 = document.querySelector('.forecast-temperature2');
const forecastTemperature3 = document.querySelector('.forecast-temperature3');
const date1 = document.querySelector('.date1');
const date2 = document.querySelector('.date2');
const date3 = document.querySelector('.date3');
const forecast1 = document.querySelector('.condition1');
const forecast2 = document.querySelector('.condition2');
const forecast3 = document.querySelector('.condition3');
const time1 = document.querySelector('.time1');
const time2 = document.querySelector('.time2');
const time3 = document.querySelector('.time3');
const time4 = document.querySelector('.time4');
const time5 = document.querySelector('.time5');
const forecastCondition1 = document.querySelector('.todays-forecast-condition1');
const forecastCondition2 = document.querySelector('.todays-forecast-condition2');
const forecastCondition3 = document.querySelector('.todays-forecast-condition3');
const forecastCondition4 = document.querySelector('.todays-forecast-condition4');
const forecastCondition5 = document.querySelector('.todays-forecast-condition5');
const forecastIcon1 = document.querySelector('.todays-forecast-image1');
const forecastIcon2 = document.querySelector('.todays-forecast-image2');
const forecastIcon3 = document.querySelector('.todays-forecast-image3');
const forecastIcon4 = document.querySelector('.todays-forecast-image4');
const forecastIcon5 = document.querySelector('.todays-forecast-image5');
const inputElement = document.querySelector('.city-input');
const searchButton = document.querySelector('.search-button');
const windSpeed = document.querySelector('.wind-speed');
const feelsLike = document.querySelector('.real-feel');
const humidityPercentage = document.querySelector('.humidity-percentage');
const windDir = document.querySelector('.wind-dir');

searchButton.addEventListener('click', ()=>{searchCity()});

let url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '322f7be19cmsh087b38622ea9079p19f488jsn540a6375d195',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


async function getData(url, options){
    const response = await fetch(url,options);
    const result = await response.json();
    updateData(result);
};

getData(url);

function searchCity(){
    let value = inputElement.value || 'London';
    console.log(value)
    url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${value}&days=3`;
    getData(url, options)
};

getData(url, options);

function updateData(result){
    cityName.innerHTML = result.location.name;
    countryName.innerHTML = result.location.country;
    cityTemperature.innerHTML = `${result.current.temp_c} Celcius`;
    cityForecast.innerHTML = result.current.condition.text;
    mainIconContainer.innerHTML = `<img class = "icon" src = "./icons/${updateIcon(result)}.png">`;
    forecastDay1Image.innerHTML = `<img class = "forecast-image-container1" src = "./icons/${updateForecastIcon(result,0)}.png">`;
    forecastDay2Image.innerHTML = `<img class = "forecast-image-container2" src = "./icons/${updateForecastIcon(result,1)}.png">`;
    forecastDay3Image.innerHTML = `<img class = "forecast-image-container3" src = "./icons/${updateForecastIcon(result,2)}.png">`;
    forecastTemperature1.innerHTML = `${result.forecast.forecastday[0].day.avgtemp_c} Celcius`;
    forecastTemperature2.innerHTML = `${result.forecast.forecastday[1].day.avgtemp_c} Celcius`;
    forecastTemperature3.innerHTML = `${result.forecast.forecastday[2].day.avgtemp_c} Celcius`;
    date1.innerHTML = result.forecast.forecastday[0].date;
    date2.innerHTML = result.forecast.forecastday[1].date;
    date3.innerHTML = result.forecast.forecastday[2].date;
    forecast1.innerHTML = result.forecast.forecastday[0].day.condition.text;
    forecast2.innerHTML = result.forecast.forecastday[1].day.condition.text;
    forecast3.innerHTML = result.forecast.forecastday[2].day.condition.text;
    forecastCondition1.innerHTML = result.forecast.forecastday[0].hour[6].condition.text;
    forecastCondition2.innerHTML = result.forecast.forecastday[0].hour[10].condition.text;
    forecastCondition3.innerHTML = result.forecast.forecastday[0].hour[14].condition.text;
    forecastCondition4.innerHTML = result.forecast.forecastday[0].hour[18].condition.text;
    forecastCondition5.innerHTML = result.forecast.forecastday[0].hour[22].condition.text;
    forecastIcon1.innerHTML = `<img class = "todays-forecast-image1" src = "./icons/${updateTodaysForecastIcon(result,6)}.png">`;
    forecastIcon2.innerHTML = `<img class = "todays-forecast-image2" src = "./icons/${updateTodaysForecastIcon(result,10)}.png">`;
    forecastIcon3.innerHTML = `<img class = "todays-forecast-image3" src = "./icons/${updateTodaysForecastIcon(result,14)}.png">`;
    forecastIcon4.innerHTML = `<img class = "todays-forecast-image4" src = "./icons/${updateTodaysForecastIcon(result,18)}.png">`;
    forecastIcon5.innerHTML = `<img class = "todays-forecast-image5" src = "./icons/${updateTodaysForecastIcon(result,22)}.png">`;
    windSpeed.innerHTML = `${result.current.wind_kph} Kmph`;
    feelsLike.innerHTML = `${result.current.feelslike_c} Celcius`;
    humidityPercentage.innerHTML = `${result.current.humidity} %`;
    windDir.innerHTML = `${result.current.wind_dir}`;
    //todays-forecast-image
    console.log(result);
}

function updateIcon(result){
    let value;
    if(result.current.condition.text.includes('Sunny')){
        return "sunny"
    }else if(result.current.condition.text.includes('Cloudy')){
        return "cloudy"
    }else if(result.current.condition.text.includes('Partly cloudy')){
        return "partly-cloudy"
    }else if(result.current.condition.text.includes('Rainy')){
        return "rainy"
    }else if(result.current.condition.text.includes('Snowy')){
        return "snowy"
    };
    if(result.current.condition.text.includes('Moderate rain')){
        return "rainy"
    }else if(result.current.condition.text.includes('Cloudy')){
        return "cloudy"
    }else if(result.current.condition.text.includes('Partly cloudy')){
        return "partly-cloudy"
    }else if(result.current.condition.text.includes('Patchy-rain')){
        return "patchy-rain"
    }else if(result.current.condition.text.includes('rain')){
        return "rain"
    }else if(result.current.condition.text.includes('Clear')){
        return "sunny"
    };
};

function updateForecastIcon(result,index){
    let value;
    if(result.forecast.forecastday[index].day.condition.text.includes('Sunny')){
        return "sunny"
    }else if(result.forecast.forecastday[index].day.condition.text.includes('Cloudy')){
        return "cloudy"
    }else if(result.forecast.forecastday[index].day.condition.text.includes('Partly cloudy')){
        return "partly-cloudy"
    }else if(result.forecast.forecastday[index].day.condition.text.includes('Rainy')){
        return "rainy"
    }else if(result.forecast.forecastday[index].day.condition.text.includes('Snowy')){
        return "snowy"
    }else if(result.forecast.forecastday[index].day.condition.text.includes('Moderate rain')){
        return "rainy"
    }else if(result.forecast.forecastday[index].day.condition.text.includes('Patchy rain')){
        return "patchy-rain"
    }else if(result.forecast.forecastday[index].day.condition.text.includes('rain')){
        return "rain"
    }else if(result.forecast.forecastday[index].day.condition.text.includes('Overcast')){
        return "cloudy"
    };
};

function updateTodaysForecastIcon(result,index){
    let value;
    if(result.forecast.forecastday[0].hour[index].condition.text.includes('Sunny')){
        return "sunny"
    }else if(result.forecast.forecastday[0].hour[index].condition.text.includes('Cloudy')){
        return "cloudy"
    }else if(result.forecast.forecastday[0].hour[index].condition.text.includes('Partly cloudy')){
        return "partly-cloudy"
    }else if(result.forecast.forecastday[0].hour[index].condition.text.includes('Rainy')){
        return "rainy"
    }else if(result.forecast.forecastday[0].hour[index].condition.text.includes('Snowy')){
        return "snowy"
    }else if(result.forecast.forecastday[0].hour[index].condition.text.includes('Moderate rain')){
        return "rainy"
    }else if(result.forecast.forecastday[0].hour[index].condition.text.includes('Patchy rain')){
        return "patchy-rain"
    }else if(result.forecast.forecastday[0].hour[index].condition.text.includes('rain')){
        return "rain"
    }else if(result.forecast.forecastday[0].hour[index].condition.text.includes('Clear')){
        return "sunny"
    };
};


//result.forecast.forecastday[0].hour[12].temp_c