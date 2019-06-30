const request = require('request');

const forecastcode = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/09ba551d514116624b19c14ae7b12760/${latitude},${longitude}?units=si&lang=ko`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback(body.error, undefined);
    } else {
      callback(undefined, body);
    }
  });
};

module.exports = forecastcode;
