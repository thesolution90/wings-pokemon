import React from 'react';
import { Select, MenuItem, FormControl, FormHelperText } from '@mui/material'
import { useSession } from '../context/SessionContext'

// Das Dropdown für den PokeType

const TypeDropdown = () => {

  const { sessionData, updateSessionData } = useSession()
  const onFilterChange = (event) => {
    const selectedType = event.target.value
    const searchString = ''
    updateSessionData({ selectedType, searchString })
  }

  return (
    <div className="filter-list">
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <FormHelperText>Filter for Pokemon Type</FormHelperText>
        <Select
          name="filterList" 
          id="selectFilter"
          value={sessionData.selectedType}
          label="Age"
          onChange={onFilterChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'grass'}>Grass</MenuItem>
          <MenuItem value={'poison'}>Poison</MenuItem>
          <MenuItem value={'fire'}>Fire</MenuItem>
          <MenuItem value={'flying'}>Flying</MenuItem>
          <MenuItem value={'water'}>Water</MenuItem>
          <MenuItem value={'bug'}>Bug</MenuItem>
          <MenuItem value={'normal'}>Normal</MenuItem>
          <MenuItem value={'psychic'}>Psychic</MenuItem>
          <MenuItem value={'electric'}>Electric</MenuItem>
          <MenuItem value={'rock'}>Rock</MenuItem>
          <MenuItem value={'ghost'}>Ghost</MenuItem>
          <MenuItem value={'ice'}>Ice</MenuItem> 
          <MenuItem value={'fighting'}>Fighting</MenuItem> 
          <MenuItem value={'fairy'}>Fairy</MenuItem> 
          <MenuItem value={'ground'}>Ground</MenuItem> 
        </Select>
      </FormControl>
    </div>
  );
};

export default TypeDropdown