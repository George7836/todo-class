import { List, Typography } from '@mui/material'
import React from 'react'
import TodoItem from './TodoItem'

const todos = [
  {
    id: 1,
    content: 'New Task',
    done: false
  },
  {
    id: 2,
    content: 'New Task2',
    done: false
  },
  {
    id: 3,
    content: 'New Task3',
    done: false
  },
]

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
        {todos.length > 0
          ?
          todos.map((todo) => (
            <TodoItem 
              key={todo.id}
              id={todo.id}
              content={todo.content}
              done={todo.done}
            />
          ))
          : <Typography sx={{ padding: '10px' }}>There is no task</Typography>
        }
      </List>
    )
  }
}

export default TodoList