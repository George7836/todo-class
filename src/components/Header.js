import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import SearchField from './SearchField'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { TodoContext } from '../context/TodoContexxt';

export default class Header extends React.Component {

  render() {
    const setLightMode = this.context.setLightMode
    const lightMode = this.context.theme
    return (
      <Box>
        <AppBar>
          <Toolbar sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <SearchField/>
            {lightMode === 'light'
              ? <IconButton onClick={() => setLightMode('dark')}>
                  <DarkModeIcon/>
                </IconButton>
              : <IconButton>
                <LightModeOutlinedIcon onClick={() => setLightMode('light')}/>
              </IconButton>
            }
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

Header.contextType = TodoContext