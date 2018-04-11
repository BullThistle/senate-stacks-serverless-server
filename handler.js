'use strict';

module.exports.legislators = (event, context, callback) => {
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: JSON.stringify()
    }),
  };

  callback(null, response);
};