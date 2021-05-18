'use strict';
async function quickstart(file) {
  // Google Cloud client library
  const language = require('@google-cloud/language');
  const fs = require('fs');

  var data = '';

  try {
    data = fs.readFileSync(file, 'utf8');
  } catch(e) {
    console.log('Error:', e.stack);
  }

  const client = new language.LanguageServiceClient();

  const document = {
    content: data,
    type: 'PLAIN_TEXT',
    language: 'pt'
  };

  const [result] = await client.analyzeSentiment({document: document});
  const sentiment = result.documentSentiment;

  console.log(`Arquivo: ${file}`);
  console.log(`Pontuação de sentimento: ${sentiment.score}`);
  console.log(`Magnitude do sentimento: ${sentiment.magnitude}`);
  console.log(`--`)
}


quickstart('./texto-1.txt').catch(console.error);