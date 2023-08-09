import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Container } from "@mui/material";
import AddTodoBlock from "./components/AddTodoBlock";
import { TodoContext } from "./context/TodoContexxt";
import { HashRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
class App extends React.Component {
  constructor(props) {
    super(props)

    this.addTodo = (id, content, title, done, archived) => {
      this.setState({todos: [...this.state.todos, {id: id, content: content, title: title, done: done, archived: archived}]})
    }
    this.deleteTodo = (id) => {
      this.setState({todos: this.state.todos.filter((el) => el.id !== id)})
    }
    this.setCompleted = (id) => {
      this.setState({todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.done = !todo.done
        }
        return todo
      })})
    }
    this.updateTodo =(id, title, content) => {
      this.setState({todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.content = content
          todo.title = title
        }
        return todo
      })})
    }
    this.setToArchive = (id) => {
      this.setState({todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.archived = !todo.archived
        }
        return todo
      })})
    }
    this.filterTodos = (todos) => {
      this.setState({filteredTodos: 
        this.state.searchValue 
        ? todos.filter((todo) => todo.content.toLowerCase().includes(this.state.searchValue.toLowerCase())) 
        : [...todos]
      })
    }
    this.setSearchValue = (text) => {
      this.setState({searchValue: text})
    }

    this.state = {
      todos: [],
      filteredTodos: [],
      searchValue: '',
      addTodo: this.addTodo,
      deleteTodo: this.deleteTodo,
      setCompleted: this.setCompleted,
      updateTodo: this.updateTodo,
      setToArchive: this.setToArchive,
      setSearchValue: this.setSearchValue,
      filterTodos: this.filterTodos
    }
  }

  componentDidMount() {
    if(localStorage.getItem('todos')) {
      const data = localStorage.getItem('todos')
      this.setState({todos: JSON.parse(data)})
      this.filterTodos(JSON.parse(data))
    } else {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(JSON.stringify(this.state.todos) !== JSON.stringify(prevState)) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }

  render() {
    return (
    <HashRouter basename="/">
        <TodoContext.Provider value={this.state}>
          <AppRouter/>
        </TodoContext.Provider>
    </HashRouter>
    )
  }
}

export default App