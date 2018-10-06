const { WebClient } = require('@slack/client');
const fs = require('fs');

const token = process.env.token;
const web = new WebClient(token);

exports.handler = (event, context, callback) => {
  const quotes = JSON.parse(fs.readFileSync('./quotes.json', 'utf8'));
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const channel = process.env.channel;
  const message = `Good morning everyone!\n\n\`\`\`${quote.quote}\n\n-${quote.author}\`\`\``

  web.chat.postMessage({
    channel: channel,
    text: message
  })
    .then((res) => {
      console.log("*********************");
      console.log('Message sent: ', res.ts);
      console.log("*********************");
    })
    .catch((error) => {
      console.log("---------------------");
      console.log(error);
      console.log("---------------------");
    });

  const response = {
    statusCode: 200,
    body: JSON.stringify('All good')
  };

  callback(null);
};
