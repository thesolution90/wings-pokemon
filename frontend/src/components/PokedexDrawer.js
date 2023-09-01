import React, { useState, useEffect } from 'react';
import { Button, TextField, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const PokedexDrawer = ({ uuid }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState('');

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleTextFieldClick = (event) => {
    event.stopPropagation();
  };

  const handleTextFieldFocus = () => {
    setIsTextFieldFocused(true);
  };

  const handleTextFieldBlur = () => {
    setIsTextFieldFocused(false);
  };

  const handleTextFieldKeyDown = (event) => {
    // Prevent the keydown event from propagating to parent elements and closing the drawer
    event.stopPropagation();
    // event.preventDefault();
  };

  const logtheshit = () => {
    console.log(uuid)
  }

  useEffect(() => {
    // Fetch data from your API when the component mounts
    // Replace 'yourApiEndpoint' with the actual API endpoint you want to call
    fetch('http://localhost:3001/pokedexinfo/bla')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        setTextFieldValue(data.result); // Replace 'yourDataField' with the actual field you want to display
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
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
            <TextField
              label="Enter Text"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              onClick={handleTextFieldClick}
              onFocus={handleTextFieldFocus}
              onBlur={handleTextFieldBlur}
              onKeyDown={handleTextFieldKeyDown}
              value={textFieldValue}
            />
          </div>
          <Button onClick={logtheshit}>Update entry</Button>
        </Drawer>
      </div>
    );
  };
  
  export default PokedexDrawer;
  