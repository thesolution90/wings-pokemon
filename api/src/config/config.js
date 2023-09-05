const dotenv = require('dotenv')

dotenv.config()

// Bedeutung s. README
// Hier werden die Umgebungsvariablen geladen und in ein JSON Objekt verpackt,
// damit die API leicht darauf zugreifen kann.
module.exports = {
  port: parseInt(process.env.PORT) || 3001,
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379
  },
  publicImagePath: process.env.PUBLIC_IMAGE_PATCH || '/home/thesolution/Documents/Studium/pokemon-wings/data/images/'
}