module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "example_user",
      password: "example_password",
      database: "example_db"
    }
  },

  production: {
    client: "pg",
    connection: {
      database: "exampleDb"
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
