import React, { Component } from 'react'
import { Checkbox, IconButton, ListItem, ListItemText, TextField } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
export default class TodoItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const lineThrough = this.props.done ? "line-through" : "none"

    return (
      <ListItem
        key={this.props.id}
        disablePadding
        sx={{ padding: '5px' }}
      >
        <Checkbox
          checked={this.props.done}
        />
        {/* {editMode 
          ? <TextField 
              variant='standard' 
              fullWidth
              inputProps={{ style: { paddingTop: 5 } }}
            />
          : <ListItemText 
              primary={this.props.content}
              style={{"textDecoration": lineThrough, "wordBreak": "break-all"}}
            />
        } */}
        <ListItemText 
          primary={this.props.content}
          style={{"textDecoration": lineThrough, "wordBreak": "break-all"}}
        />
        {/* {editMode
          ? 
            <IconButton>
              <DoneIcon />
            </IconButton>
          : 
            <IconButton>
              <EditIcon />
            </IconButton>
        } */}
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </ListItem>
    )
  }
}
