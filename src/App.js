import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Container } from "@mui/material";
import AddTodoBlock from "./components/AddTodoBlock";
import { TodoContext } from "./context/TodoContexxt";
class App extends React.Component {
  constructor(props) {
    super(props)

    this.addTodo = (id, content, title, done) => {
      this.setState({todos: [...this.state.todos, {id: id, content: content, title: title, done: done}]})
    }

    this.state = {
      todos: [
        {
          id: 1,
          content: 'New Task',
          title: 'Very important',
          done: false
        },
        {
          id: 2,
          content: 'New Task2',
          title: 'Highly important',
          done: false
        },
        {
          id: 3,
          content: 'New Task3',
          title: 'Extremly important',
          done: false
        }
      ],
      addTodo: this.addTodo
    }
  }

  render() {
    return (
     <>
      <Header/>
      <TodoContext.Provider value={this.state}>
        <Container
          maxWidth='lg' 
          sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
        >
          <AddTodoBlock/>
          <TodoList/>
        </Container>
      </TodoContext.Provider>
    </>
    )
  }
}

export default App