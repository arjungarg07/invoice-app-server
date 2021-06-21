module.exports = {
    development: {
      host: process.env.DEV_DB_HOST,
      port: process.env.DEV_DB_PORT,
      username: process.env.DEV_DB_USERNAME,
      password: process.env.DEV_DB_PASSWORD,
      pool: {
        max: 20,
        min: 5,
      }
    }
};