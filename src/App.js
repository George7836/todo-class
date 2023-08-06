import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Container } from "@mui/material";
import AddTodoBlock from "./components/AddTodoBlock";
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
     <>
      <Header/>
      <Container
        maxWidth='lg' 
        sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
      >
        <AddTodoBlock/>
        <TodoList/>
      </Container>
    </>
    )
  }
}

export default App