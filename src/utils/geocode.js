const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?language=ko&access_token=pk.eyJ1IjoiZ3llb2wxMjEyIiwiYSI6ImNqeGZ2eTFmdDA5dGQzbm84NnN6ZmhtNGYifQ.9BBwAe-TkLgMtBSeFL1y5g&limit=1`;

  request({ url, json: true }, (error, { body: { features } }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (!features.length) {
      callback('Unable to find location.', undefined);
    } else {
      const { center, place_name } = features[0];
      callback(undefined, {
        latitude: center[1],
        longitude: center[0],
        location: place_name
      });
    }
  });
};

module.exports = geocode;
