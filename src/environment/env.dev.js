const {api} = require('@services/config/api');

module.exports = {
  production: false,
  socket: 'wss://ws.coincap.io/prices?assets=',
  api: {
    baseUrl: 'https://api.coincap.io/v2',
    baseLogoUrl: 'https://assets.coincap.io/assets/icons/',
    apikey: 'd196aee4-e510-488d-b0ff-f229ef65a004',
    ...api,
  },
};
