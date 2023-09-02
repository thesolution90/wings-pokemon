const path = require('path')
const config = require('../config/config')
const pokeList = require('../config/pokemon')

// In dieser Datei stehen die eigentlichen Funktionen
// die für die Filterung und die Suchfunktion bei der JSON
// Datei verwendet werden

// Hier wird der korrekte Pfad und Bilderbenamung durchgeführt
const getImagePath = (pokeId, isShiny) => {
	let filename = `pokemon_icon_${pokeId}.png`
	if (isShiny) {
			filename = `pokemon_icon_${pokeId}_shiny.png`
	}
	return imagePath = path.join(config.publicImagePath, filename)  
}

// Basierend auf der Sprache werden alle Pokemons in der
// korrekten Sprache ausgegeben
const getAllPokemonsInLanguage = (lang) => {
	// Hier wird das JSON Array zu einem neuen Response Array gemapped
	const response = pokeList.map((element) => {
		const newName = element.name[lang]
		let uuid
		if (element.hasOwnProperty('type')) {
				// Hier wird eine uuid gebildet, die aus dem dreistelligen dex
				// Identifier und dem Type danach noch besteht. Sonst wird nur 00 angehängt
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

// In dieser Funktion werden nur die Pokemon JSON Maps zurückgegeben, die
// zur PokeId passen
const searchForPokemonId = (pokeId, lang) => {
	const response = pokeList
  // Nur das Element mit der richtigen PokeId
	.filter((element) => element.dex === pokeId)
  // Wie oben wieder Sprachanpassungen
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

// In dieser Funktion werden nur die Pokemon JSON Maps zurückgegeben, die
// zum dementsprechenden pokeType passen
const filterForPokemonType = (pokeType, lang) => {
	const response = pokeList
  // Nur das Element mit dem richtigen Type
	.filter((element) => element.types.includes(pokeType))
  // Wie oben wieder Sprachanpassungen
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