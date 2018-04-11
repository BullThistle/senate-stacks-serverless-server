'use strict';
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.OPEN_SECRETS_API;

module.exports.legislators = (event, context, callback) => {
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: JSON.stringify()
    }),
  };

  callback(null, response);
};