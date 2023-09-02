import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { useSession } from '../context/SessionContext';
import PokedexDrawer from './PokedexDrawer';

const GridContainer = () => {

  const [data, setData] = useState([])
  const { sessionData } = useSession()

  useEffect(() => {
    let apiUrl
    console.log(sessionData)
    // Erstmal wird geschaut was wir überhaupt für Sachen von der API haben wollen
    if (sessionData.selectedType === '') {
      // Wenn keine Filterung dann enweder nur neue Sprache oder Suchbegriff
      if (sessionData.searchString === '') {
        apiUrl = `http://localhost:3001/api/getall/${sessionData.selectedLanguage}`
      } else {
        apiUrl = `http://localhost:3001/api/search/${sessionData.searchString}/${sessionData.selectedLanguage}`
      }
    } else {
      // Sonst doch Filterung
      apiUrl = `http://localhost:3001/api/filter/${sessionData.selectedType}/${sessionData.selectedLanguage}`
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
  // Im Array stehen die Parameter, bei deren *nderung diese Funktion ausgeführt wird
  }, [sessionData.selectedLanguage, sessionData.selectedType, sessionData.searchString])

// Hier wird das Grid zusammengebaut (durch eine Schleife)
// Innen werden dann auch noch die Bilder geladen und die wichtigsten Infos
// über die Pokemon gezeigt
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
                  src={`http://localhost:3001/api/getimage/${item.uuid}/false`}
                  alt={`Pokemon ${item.dex}`}
                  style={{ maxWidth: '150px'}}
                  crossOrigin="anonymous"
                />
                <img loading="lazy"
                  src={`http://localhost:3001/api/getimage/${item.uuid}/true`}
                  alt={`Shiny Pokemon ${item.dex}`}
                  style={{ maxWidth: '150px'}}
                  crossOrigin="anonymous"
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