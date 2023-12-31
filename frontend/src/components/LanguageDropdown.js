import React from 'react';
import { Select, MenuItem, FormControl, FormHelperText } from '@mui/material'
import { useSession } from '../context/SessionContext'

// Das Dropdown für die Sprachen
const LanguageDropdown = () => {

  // Laden der Session Daten
  const { sessionData, updateSessionData } = useSession()

  // Update der Session Daten -> Setzen einer neuen Sprache
  const onLanguageChange = (event) => {
    const selectedLanguage = event.target.value
    updateSessionData({ selectedLanguage })
  }

  return (
    <div className="language-list">
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <FormHelperText>Language</FormHelperText>
        <Select
          name="selectList"
          id="selectLanguage"
          value={sessionData.selectedLanguage}
          onChange={onLanguageChange}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'de'}>German</MenuItem>
          <MenuItem value={'fr'}>French</MenuItem>
          <MenuItem value={'ja'}>Japanese</MenuItem>
          <MenuItem value={'kr'}>Korean</MenuItem>
          <MenuItem value={'zh'}>Chinese</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageDropdown;
