module.exports = {
    development: {
      host: "localhost",
      username:"root",
      port: 3306,
      password: "secretkey",
      pool: {
        max: 20,
        min: 5,
      },
    }
};