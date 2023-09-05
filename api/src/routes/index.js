const express = require('express')
const redis = require('../service/redis')
const local = require('../service/local')

const router = express.Router()

// In dieser Datei stehen alle Routen dieser Schnittstelle.

// Endpunkt für alle Bilder zum Download
// uuid in der Form id_type. Bspw: 001_00
// IsShiny: true oder false
router
  .route('/getimage/:uuid/:isShiny')
  .get((req, res) => {
    // Extraktion der Pfadparameter
    const uuid = req.params.uuid
    const isShiny = JSON.parse(req.params.isShiny.toLowerCase())
    // Ausführung der Funktion und Senden der Rückmeldung
    res.status(200).sendFile(local.getImagePath(uuid, isShiny))    
  })

// Endpunkt wo gefiltete Pokemons zurückgegeben werden
// Type: Filterbegriff
// Lang: Sprache
router
  .route('/filter/:type/:lang')
  .get((req, res) => {
    // Extraktion der Pfadparameter
    const pokeType = req.params.type
    const lang = req.params.lang
    // Ausführung der Funktion und Senden der Rückmeldung
    res.json(local.filterForPokemonType(pokeType, lang))      
  })

// Endpunkt bei dem nach einer PokeId gesucht werden kann
// ID: Suchbegriff
// Lang: Sprache
router
  .route('/search/:id/:lang')
  .get((req, res) => {
    // Extraktion der Pfadparameter
    const pokeId = parseInt(req.params.id)
    const lang = req.params.lang
    // Ausführung der Funktion und Senden der Rückmeldung
    res.json(local.searchForPokemonId(pokeId, lang))    
  })

// Auslieferung aller Pokemons
// Lang: Sprache
router
  .route('/getall/:lang')
  .get((req, res) => {
    // Extraktion der Pfadparameter
    const lang = req.params.lang
    // Ausführung der Funktion und Senden der Rückmeldung
    res.json(local.getAllPokemonsInLanguage(lang))    
  })

// Schreiben (POST) und Lesen (GET) der Kommentare
// uuid s.o.
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