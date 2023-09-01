import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { useSession } from './SessionContext';
import TextField from '@mui/material/TextField';
import PokedexDrawer from './PokedexDrawer';

const GridContainer = () => {

  const [data, setData] = useState([])
  const { sessionData } = useSession()
  const [userInput, setUserInput] = useState('')
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value); // Update the user input state
  };

  useEffect(() => {
    let apiUrl
    console.log(sessionData)
    if (sessionData.selectedType === '') {
      if (sessionData.searchString === '') {
        apiUrl = `http://localhost:3001/getallpokeinfo/${sessionData.selectedLanguage}`
      } else {
        apiUrl = `http://localhost:3001/searchforpokeid/${sessionData.searchString}/${sessionData.selectedLanguage}`
      }
    } else {
      apiUrl = `http://localhost:3001/getfilteredpokeinfo/${sessionData.selectedType}/${sessionData.selectedLanguage}`
    }
    fetch(apiUrl, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((jsonData) => {
      setData(jsonData)
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    })
  }, [sessionData.selectedLanguage, sessionData.selectedType, sessionData.searchString])

  return (
    <div className='grid-container'>
      <Grid
        container
        spacing={2}
      >
        {data.map((item, index) => (
          <Grid key={index} item>
            <Paper
              sx={{
                height: 280,
                width: 300,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px'
              }}
            >
              <Typography variant="h6">{item.name}</Typography>
              <div style={{ display: 'flex', gap: '16px' }}>
                <img loading="lazy"
                  src={`http://localhost:3001/getimage/${item.uuid}/false`}
                  alt={`Pokemon ${item.dex}`}
                  style={{ maxWidth: '150px'}}
                />
                <img loading="lazy"
                  src={`http://localhost:3001/getimage/${item.uuid}/true`}
                  alt={`Shiny Pokemon ${item.dex}`}
                  style={{ maxWidth: '150px'}}
                />
              </div>
              <Typography sx={{ fontSize: 12 }}>
                This Pokemon belongs to the family of {item.family} Pokemons. The right picture shows the shiny-released Pokemon.
                This Pokemon is of type {item.types.length === 1 ? item.types[0] : `${item.types[0]} and ${item.types[1]}`}.
              </Typography>
              <PokedexDrawer uuid={item.uuid}/>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default GridContainer