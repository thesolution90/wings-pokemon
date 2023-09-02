const express = require('express')
const redis = require('../service/redis')
const local = require('../service/local')

const router = express.Router()

// In dieser Datei stehen alle Routen dieser Schnittstelle.

router
  .route('/getimage/:pokeId/:isShiny')
  .get((req, res) => {
    // Extraktion der Pfadparameter
    const pokeId = req.params.pokeId
    const isShiny = JSON.parse(req.params.isShiny.toLowerCase())
    // Ausführung der Funktion und Senden der Rückmeldung
    res.status(200).sendFile(local.getImagePath(pokeId, isShiny))    
  })

router
  .route('/filter/:type/:lang')
  .get((req, res) => {
    // Extraktion der Pfadparameter
    const pokeType = req.params.type
    const lang = req.params.lang
    // Ausführung der Funktion und Senden der Rückmeldung
    res.json(local.filterForPokemonType(pokeType, lang))      
  })

router
  .route('/search/:id/:lang')
  .get((req, res) => {
    // Extraktion der Pfadparameter
    const pokeId = parseInt(req.params.id)
    const lang = req.params.lang
    // Ausführung der Funktion und Senden der Rückmeldung
    res.json(local.searchForPokemonId(pokeId, lang))    
  })

router
  .route('/getall/:lang')
  .get((req, res) => {
    // Extraktion der Pfadparameter
    const lang = req.params.lang
    // Ausführung der Funktion und Senden der Rückmeldung
    res.json(local.getAllPokemonsInLanguage(lang))    
  })

router
  .route('/annotation/:uuid')
  .get(async (req, res) => {
    // Extraktion der Pfadparameter
    const uuid = req.params.uuid
    // Ausführung der Funktion und Senden der Rückmeldung
    res.json(await redis.getMessage(uuid))
  })
  .post(async (req, res) => {
    // Extraktion der Pfadparameter
    const uuid = req.params.uuid
    const data = req.body.message
    // Ausführung der Funktion und Senden der Rückmeldung
    res.json(await redis.setMessage(uuid, data))
  })

module.exports = router