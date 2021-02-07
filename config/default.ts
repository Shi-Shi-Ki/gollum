export default {
  database: {
    dialect: "mysql",
    username: "root",
    host: "127.0.0.1",
    database: "gollum",
    password: "developer",
    sync: {
      alter: false
    }
  },
  grpc: {
    port: 50051
  },
  typeorm: {
    type: "mysql",
    username: "root",
    host: "127.0.0.1",
    database: "gollum",
    password: "developer",
    logging: true,
    synchronize: false
  },
  logger: {
    level: "debug"
  }
}
