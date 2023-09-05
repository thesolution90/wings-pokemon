const express = require('express')
const compression = require('compression')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')
const config = require('./config/config')

const app = express()

// Verwenden von CORS Headern
app.use(cors())
app.options('*', cors())

// Verwenden von application/json Header
app.use(express.json())

// Verwenden von Gzip Kompression
app.use(compression())

// Statischer Pfad für alle Bilder
app.use(express.static(path.join(__dirname, 'public')))

// Laden der Endpunkte
app.use('/api', routes)

// Starten des Servers
app.listen(config.port, () => console.log(`Listening on port ${config.port}`))
