require('dotenv').config();
const assert = require('assert');

assert(process.env.IP || 'https://localhost', 'HOST is required');
assert(process.env.PORT || 8080, 'PORT is required');

let data = {};

class envConfig {
  constructor() {
    this.data.Ip = process.env.IP || 'https://localhost',
    this.data.Port = process.env.PORT || 8080,
    this.data.JWT = {
      Secret: process.env.JWT_SECRET,
      RefreshSecret: process.env.JWT_REFRESH_SECRET
    },
    this.data.FireBaseDB = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    },
    this.data.FireBaseDBAdmin = {
      type: process.env.TYPE,
      project_id: process.env.PROJECT_ID,
      private_key_id: process.env.PRIVATE_KEY_ID,
      private_key: process.env.PRIVATE_KEY,
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      auth_uri: process.env.AUTH_URI,
      token_uri: process.env.TOKEN_URI,
      auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_CERT_URL,
      client_x509_cert_url: process.env.CLIENT_CERT_URL
    }
  }


}

module.exports = envConfig;