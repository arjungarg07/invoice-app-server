module.exports = {
    development: {
      host: "localhost",
      port: 3306,
      password: "adminadmin",
      pool: {
        max: 20,
        min: 5,
      },
    }
};