const Redis = require("ioredis")
const config = require('./config')

// Konfiguration des Redis Clients
module.exports = new Redis({
  host: config.redis.host,
  port: config.redis.port,
})