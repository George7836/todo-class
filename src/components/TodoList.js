import { List, Typography } from '@mui/material'
import React from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../context/TodoContexxt'
class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <List sx={{ 
        width: '100%', 
        bgcolor: 'background.paper', 
        marginTop: '15px'
      }}>
        {this.props.todos.length > 0
          ?
          this.props.todos.map((todo) => (
            <TodoItem 
              key={todo.id}
              id={todo.id}
              content={todo.content}
              done={todo.done}
              title={todo.title}
              archived={todo.archived}
            />
          ))
          : <Typography sx={{ padding: '10px' }}>There is no task</Typography>
        }
      </List>
    )
  }
}

TodoList.contextType = TodoContext

export default TodoList