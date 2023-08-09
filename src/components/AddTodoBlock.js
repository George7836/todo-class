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
            value={this.state.title}
            placeholder='Title'
            inputProps={{ style: { padding: '10px' } }}
            autoFocus
            onChange={(e) => this.handleChangeTitle(e)}
          />
           <TextField 
            variant='outlined' 
            fullWidth
            style={{ marginTop: '10px' }}
            value={this.state.text}
            placeholder='Your task'
            inputProps={{ style: { padding: '10px'} }}
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
    await addFunc(nanoid(), this.state.text, this.state.title, false, false)
    const filterTodos = this.context.filterTodos
    filterTodos(this.context.todos)
    this.setState({text: ''})
    this.setState({title: ''})
  }
}

AddTodoBlock.contextType = TodoContext

export default AddTodoBlock