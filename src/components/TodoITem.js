import React, { Component } from 'react'
import { Checkbox, IconButton, ListItem, ListItemText, TextField } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { TodoContext } from '../context/TodoContexxt';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      title: this.props.title,
      content: this.props.content
    }
  }

  render() {
    const lineThrough = this.props.done ? "line-through" : "none"
    const deleteTodo = this.context.deleteTodo
    const setCompleted = this.context.setCompleted
    const updateTodo = this.context.updateTodo
    const setToArchive = this.context.setToArchive

    return (
      <ListItem
        key={this.props.id}
        disablePadding
        sx={{ padding: '5px' }}
        style={{ display: 'flex', alignItems: 'flex-start'}}
      >
        <Checkbox
          checked={this.props.done}
          onClick={() => setCompleted(this.props.id)}
        />
        {this.state.editMode 
          ? <>
              <TextField 
                variant='standard'
                fullWidth
                value={this.state.title}
                onChange={(e) => this.setState({title: e.target.value})}
                style={{ marginRight: 25 }}
                inputProps={{ style: { paddingTop: 5 } }}
              />
              <TextField 
                variant='standard' 
                fullWidth
                value={this.state.content}
                onChange={(e) => this.setState({content: e.target.value})}
                inputProps={{ style: { paddingTop: 5 } }}
              />
            </>
          : <ListItemText 
              primary={this.props.title}
              secondary={this.props.content}
              style={{"textDecoration": lineThrough, "wordBreak": "break-all"}}
            />
        }
        {this.props.archived
          ? <IconButton onClick={() => this.handleSendToArchive(setToArchive)}>
              <UnarchiveIcon/>
            </IconButton>
          : <IconButton onClick={() => this.handleSendToArchive(setToArchive)}>
              <ArchiveIcon/>
            </IconButton>
        }
        
        {this.state.editMode
          ? 
            <IconButton 
              onClick={() => this.handleUpdate(updateTodo)}
             
            >
              <DoneIcon />
            </IconButton>
          : 
            <IconButton 
              onClick={() => this.setState({editMode: !this.state.editMode})}
              style={{margin: '0 6px 0 10px'}}  
            >
              <EditIcon />
            </IconButton>
        }
        <IconButton onClick={() => this.handleDelete(deleteTodo)}>
          <ClearIcon />
        </IconButton>
      </ListItem>
    )
  }

 async handleUpdate(updateFunc) {
    await updateFunc(this.props.id, this.state.title, this.state.content)
    const filterTodos = this.context.filterTodos
    filterTodos(this.context.todos)
    this.setState({editMode: !this.state.editMode})
  }

  async handleDelete(deleteFunc) {
    await deleteFunc(this.props.id)
    const filterTodos = this.context.filterTodos
    filterTodos(this.context.todos)
  }

  async handleSendToArchive(setToArchiveFunc) {
    await setToArchiveFunc(this.props.id)
    const filterTodos = this.context.filterTodos
    filterTodos(this.context.todos)
  }
}

TodoItem.contextType = TodoContext