import React, { useState, useEffect } from 'react';
import { Button, TextField, Drawer, Typography, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

// Der Drawer der sich öffnet, damit man Daten eingeben kann

const PokedexDrawer = ({ uuid }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);
  const [apiText, setApiText] = useState('')
  const [textFieldValue, setTextFieldValue] = useState('');

  // alles Funktionen damit der Drawer richtig angezeigt wird
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleTextFieldClick = (event) => {
    event.stopPropagation();
  };

  const handleTextFieldKeyDown = (event) => {
    event.stopPropagation();
  };

  const handleTextFieldFocus = () => {
    setIsTextFieldFocused(true);
  };

  const handleTextFieldBlur = () => {
    setIsTextFieldFocused(false);
  };

  // Erhalten der richtigen TextDaten von der API
  const fetchDataAndUpdate = () => {
    fetch(`http://localhost:3001/api/annotation/${uuid}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result === null) {
          data.result = 'Nothing stored yet'
        }
        setApiText(data.result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  // Senden von neuen Daten an die API
  const handleUpdateEntry = () => {
    const val = textFieldValue;
    if (val) {
      fetch(`http://localhost:3001/api/annotation/${uuid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: val,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTextFieldValue('');
          fetchDataAndUpdate()
        })
        .catch((error) => {
          console.error('Error sending POST request:', error);
        });
    }
  }

  // Wird verwendet um das Typography Feld zu aktualisieren
  useEffect(() => {
    fetchDataAndUpdate()
  }, []);


    return (
      <div>
        <Button onClick={toggleDrawer}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor="bottom"
          open={isDrawerOpen}
          onClose={toggleDrawer}
        >
          <div
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <Typography sx={{ fontSize: 16, marginBottom: '16px', marginTop: '16px', marginLeft: '10px', marginRight: '10px' }}>
              {apiText}
            </Typography>
            <Divider></Divider>
            <TextField
              label="Fill in your information"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              onClick={handleTextFieldClick}
              onFocus={handleTextFieldFocus}
              onBlur={handleTextFieldBlur}
              onKeyDown={handleTextFieldKeyDown}
              value={textFieldValue}
              onChange={(e) => setTextFieldValue(e.target.value)}
            />
          </div>
          <Button onClick={handleUpdateEntry}>Update entry</Button>
        </Drawer>
      </div>
    );
  };
  
  export default PokedexDrawer;
  