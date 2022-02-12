let weather = {
    "apiKey": "c488e34f8e823d9b29a93ae6d242f319",

    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=+"
            + city 
            +"&units=metric&appid="
             +this.apiKey
            )
        .then((response) =>response.json())
        .then((data) => this.displayWeather(data));


        
    },
    displayWeather : function (data) {
        
        const {name} = data;
        const  {country} = data.sys;
        const {icon, description} = data.weather[0];
        const {temp, humidity,feels_like} = data.main;
        const {speed} = data.wind;

        console.log(name,country.toLowerCase(),icon,description,temp,feels_like,humidity,speed)

        document.querySelector(".city").innerText = name
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector(".flag").src = "https://flagcdn.com/"+country.toLowerCase()+".svg"
        document.querySelector(".flag").width = "40"
        document.querySelector(".description").innerText = description
        document.querySelector(".temp").innerText = Math.round(temp)+"°C"
        document.querySelector(".feel").innerText = "Feels like "+Math.round(feels_like)+"°C"
        document.querySelector(".humidity").innerText = "Humidity: "+humidity+"%"
        document.querySelector(".wind").innerText = "Wind speed: " + speed +"km/h"
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".previous").style.display = "none"
    

      if (description.includes("clouds")) {
         
          document.body.style.background = "url(images/clouds2.jpg) no-repeat fixed center"
          document.body.style.backgroundSize = "cover"
      }

     else if (description.includes("clear")) {
        document.body.style.background = "url(images/sunny.jpg) no-repeat fixed center"
          document.body.style.backgroundSize = "cover"
    }

   else if (description.includes("snow")) {
        document.body.style.background = "url(images/snow3.jpg) no-repeat fixed center"
        document.body.style.backgroundSize = "cover"
    }

  else  if (description.includes("rain")) {
        document.body.style.background = "url(images/rain.jpg) no-repeat fixed center"
          document.body.style.backgroundSize = "cover"
    }

   else if (description.includes("thunderstorm")) {
        document.body.style.background = "url(images/thunder.jpg) no-repeat fixed center"
          document.body.style.backgroundSize = "cover"
    }

  else  if (description.includes("drizzle")) {
        document.body.style.background = "url(images/rain2.jpg) no-repeat fixed center"
        document.body.style.backgroundSize = "cover"
    }
  else  if (description.includes("fog")) {
        document.body.style.background = "url(images/fog.jpg) no-repeat fixed center"
        document.body.style.backgroundSize = "cover"
    }
    else {
        document.body.style.background = "url(images/night.jpg) no-repeat fixed center"
        document.body.style.backgroundSize = "cover"
    }



    },
    search: function()
    {
        
        this.fetchWeather(document.querySelector(".search-bar").value)

        document.querySelector(".defaulttext").innerText = "Loading..."
        
        
    }



};


document
.querySelector(".search_btn")
.addEventListener("click", function(){
    weather.search();
});
document
.querySelector(".search-bar")
.addEventListener("keyup", function(){

    if (event.key == "Enter") {
        weather.search();

    }
    
});

document.querySelector(".weather").style.display = "none"
document.querySelector(".previous").style.display = "block"