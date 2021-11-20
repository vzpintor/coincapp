const {api} = require('@services/config/api');

module.exports = {
  production: false,

  api: {
    baseUrl: 'https://api.coincap.io/v2',
    apikey: 'd196aee4-e510-488d-b0ff-f229ef65a004',
    ...api,
  },
};
