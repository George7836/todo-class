import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import SearchField from './SearchField'

export default function Header() {
  return (
    <Box>
      <AppBar>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <SearchField/>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
