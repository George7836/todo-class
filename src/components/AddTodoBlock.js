import { Box, Button, TextField } from '@mui/material'
import React from 'react'

class AddTodoBlock extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Box
          sx={{
            backgroundColor: '#fff',
            marginTop: '70px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <TextField 
            variant='outlined' 
            fullWidth
            placeholder='Add new task ...'
            inputProps={{ style: { padding: '10px' } }}
            autoFocus
          />
          <Button 
            variant="contained"
            sx={{
              alignSelf: 'flex-end',
              marginTop: '10px'
            }}
          >
            Add Task
          </Button>
        </Box>
    )
  }
}

export default AddTodoBlock