const request = require('request');
module.exports = () => (options, callback = () => {}) =>
  request(
    {
      timeout: 60000,
      json: true,
      ...options,
    },
    callback,
  );
