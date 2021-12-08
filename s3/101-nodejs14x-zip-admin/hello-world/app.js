var AWS = require('aws-sdk');
const S3 = new AWS.S3();

exports.lambdaHandler = async (event, context) => {
    AWS.config.update({ region: 'us-east-1' });
    const response = {
        "statusCode": 200,
        "body": JSON.stringify(await S3.listBuckets().promise()),
        "isBase64Encoded": false
    };
    return response;
};
