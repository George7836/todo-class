import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import TodoList from './TodoList'
import { TodoContext } from '../context/TodoContexxt'

export class AppRouter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<TodoList todos={this.filterTodos('active')}/>}/>
          <Route path='/completed' element={<TodoList todos={this.filterTodos('completed')}/>}/>
          <Route path='/archive' element={<TodoList todos={this.filterTodos('archived')}/>}/>
        </Route>
      </Routes>
    )
  }

  filterTodos = (category) => {
    let filteredTodos
    switch(category) {
        case 'active':
            filteredTodos = this.context.todos.filter((todo) => todo.done === false)
            break
        case 'completed':
            filteredTodos = this.context.todos.filter((todo) => todo.done === true)
            break
        case 'archived': 
            filteredTodos = this.context.todos.filter((todo) => todo.archived === true)
            break
    }
    return filteredTodos
  }
}



AppRouter.contextType = TodoContext