// src/components/LanguageDropdown.js
import React from 'react';
import { Select, MenuItem } from '@mui/material'
import { useSession } from './SessionContext'

const LanguageDropdown = () => {

  const { sessionData, updateSessionData } = useSession()
  const onLanguageChange = (event) => {
    const selectedLanguage = event.target.value
    updateSessionData({ selectedLanguage })
  }

  return (
    <div className="language-list">
      <Select
        name="selectList"
        id="selectLanguage"
        // defaultValue={'en'}
        value={sessionData.selectedLanguage}
        sx={{ minWidth: 120 }}
        onChange={onLanguageChange}
      >
        <MenuItem value={'en'}>English</MenuItem>
        <MenuItem value={'de'}>German</MenuItem>
        <MenuItem value={'fr'}>French</MenuItem>
        <MenuItem value={'ja'}>Japanese</MenuItem>
        <MenuItem value={'kr'}>Korean</MenuItem>
        <MenuItem value={'zh'}>Chinese</MenuItem>
      </Select>
    </div>
  );
};

export default LanguageDropdown;
