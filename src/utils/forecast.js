const request = require('request');
const forecast = (lat, long, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=21b96f1b715bb5f195871179f3deb390&query=" + lat + "," + long + "&units=m";
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to location services", undefined);
        } else if (response.body.location.name === null) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined,
                "weather is " + response.body.current.weather_descriptions + ".Temperature here is " + response.body.current.temperature + " C"
            )
        }

    })

}

module.exports = forecast;