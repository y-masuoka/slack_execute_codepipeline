'use strict';

const querystring = require('querystring');

const AWS = require('aws-sdk');
const CodePipeline = new AWS.CodePipeline({ apiVersion: '2015-07-09' });

module.exports.execute = (event, context, callback) => {
  const params = querystring.parse(event.body);
  if(params.token !== process.env.TOKEN) {
    return context.succeed({statusCode: 403, body: '{"message":"Forbidden"}'});
  }

  const execute = (params) => {
    return new Promise((resolve, reject) => {
      CodePipeline.startPipelineExecution({
        name: params.text.trim()
      }, function(err, data) {
        if (err) {
          console.log(err, err.stack);
          reject({statusCode: 500, body: '{"message":"Internal server error"}'});
        }
        resolve({statusCode: 200, body: '{"message":"Deploy ' + params.text.trim() + '"}'});
      });

    });
  };
  
  execute(params).then((response) => {
    return context.succeed(response);
  });
}
