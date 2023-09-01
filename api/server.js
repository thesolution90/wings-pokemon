const express = require('express')
const path = require('path')
const pokeList = require('./src/config/pokemon')

const app = express()

const publicDirectoryPath = path.join(__dirname, 'public');
const cors = require('cors');
app.use(express.static(publicDirectoryPath))
app.use(cors());
app.options('*', cors());
app.get('/health', (req, res) => {
    res.send('I am healthy')
})

app.get('/getimage/:pokeId/:isShiny', (req, res) => {
    const id = req.params.pokeId
    const isShiny = JSON.parse(req.params.isShiny.toLowerCase())
    let filename = `pokemon_icon_${id}.png`
    if (isShiny) {
        filename = `pokemon_icon_${id}_shiny.png`
    }
    const imagePath = path.join(publicDirectoryPath, filename)
    res.sendFile(imagePath)
})

app.get('/getfilteredpokeinfo/:type/:lang', (req, res) => {
    const pokeType = req.params.type
    const lang = req.params.lang

    const response = pokeList
        .filter((element) => element.types.includes(pokeType))
        .map((element) => {
            const newName = element.name[lang]
            let uuid
            if (element.hasOwnProperty('type')) {
                uuid = `${element.dex.toString().padStart(3, '0')}${element.type}`
            } else {
                uuid = `${element.dex.toString().padStart(3, '0')}_00`
            }
            if (element.hasOwnProperty('fn')) {
                uuid = element.fn
            }
            return {
                dex: element.dex,
                name: newName,
                types: element.types,
                shiny_released: element.shiny_released,
                family: element.family,
                uuid: uuid
            }
        })
    res.json(response)        
})

app.get('/searchforpokeid/:id/:lang', (req, res) => {
    const pokeId = parseInt(req.params.id)
    const lang = req.params.lang

    const response = pokeList
        .filter((element) => element.dex === pokeId)
        .map((element) => {
            const newName = element.name[lang]
            let uuid
            if (element.hasOwnProperty('type')) {
                uuid = `${element.dex.toString().padStart(3, '0')}${element.type}`
            } else {
                uuid = `${element.dex.toString().padStart(3, '0')}_00`
            }
            if (element.hasOwnProperty('fn')) {
                uuid = element.fn
            }
            return {
                dex: element.dex,
                name: newName,
                types: element.types,
                shiny_released: element.shiny_released,
                family: element.family,
                uuid: uuid
            }
        })
    res.json(response) 
})

app.get('/getallpokeinfo/:lang', (req, res) => {
    lang = req.params.lang
    
    const response = pokeList.map((element) => {
        const newName = element.name[lang]
        let uuid
        if (element.hasOwnProperty('type')) {
            uuid = `${element.dex.toString().padStart(3, '0')}${element.type}`
        } else {
            uuid = `${element.dex.toString().padStart(3, '0')}_00`
        }
        if (element.hasOwnProperty('fn')) {
            uuid = element.fn
        }
        return {
            dex: element.dex,
            name: newName,
            types: element.types,
            shiny_released: element.shiny_released,
            family: element.family,
            uuid: uuid
        }
    })
    res.json(response)
})

app.listen(3001, () => console.log('Listening on port 3001'))