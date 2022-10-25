# Node.js Server

# Installation and usage

- Create a folder in the root directry with name config
- Create a file default.js inside it. (if using for prodcution then create production.js as well)
- add the following information changing the configuration to your settings 
- make sure that the database string is valid and database name exists

```javascript
module.exports = {

  api: {
    port: 3001,
    root: '/api',
  },

  frontEnd: {
    domain: 'http://localhost:4200',
  },

  path:{
    FILE_LOCATION : '/temp/'
  },

  auth: {
    jwt: {
      accessTokenSecret: '0d7c5c5f-768c-4d98-8900-13aadaa21939',
      refreshTokenSecret: '1a7v8c0l-391k-1f82-4492-tha3taa11324',
      accessTokenLife: 3600,
      refreshTokenLife: 2592000,
    },
    resetPassword: {
      secret: '56gXxY{+D6/4m#kZ394j2=bT2eHqTAu>r8zAT>yEn:;TM#9*Vh',
      ttl: 86400 * 1000, // 1 day
      algorithm: 'aes256',
      inputEncoding: 'utf8',
      outputEncoding: 'hex',
    },
  },

  mysqldb:{
    HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "demo",
  dialect: "mysql",
  PORT:3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  },
  logger: {
    console: {
      level: 'debug',
    },
    file: {
      logDir: 'logs',
      logFile: 'bundle_node.log',
      level: 'debug',
      maxsize: 1024 * 1024 * 10, // 10MB
      maxFiles: 5,
    },
  },
};

```