import { List, Typography } from '@mui/material'
import React from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../context/TodoContexxt'
class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const lightMode = this.context.theme
    return (
      <List sx={{ 
        width: '100%', 
        bgcolor: lightMode === 'light' ? 'background.paper' : 'rgba(255, 255, 255, 0.12)', 
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
          : <Typography sx={{ padding: '10px', color: lightMode === 'dark' && '#fff' }}>There is no task</Typography>
        }
      </List>
    )
  }
}

TodoList.contextType = TodoContext

export default TodoList