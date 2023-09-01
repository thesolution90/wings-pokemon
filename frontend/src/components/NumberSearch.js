import React from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material'
import { useSession } from './SessionContext'

const NumberSearch = () => {
  const { updateSessionData } = useSession()
  const onPressEnter = (event) => {
    if (event.key === 'Enter') {
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