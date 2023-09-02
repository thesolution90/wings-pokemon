const express = require('express')
const compression = require('compression')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')
const config = require('./config/config')

const app = express()

app.use(cors())
app.options('*', cors())

app.use(express.json())

app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', routes)

app.listen(config.port, () => console.log(`Listening on port ${config.port}`))
