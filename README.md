# API Natural Language Test


#### Install modules:
`$ npm install`

The @google-cloud/language package needs to know where the service account key file is. To do this, we need to set a specific environment variable (GOOGLE_APPLICATION_CREDENTIALS) to the location of the file. Recall earlier we saved the file in the root of our project directory. Thus — the command should look like this

`$ GOOGLE_APPLICATION_CREDENTIALS=./secret.json node index.js`

#### Run:
`$ npm start`