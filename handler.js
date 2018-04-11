'use strict';
const request = require('request');
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.OPEN_SECRETS_API;

module.exports.legislators = (event, context, callback) => {

  const state = event.pathParameters.state;
  const url = `https://www.opensecrets.org/api/?method=getLegislators&id=${state}&apikey=${apiKey}&output=json`;
  
  request(url, function (err, response, body) {
    if (body === 'Resource not found') {
      console.log('Resource not found');
    } else {
      if(err){
        console.log('Request error');
      } else {
        const legislators = JSON.parse(body);
        if(legislators.response == undefined){
          console.log('Response is undefined');
        } else {
          const response = {
            statusCode: 200,
            body: JSON.stringify({
              legislators: legislators.response.legislator
            }),
          };
          callback(null, response);
        }
      }
    }
  });
};

module.exports.legislator = (event, context, callback) => {
  
  const cid = event.pathParameters.cid;
  const url = `https://www.opensecrets.org/api/?method=candContrib&cid=${cid}&cycle=2018&apikey=${apiKey}&output=json`;
  
  request(url, function (err, response, body) {
    console.log('Made it in to request');
    if (body === 'Resource not found') {
      console.log('Resource not found');
    } else {
      if(err){
        console.log('Request error');
      } else {
        const legislator = JSON.parse(body);
        if(legislator.response == undefined){
          console.log('Response is undefined');
        } else {
          const response = {
            statusCode: 200,
            body: JSON.stringify({
              legislator: legislator.response.contributors
            }),
          };
          callback(null, response);
        }
      }
    }
  });
};