const path = require('path')
const config = require('../config/config')
const pokeList = require('../config/pokemon')


const getImagePath = (pokeId, isShiny) => {
	let filename = `pokemon_icon_${pokeId}.png`
	if (isShiny) {
			filename = `pokemon_icon_${pokeId}_shiny.png`
	}
	return imagePath = path.join(config.publicImagePath, filename)  
}

const getAllPokemonsInLanguage = (lang) => {
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
	return response
}

const searchForPokemonId = (pokeId, lang) => {
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
	return response	
}

const filterForPokemonType = (pokeType, lang) => {
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
	return response	
}

module.exports = {
	getImagePath,
	getAllPokemonsInLanguage,
	searchForPokemonId,
	filterForPokemonType
}