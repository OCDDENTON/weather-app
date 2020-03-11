const request = require('request')

const forecast = ((latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f23b0a5bd497fd9f21d45cfe82a03b47/'+ encodeURIComponent(latitude) +','+ encodeURIComponent(longitude)
    
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to the weather service', undefined)
        }
        else if(body.error){
            callback('Unable to find the location', undefined)
        }
        else{
            const currentWeather = body.currently;
            callback(undefined, body.daily.data[0].summary +" It is currently " + currentWeather.temperature + " degrees out. There is a " + currentWeather.precipProbability+ "% chance of rain.")
        }
    })
})

module.exports = forecast