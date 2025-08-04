const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const apiKey = process.env.NEWSAPI_KEY; // ✅ This reads your env variable
  const category = event.queryStringParameters.category || 'general';
  const country = event.queryStringParameters.country || 'in';
  const pageSize = event.queryStringParameters.pageSize || 8;
  const page = event.queryStringParameters.page || 1;

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
