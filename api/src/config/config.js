const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  port: parseInt(process.env.PORT) || 3001,
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379
  },
  publicImagePath: process.env.PUBLIC_IMAGE_PATCH || '/home/thesolution/Documents/Studium/pokemon-wings/data/images/'
}