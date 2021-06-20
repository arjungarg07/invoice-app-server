module.exports = {
    development: {
      host: "localhost",
      port: 3306,
      password: "root",
      pool: {
        max: 20,
        min: 5,
      },
    }
}