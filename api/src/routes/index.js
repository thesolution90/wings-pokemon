const express = require('express')
const redis = require('../service/redis')
const local = require('../service/local')

const router = express.Router()

router
  .route('/getimage/:pokeId/:isShiny')
  .get((req, res) => {
    const pokeId = req.params.pokeId
    const isShiny = JSON.parse(req.params.isShiny.toLowerCase())

    res.status(200).sendFile(local.getImagePath(pokeId, isShiny))    
  })

router
  .route('/filter/:type/:lang')
  .get((req, res) => {
    const pokeType = req.params.type
    const lang = req.params.lang

    res.json(local.filterForPokemonType(pokeType, lang))      
  })

router
  .route('/search/:id/:lang')
  .get((req, res) => {
    const pokeId = parseInt(req.params.id)
    const lang = req.params.lang

    res.json(local.searchForPokemonId(pokeId, lang))    
  })

router
  .route('/getall/:lang')
  .get((req, res) => {
    const lang = req.params.lang

    res.json(local.getAllPokemonsInLanguage(lang))    
  })

router
  .route('/annotation/:uuid')
  .get(async (req, res) => {
    const uuid = req.params.uuid

    res.json(await redis.getMessage(uuid))
  })
  .post(async (req, res) => {
    const uuid = req.params.uuid
    const data = req.body.message

    res.json(await redis.setMessage(uuid, data))
  })

module.exports = router