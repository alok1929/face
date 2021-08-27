const request=require('request');
const config=require("./config.json");
const argv=require('yargs').argv;
           
           let apiKey=(config.WEATHER_KEY);
            let city=argv.c;
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

            const weatherPics = {
                "Clouds": "☁️ ☁️",
                "Rain": "☔️",
                "Haze": "🌫",
                "Thunderstorm": "⛈",
                "Sunny": "☀️",
                "Mist": "🌫",
                "Clear": "☀️"
              }

            request(url, function (err, response, body) {
                if(err){
                  console.log('error:', error);
                } else {
                    let weather=JSON.parse(body);//after fetching the info ,it converts it into json format,so it is easier to read and also use it 
                    console.log(weather);
                    let message=`It's ${weather.main.temp} degree celsius in 🎯${weather.name}, ${weather.sys.country} , ${weatherPics[cweather]},oooo ${cweather}`;

                }
            }
            );
