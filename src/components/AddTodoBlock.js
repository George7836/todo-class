import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { TodoContext } from '../context/TodoContexxt'
import { nanoid } from 'nanoid'

class AddTodoBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }
  }

  render() {
    const addTodo = this.context.addTodo
    const lightMode = this.context.theme
    return (
        <Box
          sx={{
            backgroundColor: '#fff',
            marginTop: '70px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: lightMode === 'light' ? 'background.paper' : 'rgba(255, 255, 255, 0.12)'
          }}
        >
          <TextField 
            variant='outlined' 
            fullWidth
            error={this.state.title.length < 2 ? true : false}
            helperText={this.state.title.length < 2 ? 'too short value' : null}
            value={this.state.title}
            placeholder='Title'
            inputProps={{ style: { padding: '10px', color: lightMode === 'dark' && '#fff' } }}
            autoFocus
            onChange={(e) => this.handleChangeTitle(e)}
          />
           <TextField 
            variant='outlined' 
            fullWidth
            style={{ marginTop: '10px' }}
            value={this.state.text}
            placeholder='Your task'
            inputProps={{ style: { padding: '10px', color: lightMode === 'dark' && '#fff'} }}
            onChange={(e) => this.handleChangeText(e)}
          />
          <Button 
            variant="contained"
            sx={{
              alignSelf: 'flex-end',
              marginTop: '10px'
            }}
            onClick={() => this.addNewTask(addTodo)}
          >
            Add Task
          </Button>
        </Box>
    )
  }

  handleChangeText(e) {
    this.setState({text: e.target.value})
  }

  handleChangeTitle(e) {
    this.setState({title: e.target.value})
  }

  async addNewTask(addFunc) {
    if(this.state.title.length < 2) {
      return false
    }
    await addFunc(nanoid(), this.state.text, this.state.title, false, false)
    const filterTodos = this.context.filterTodos
    filterTodos(this.context.todos)
    this.setState({text: ''})
    this.setState({title: ''})
  }
}

AddTodoBlock.contextType = TodoContext

export default AddTodoBlock