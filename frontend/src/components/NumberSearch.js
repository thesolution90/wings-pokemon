import React from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material'
import { useSession } from '../context/SessionContext'

// Das Textfeld um nach einer PokeId zu suchen
const NumberSearch = () => {

  // Laden der gemeinsamen Session Daten
  const { updateSessionData } = useSession()

  // Funktionsausführung beim Tastendruck
  const onPressEnter = (event) => {
    // Wenn Enter gedrückt wird
    if (event.key === 'Enter') {
      // Suchstring befüllen und Filterung leeren
      const searchString = event.target.value
      const selectedType = ''
      updateSessionData({ searchString, selectedType })
    }
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
      <FormHelperText>Search for Pokedex ID</FormHelperText>
      <TextField
        id="searchField"
        variant="outlined"
        onKeyPress={onPressEnter}
      />
    </FormControl>
  )   
}

export default NumberSearch